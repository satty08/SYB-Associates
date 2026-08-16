# Hosting on Azure with a GoDaddy domain

This app is a TanStack Start (React 19 + Vite) site with server-side rendering, so it needs a
**Node.js server** — not a static file host. The build is already configured for that: setting
`DEPLOY_TARGET=azure` makes the build emit a plain Node server at `.output/server/index.mjs`.

The database (leads, newsletter subscribers, page-view analytics) is **Azure Database for
PostgreSQL — Flexible Server**, provisioned as part of this deployment. All database access
happens server-side only, through TanStack Start server functions — no database credential is
ever shipped to the browser.

---

## Part 1 — Provision the database

```bash
az postgres flexible-server create \
  --resource-group rg-meridian \
  --name syb-associates-db \
  --location <region> \
  --admin-user sybadmin \
  --admin-password <secret> \
  --sku-name Standard_B1ms \
  --tier Burstable \
  --storage-size 32 \
  --version 16
```

> `Standard_B1ms` (Burstable) is enough for a contact form, newsletter signup, and lightweight
> pageview logging. Scale up later if traffic grows.

**Networking** — either:
- Quick start: enable **"Allow public access from Azure services"** on the server's networking
  blade, or
- Recommended for production: put the Flexible Server and the Web App in the same VNet with a
  private endpoint, so the database has no public IP at all.

**Apply the schema** — connect with `psql` (or any Postgres client) and run:

```sql
CREATE TABLE leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  company text NOT NULL CHECK (char_length(company) BETWEEN 2 AND 120),
  role text CHECK (role IS NULL OR char_length(role) <= 120),
  industry text NOT NULL CHECK (industry IN ('pharma','manufacturing','consumer-health','other')),
  interest text NOT NULL CHECK (interest IN ('supply-chain','digital','analytics','operations','not-sure')),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 1500),
  source_path text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE CHECK (char_length(email) BETWEEN 3 AND 255),
  source_path text,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE page_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  path text NOT NULL CHECK (char_length(path) BETWEEN 1 AND 512),
  referrer text CHECK (referrer IS NULL OR char_length(referrer) <= 1024),
  user_agent text CHECK (user_agent IS NULL OR char_length(user_agent) <= 512),
  session_id text CHECK (session_id IS NULL OR char_length(session_id) <= 64),
  event_type text NOT NULL DEFAULT 'pageview' CHECK (event_type IN ('pageview','lead_submitted','newsletter_signup','cta_click')),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX page_views_created_at_idx ON page_views (created_at DESC);
CREATE INDEX page_views_path_idx ON page_views (path);
```

> Unlike the old Supabase setup, there are no RLS policies or `anon`/`authenticated` grants here —
> access control now lives entirely in the fact that only server code holds the connection string.
> Future schema changes must be applied manually against this server (no auto-sync).

---

## Part 2 — Build locally and verify

```bash
bun install
DEPLOY_TARGET=azure bun run build
DATABASE_URL="postgresql://sybadmin:<password>@syb-associates-db.postgres.database.azure.com:5432/postgres?sslmode=require" \
  PORT=8080 node .output/server/index.mjs
```

