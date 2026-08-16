// Server-only Postgres client. Only ever imported from inside a
// createServerFn `.handler()`, so TanStack Start's compiler strips this
// module (and this import) out of the client bundle entirely.
import postgres from "postgres";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    "Missing DATABASE_URL. Set it in Azure App Settings, or in .env.local for local dev.",
  );
}

// postgres.js connects lazily on first query — creating the client here at
// module scope does not open a connection until a handler actually runs
// `sql\`...\``, so there's no need for the lazy-proxy pattern the old
// Supabase client used.
export const sql = postgres(DATABASE_URL, { ssl: "require", max: 5 });