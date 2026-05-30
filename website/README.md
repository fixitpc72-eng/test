# ADMS — ClearView Website

Clean React + Vite + TypeScript + Tailwind v4 source for the ADMS / ClearView marketing site and the ClearView Mobile app preview. Rebuilt and restructured from the original bundled output.

## Quick start

```bash
# inside /app/website
yarn            # or: npm install
yarn dev        # starts dev server on http://localhost:5173
```

Open:

- **Main marketing site** &rarr; <http://localhost:5173/>
- **ClearView Mobile app preview** &rarr; <http://localhost:5173/app/>

To build for production:

```bash
yarn build      # outputs /dist (both entries bundled)
yarn preview    # serves the built /dist locally
```

## Theme toggle (dark / light)

Click the **Sun / Moon** button in the top-right of the main site header.
The choice is persisted in `localStorage` (key: `adms-theme`) and respects the OS preference on first visit. The mobile app preview at `/app/` is dark-only by design (matches the original).

## File structure

```
website/
├── index.html                # main marketing site entry
├── app/
│   └── index.html            # ClearView mobile app entry
├── public/
│   └── adms-clearview-dashboard.png
├── vite.config.ts            # multi-page (main + app) Vite config
├── tsconfig.json
├── package.json
└── src/
    ├── main.tsx              # entry for /
    ├── app-main.tsx          # entry for /app/
    ├── App.tsx               # marketing site root component
    ├── styles/
    │   └── globals.css       # Tailwind v4 + design-token CSS variables
    ├── context/
    │   └── ThemeProvider.tsx # dark/light theme context + localStorage
    ├── data/                 # plain data (no logic)
    │   ├── trades.ts         # the 6 trade verticals
    │   ├── features.ts       # the 14 platform feature modules
    │   ├── stats.ts          # 3 performance stats + rotating hero words
    │   └── assignments.ts    # mock work orders for the mobile app
    ├── lib/
    │   └── utils.ts          # tiny `cn()` helper
    ├── components/
    │   ├── Header.tsx
    │   ├── ThemeToggle.tsx
    │   ├── ui/               # leaf primitives
    │   │   ├── Button.tsx
    │   │   ├── Card.tsx
    │   │   └── Overline.tsx
    │   ├── sections/         # marketing site sections (one file each)
    │   │   ├── Hero.tsx
    │   │   ├── TradesGrid.tsx
    │   │   ├── FieldDocumentation.tsx
    │   │   ├── FeaturesGrid.tsx
    │   │   ├── StatsSection.tsx
    │   │   ├── DashboardPreview.tsx
    │   │   └── Footer.tsx
    │   └── app/
    │       └── ClearViewApp.tsx   # the ClearView Mobile app preview
```

## Design tokens

All colors live as CSS variables in `src/styles/globals.css` so you can theme the entire site by editing one block:

```css
:root { /* light */
  --background: oklch(98% 0.005 285.8);
  --foreground: oklch(15% 0.01 285.8);
  --primary:    oklch(55% 0.22 35);   /* ADMS orange */
  --hud-cyan:   oklch(75% 0.18 200);  /* HUD accent  */
  /* …etc */
}

.dark { /* dark */
  --background: oklch(5% 0.005 285.8);
  --foreground: oklch(95% 0.01 65);
  /* …etc */
}
```

The exact OKLCH values were extracted from the original bundle so the look matches 1:1.

## Notes

- The "Request Demo" and "Watch the Pitch" buttons are visual only — no backend wired up.
- The mobile app preview at `/app/` simulates 5 work orders (HVAC / Plumbing / Electrical / Solar / Telecom) with a tenant queue → assignment → submit flow. It uses fixture data from `src/data/assignments.ts`.
- Lucide icons via `lucide-react`.
- Fonts (Orbitron / JetBrains Mono / Plus Jakarta Sans) are loaded from Google Fonts in each entry HTML.
