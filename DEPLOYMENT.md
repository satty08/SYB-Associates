# Hosting on Azure with a GoDaddy domain

This app is a TanStack Start (React 19 + Vite) site with server-side rendering, so it needs a
**Node.js server** — not a static file host. The build is already configured for that: setting
`DEPLOY_TARGET=azure` makes the build emit a plain Node server at `.output/server/index.mjs`.

Backend (database for leads, newsletter, analytics) stays where it is — it is a hosted service
reached over HTTPS, so nothing needs to move to Azure.

---

## Part 1 — Build locally and verify

```bash
bun install
DEPLOY_TARGET=azure bun run build
PORT=8080 node .output/server/index.mjs
```

Open http://localhost:8080 — this is exactly what Azure will run.

---

## Part 2 — Create the Azure Web App

1. Sign in to the [Azure Portal](https://portal.azure.com).
2. **Create a resource → Web App**.
3. Fill in:
   - **Resource group**: create one, e.g. `rg-syb`
   - **Name**: `SYBAssociates` (becomes `sybassociates.azurewebsites.net`)
   - **Publish**: `Code`
   - **Runtime stack**: `Node 22 LTS`
   - **Operating System**: `Linux`
   - **Region**: nearest your users
   - **Pricing plan**: `B1` or higher (Free F1 sleeps and has no custom-domain SSL)
4. **Review + create → Create**.

### Configure the app

In the Web App blade → **Settings → Configuration**:

**General settings → Startup Command:**

```
node .output/server/index.mjs
```

**Application settings** (Environment variables) — add each, then **Save**:

| Name                             | Value                                              |
| -------------------------------- | -------------------------------------------------- |
| `SUPABASE_URL`                   | `https://xkrlmjovsatealnernti.supabase.co`         |
| `SUPABASE_PUBLISHABLE_KEY`       | `sb_publishable_XTRI8Xp4Sy2TsOyl1tR-Kg_vOkOmG33`   |
| `SUPABASE_PROJECT_ID`            | `xkrlmjovsatealnernti`                             |
| `WEBSITES_PORT`                  | `8080`                                             |
| `SCM_DO_BUILD_DURING_DEPLOYMENT` | `false` (we deploy a pre-built server)             |

> The `VITE_*` values are compiled into the browser bundle **at build time**, so they belong in the
> build environment (GitHub Actions secrets), not in Azure app settings.

---

## Part 3 — Deploy the code

### Option A — GitHub Actions (recommended)

The workflow is already committed at `.github/workflows/azure-webapp.yml`.

1. Push this project to a GitHub repository.
2. In the Azure Portal → your Web App → **Deployment Center → Manage publish profile → Download**.
3. In GitHub → repo **Settings → Secrets and variables → Actions → New repository secret**, add:
   - `AZURE_WEBAPP_PUBLISH_PROFILE` — paste the full contents of the downloaded `.PublishSettings` file
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`
4. Edit `AZURE_WEBAPP_NAME` at the top of the workflow to match your Web App name.
5. Push to `main` — every push builds and deploys automatically.

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

A `Dockerfile` is included. Build, push to Azure Container Registry, and point an
App Service (container) or Azure Container App at the image.

Verify at `https://<your-app>.azurewebsites.net` before touching DNS.

---

## Part 4 — Connect the GoDaddy domain

### 4.1 Get the Azure values

Azure Portal → Web App → **Settings → Custom domains → Add custom domain**:

- Domain provider: **All other domain services**
- TLS/SSL certificate: **App Service Managed Certificate**
- Domain type: **CNAME** (for `www`) — do the apex separately
- Enter `www.yourdomain.com`

Azure shows two records to create: a **CNAME** and a **TXT** verification record. Keep the page open.

### 4.2 Add the records in GoDaddy

GoDaddy → **My Products → Domains → your domain → DNS → Manage DNS**:

| Type    | Name           | Value                                    | TTL    |
| ------- | -------------- | ---------------------------------------- | ------ |
| `CNAME` | `www`          | `meridian-advisory.azurewebsites.net`    | 1 hour |
| `TXT`   | `asuid.www`    | *(verification ID shown by Azure)*       | 1 hour |
| `A`     | `@`            | *(inbound IP address shown by Azure)*    | 1 hour |
| `TXT`   | `asuid`        | *(same verification ID, for the apex)*   | 1 hour |

The inbound IP for the apex `A` record is in Azure Portal → Web App → **Custom domains →
Inbound IP address** (or **Properties**). Delete GoDaddy's default parked `A @` record pointing to
their forwarding IP first, otherwise it conflicts.

### 4.3 Validate

Back in Azure, click **Validate** then **Add** for each domain. DNS usually propagates in 10–60
minutes (GoDaddy can take up to a few hours).

### 4.4 Enable HTTPS

For each added domain: **Custom domains → … → Add binding → App Service Managed Certificate →
Create**. Then **Settings → Configuration → General settings → HTTPS Only: On**.

Finally, in the app's SEO metadata, update the canonical URLs from the current domain to
`https://www.yourdomain.com` so search engines index the right host.

---

## Ongoing

- Code changes: push to `main` → GitHub Actions redeploys.
- Database/auth changes: still managed in the backend dashboard; no Azure redeploy needed.
- Logs: Azure Portal → Web App → **Monitoring → Log stream**.

## Troubleshooting

| Symptom                            | Fix                                                                 |
| ---------------------------------- | ------------------------------------------------------------------- |
| "Application Error" page           | Check Log stream; usually a wrong Startup Command path.               |
| Site loads but hangs / 504         | `WEBSITES_PORT=8080` missing, or the server bound to another port.    |
| Blank page, console 404 on assets  | `.output/public` wasn't included in the deployed zip.                 |
| Forms silently fail                | `SUPABASE_URL` / `SUPABASE_PUBLISHABLE_KEY` app settings missing.     |
| Domain won't validate              | Wrong `asuid` TXT name, or old GoDaddy parked A record still present. |

---

## Notes

- Add an app setting `SITE_URL=https://www.yourdomain.com` in Azure — `/sitemap.xml` uses it to emit
  absolute URLs.
- Building inside Lovable still targets Lovable's own hosting; the Azure Node output
  (`.output/server/index.mjs`) is produced only when `DEPLOY_TARGET=azure` is set, which is how the
  GitHub Actions workflow and the Dockerfile build it.
