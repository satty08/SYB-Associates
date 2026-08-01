// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Deployment target:
//   - default (Lovable hosting): Cloudflare Workers build, handled automatically.
//   - Azure: set DEPLOY_TARGET=azure before `bun run build` to emit a plain Node.js
//     server at .output/server/index.mjs that Azure App Service runs.
// NOTE: "azure" is NOT a valid Nitro preset name. Nitro reads NITRO_PRESET itself,
// so we normalise any azure-ish value to the real preset: node-server.
const rawPreset = process.env["NITRO_PRESET"] ?? process.env["SERVER_PRESET"] ?? "";
const azure =
  process.env["DEPLOY_TARGET"] === "azure" ||
  rawPreset === "azure" ||
  rawPreset === "node-server" ||
  rawPreset === "node";

if (azure) {
  // Prevent Nitro from picking up an invalid preset from the environment.
  process.env["NITRO_PRESET"] = "node-server";
  process.env["SERVER_PRESET"] = "node-server";
}

export default defineConfig({
  ...(azure ? { nitro: { preset: "node-server" as const } } : {}),

  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