> Use `DEPLOY_TARGET=azure` — **not** `NITRO_PRESET=azure`. There is no Nitro preset called
> `azure`; the correct one is `node-server`, which `DEPLOY_TARGET=azure` selects for you.
> (If `NITRO_PRESET=azure` is set anywhere in your shell or `.env`, remove it — the build now
> rewrites it to `node-server`, but it's cleaner to unset it: `unset NITRO_PRESET`.)

Open http://localhost:8080 — this is exactly what Azure will run. Submit the contact form and
newsletter signup locally to confirm rows land in `leads` / `newsletter_subscribers`.

---

## Part 3 — Create the Azure Web App

1. Sign in to the [Azure Portal](https://portal.azure.com).
2. **Create a resource → Web App**.
3. Fill in:
   - **Resource group**: same one as the database, e.g. `rg-meridian`
   - **Name**: `meridian-advisory` (becomes `meridian-advisory.azurewebsites.net`)
   - **Publish**: `Code`
   - **Runtime stack**: `Node 22 LTS`
   - **Operating System**: `Linux`
   - **Region**: same region as the database (avoid cross-region latency)
   - **Pricing plan**: `B1` or higher (Free F1 sleeps and has no custom-domain SSL)
4. **Review + create → Create**.

### Configure the app

In the Web App blade → **Settings → Configuration**:

**General settings → Startup Command:**

```
node .output/server/index.mjs
```

**Application settings** (Environment variables) — add each, then **Save**:

| Name                             | Value                                                             |
| --------------------------------- | ------------------------------------------------------------------ |
| `DATABASE_URL`                    | `postgresql://sybadmin:<password>@syb-associates-db.postgres.database.azure.com:5432/postgres?sslmode=require` |
| `WEBSITES_PORT`                   | `8080`                                                              |
| `SCM_DO_BUILD_DURING_DEPLOYMENT`  | `false` (we deploy a pre-built server)                              |
| `SITE_URL`                        | `https://www.yourdomain.com` (once the custom domain is live — used by `/sitemap.xml`) |

> There are no client-visible (`VITE_*`) variables anymore. Nothing database-related is ever
> read in the browser bundle — the database credential lives only in this App Setting, read by
> server functions at request time.

If the Web App and database use VNet integration instead of public access, also enable
**VNet Integration** under **Settings → Networking** and point it at the same virtual network as
the Flexible Server.

---

## Part 4 — Deploy the code

### Option A — GitHub Actions (recommended)

The workflow is already committed at `.github/workflows/azure-webapp.yml`.

1. Push this project to a GitHub repository.
2. In the Azure Portal → your Web App → **Deployment Center → Manage publish profile → Download**.
3. In GitHub → repo **Settings → Secrets and variables → Actions → New repository secret**, add:
   - `AZURE_WEBAPP_PUBLISH_PROFILE` — paste the full contents of the downloaded `.PublishSettings` file
4. Edit `AZURE_WEBAPP_NAME` at the top of the workflow to match your Web App name.
5. Push to `main` — every push builds and deploys automatically.

> No `VITE_*` build secrets are needed anymore — `DATABASE_URL` is a runtime-only App Setting,
> not something the build step touches.

### Option B — Manual zip deploy from your machine

```bash
DEPLOY_TARGET=azure bun run build
cd .output && zip -r ../app.zip . && cd ..
az login
az webapp deploy \
  --resource-group rg-meridian \
  --name meridian-advisory \
  --src-path app.zip --type zip
```

(Zip the contents so `.output/server/index.mjs` resolves; if you zip the folder itself, adjust the
startup command path accordingly.)

### Option C — Docker container

A `Dockerfile` is included. It no longer takes any build-time `ARG`s — `DATABASE_URL` is supplied
purely at runtime (via `docker run -e DATABASE_URL=...`, or the Web App's Application settings
if deploying the container to App Service). Build, push to Azure Container Registry, and point an
App Service (container) or Azure Container App at the image.

Verify at `https://<your-app>.azurewebsites.net` before touching DNS.

---

## Part 5 — Connect the GoDaddy domain

### 5.1 Get the Azure values

Azure Portal → Web App → **Settings → Custom domains → Add custom domain**:

- Domain provider: **All other domain services**
- TLS/SSL certificate: **App Service Managed Certificate**
- Domain type: **CNAME** (for `www`) — do the apex separately
- Enter `www.yourdomain.com`

Azure shows two records to create: a **CNAME** and a **TXT** verification record. Keep the page open.

### 5.2 Add the records in GoDaddy

GoDaddy → **My Products → Domains → your domain → DNS → Manage DNS**:

| Type    | Name           | Value                                    | TTL    |
| ------- | -------------- | ----------------------------------------- | ------ |
| `CNAME` | `www`          | `meridian-advisory.azurewebsites.net`     | 1 hour |
| `TXT`   | `asuid.www`    | *(verification ID shown by Azure)*        | 1 hour |
| `A`     | `@`            | *(inbound IP address shown by Azure)*     | 1 hour |
| `TXT`   | `asuid`        | *(same verification ID, for the apex)*    | 1 hour |

The inbound IP for the apex `A` record is in Azure Portal → Web App → **Custom domains →
Inbound IP address** (or **Properties**). Delete GoDaddy's default parked `A @` record pointing to
their forwarding IP first, otherwise it conflicts.

### 5.3 Validate

Back in Azure, click **Validate** then **Add** for each domain. DNS usually propagates in 10–60
minutes (GoDaddy can take up to a few hours).

### 5.4 Enable HTTPS

For each added domain: **Custom domains → … → Add binding → App Service Managed Certificate →
Create**. Then **Settings → Configuration → General settings → HTTPS Only: On**.

Finally, update `SITE_URL` (Part 3) and the app's canonical URLs to `https://www.yourdomain.com`
so search engines index the right host.

---

## Ongoing

- Code changes: push to `main` → GitHub Actions redeploys.
- **Database schema changes**: no auto-sync anymore — connect with `psql` (or your migration tool
  of choice) and apply changes to the Flexible Server directly. Keep a `migrations/` folder in the
  repo as the source of truth even though nothing applies it automatically.
- Logs: Azure Portal → Web App → **Monitoring → Log stream**.

## Troubleshooting

| Symptom                            | Fix                                                                    |
| ----------------------------------- | ------------------------------------------------------------------------ |
| "Application Error" page           | Check Log stream; usually a wrong Startup Command path.                  |
| Site loads but hangs / 504         | `WEBSITES_PORT=8080` missing, or the server bound to another port.       |
| Blank page, console 404 on assets  | `.output/public` wasn't included in the deployed zip.                    |
| Forms silently fail                | `DATABASE_URL` App Setting missing, malformed, or the Web App can't reach the Flexible Server (check networking/firewall rules). |
| Domain won't validate              | Wrong `asuid` TXT name, or old GoDaddy parked A record still present.    |

---

## Notes

- `SITE_URL=https://www.yourdomain.com` (Azure App Setting) is used by `/sitemap.xml` to emit
  absolute URLs — set it once the custom domain is live.
- Building inside Lovable still targets Lovable's own hosting; the Azure Node output
  (`.output/server/index.mjs`) is produced only when `DEPLOY_TARGET=azure` is set, which is how the
  GitHub Actions workflow and the Dockerfile build it.
- The database and the app should generally live in the same Azure region to minimize query
  latency on the contact form and newsletter signup paths.