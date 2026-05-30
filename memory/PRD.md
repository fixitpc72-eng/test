# ADMS / ClearView — Codebase Restructure

## What was done
Took the user's bundled / minified ZIP (`ADMS Website (2).zip` — built Vite output, only `index.html` + `assets/*.js` + `assets/*.css`) and **reconstructed a clean, properly structured React source codebase** at `/app/website`.

No original source was provided. All component code, data, copy, and design tokens were rebuilt from:
- The raw text strings extracted from the minified JS bundles
- The OKLCH design tokens extracted from `style-CSUYzzQ8.css`
- The bundled HTML entry points (`index.html`, `app/index.html`)
- The dashboard asset (`adms-clearview-dashboard.png`)

## Stack
React 19 + Vite 6 + TypeScript + Tailwind v4 (matches what the original was actually built with: Tailwind v4 utilities, OKLCH tokens, Lucide icons). Multi-page Vite config so both entries (`/` marketing site and `/app/` mobile preview) ship from the same repo.

## File structure
```
/app/website/
├── index.html                # main marketing site entry
├── app/index.html            # ClearView mobile app entry
├── public/adms-clearview-dashboard.png
├── vite.config.ts            # multi-page input
├── tsconfig.json
├── package.json
├── README.md
└── src/
    ├── main.tsx              # entry for /
    ├── app-main.tsx          # entry for /app/
    ├── App.tsx               # marketing site root
    ├── styles/globals.css    # Tailwind v4 + OKLCH design tokens (.dark + :root)
    ├── context/ThemeProvider.tsx
    ├── data/                 # plain data (no logic)
    │   ├── trades.ts         # 6 trades
    │   ├── features.ts       # 14 platform feature modules
    │   ├── stats.ts          # 3 performance stats + rotating hero words
    │   └── assignments.ts    # mock work orders for the mobile app
    ├── lib/utils.ts
    └── components/
        ├── Header.tsx
        ├── ThemeToggle.tsx
        ├── ui/               # leaf primitives (Button, Card, Overline)
        └── sections/         # one file per marketing section
            ├── Hero.tsx
            ├── TradesGrid.tsx
            ├── FieldDocumentation.tsx
            ├── FeaturesGrid.tsx
            ├── StatsSection.tsx
            ├── DashboardPreview.tsx
            └── Footer.tsx
        └── app/
            └── ClearViewApp.tsx   # mobile app preview (queue → assignment → submit)
```

## Theme toggle
Dark / Light theme toggle via Sun / Moon button in the top-right of the main site header. State is persisted in `localStorage` (`adms-theme`). Honors OS preference on first visit. The mobile app preview at `/app/` is forced dark (matches original design which set `bg-[#020204]` on `<body>`).

## Build status
- `yarn build` passes TypeScript check and produces both entries:
  - `dist/index.html` + `dist/assets/main-*.js` (28.8 KB)
  - `dist/app/index.html` + `dist/assets/app-*.js` (15 KB)
  - Shared vendor chunk 197 KB.

## To run locally
```bash
cd /app/website
yarn         # one-time
yarn dev     # http://localhost:5173/  + http://localhost:5173/app/
```

## Note re: Expo app
An earlier Expo mobile port lives at `/app/frontend` (the original misunderstanding). It still works but is not the deliverable — the actual deliverable for this task is `/app/website`.
