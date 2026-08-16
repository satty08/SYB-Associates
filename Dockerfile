# Production image for Azure App Service (Linux container) or Azure Container Apps.
FROM oven/bun:1 AS build
WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .

ENV DEPLOY_TARGET=azure

RUN bun run build

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
COPY --from=build /app/.output ./.output
EXPOSE 8080
ENV PORT=8080
# DATABASE_URL is runtime-only (Azure Database for PostgreSQL connection string).
# Supply it via Azure App Settings / Container App env vars / `docker run -e DATABASE_URL=...`.
# Never bake it into the image with an ARG/ENV at build time.
CMD ["node", ".output/server/index.mjs"]