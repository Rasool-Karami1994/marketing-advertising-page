# Marketing & Advertising Campaigns – Frontend Task
## **DEMO:** [https://marketing-advertising-page.vercel.app/]
A Next.js 16 (App Router) app implementing:
- **Hero** with motion
- **Swiper** “Obstacles” carousel (autoplay + nav + pause-on-hover)
- **Consultation Form** with validation + async submit + toast
- **FAQ** accordion
- **Tailwind CSS v4**, **Framer Motion**, **Swiper**, **IRANSansXFaNum** font, optimized SVG icons

## Tech Stack
- Next.js 16 (App Router) — `output: "standalone"`
- React 19
- Tailwind CSS v4
- Framer Motion
- Swiper.js
- TypeScript
- SVGO + inline React SVG icons

## Getting Started (Local)
```bash
# Install deps (pnpm recommended)
pnpm i        # or npm i

# Dev
pnpm dev      # http://localhost:3000

# Lint
pnpm lint

# Type-check
pnpm typecheck

# Build & start
pnpm build
pnpm start    # http://localhost:3000
````

## Environment

No required secrets. Optional:

* `NEXT_TELEMETRY_DISABLED=1`

If you add APIs, create `.env.local` and update `docker-compose.yml`.

## Docker (Production Build)

> Produces a minimal runtime image using Next’s **standalone** output.

```bash
# Build
docker build -t campaigns-web .

# Run
docker run --rm -p 3000:3000 campaigns-web

# Or via Compose
docker compose up --build
```

Health endpoint:

```
GET /healthz  -> 200 ok
```

## Project Structure (key parts)

```
app/
  layout.tsx
  page.tsx
  healthz/route.ts        # health check
  (sections)/
    hero/
    obstacles/
    form/
    faq/
components/
  icons/                  # React SVG icons (optimized by SVGO)
  hero/
  ...
public/
styles/
  globals.css             # Tailwind v4 + design tokens
next.config.ts            # output: "standalone"
```

## Styling & Tokens

* Tailwind v4 `@theme` in `globals.css` defines design tokens:

  * `--color-primary`, `--color-ink`, `--color-body`, `--color-surface`, `--color-ring`, etc.
* Container:

  * Mobile `padding-inline: 24px`
  * Desktop `padding-inline: 120px`, `max-width: 1440px`

## Icons Workflow

1. Export raw SVGs from Figma → `raw-icons/`
2. Optimize:

   ```bash
   npx svgo --config=./svgo.config.cjs -f ./raw-icons -o ./optimized-icons
   ```
3. Convert to React components (if you use the helper script):

   ```bash
   node scripts/convert-svgs-to-tsx.mjs
   ```
4. Import from `components/icons` and use with `fill="currentColor"` so color is controlled by CSS.

## Fonts

* `IRANSansXFaNum` loaded locally (via `next/font/local`) and set as `--font-iransansx-fanum` in `globals.css`.

## Accessibility

* All interactive elements have accessible names.
* Accordion buttons use `aria-expanded`.
* Respect `prefers-reduced-motion` in motion variants (pattern already included).

## Troubleshooting

* **Tailwind styles not applied**: Tailwind v4 requires `@import "tailwindcss";` in `globals.css` and that CSS imported in `app/layout.tsx`.
* **Gradient/purple band missing**: Use Tailwind gradient utilities:
  `bg-gradient-to-r from-[var(--color-primary-2)] to-[var(--color-primary)]`.
* **Swiper nav overlaps/un-clickable**: Ensure nav buttons have higher z-index and `pointer-events-auto` (implemented).

