# ---- Base image --------------------------------------------------------------
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}-alpine AS base

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

# helpful for native deps
RUN apk add --no-cache libc6-compat

# ---- Dependencies (locked) ---------------------------------------------------
FROM base AS deps
WORKDIR /app

# Copy only lockfiles & package.json for better cache hits
COPY package.json pnpm-lock.yaml* package-lock.json* yarn.lock* ./

# Prefer pnpm if lockfile exists, else npm
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm i --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f yarn.lock ]; then corepack yarn install --frozen-lockfile; \
  else npm i; fi

# ---- Build -------------------------------------------------------------------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Environment for Next.js build (change as needed)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build the app (standalone output)
RUN \
  if [ -f pnpm-lock.yaml ]; then pnpm build; \
  elif [ -f package-lock.json ]; then npm run build; \
  else corepack yarn build; fi

# ---- Runtime (minimal) -------------------------------------------------------
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Tune Node for containers
ENV UV_THREADPOOL_SIZE=4

# Create non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs
USER nextjs

# Copy the standalone server & public assets produced by Next
# .next/standalone includes the server + prod node_modules
COPY --from=builder /app/.next/standalone ./ 
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=3s --start-period=20s --retries=3 \
  CMD node -e "require('http').get('http://127.0.0.1:3000/healthz',()=>process.exit(0)).on('error',()=>process.exit(1))"

# Start the Next server (standalone includes server.js)
CMD ["node", "server.js"]
