# ADMS ClearView — Expo Mobile App

## Overview
Port of the **ADMS / ClearView** marketing site (Allied Data Solutions — a field-operations platform for commercial & residential trades) into a native Expo mobile app. Designed to be opened locally via Expo Go (QR code on the laptop). Single scrolling marketing experience with a persistent dark / light theme toggle in the header.

## User flow
1. Open Expo Go → scan local QR → app boots.
2. Sticky header shows **ADMS · CLEARVIEW** wordmark on the left, **Sun/Moon theme toggle** on the right.
3. Vertical scroll through hero → trades → field documentation → platform offerings → performance stats → dashboard preview → footer CTA.
4. Tapping the theme toggle instantly switches the entire app between **DARK** and **LIGHT** mode while preserving scroll position.

## Sections
- **Hero**: rotating word headline ("REBUILDING THE {FIELD / TRADES / SERVICE / ENTERPRISE / OPERATIONS} OPERATIONS LAYER"), sub-copy, REQUEST DEMO + WATCH PITCH buttons (visual), SYNCED / COMPLIANT / LIVE FEED status badges.
- **Tailored Solutions / Trades**: 6 trade cards (HVAC, Plumbing, Electrical, Solar, Construction, Telecom) with Lucide icons and verticalized copy.
- **Field Documentation**: two large feature cards — Zero-Trip Closeouts, Technician Synchronization.
- **Platform Offerings**: 14 feature tiles in a 2-column grid (Smart Dispatch, Photo Documentation, Project Management, Pipeline Tracking, Proposal Builder, Service Agreements, RFIs & Change Orders, Accounting Integrations, Equipment Management, Inventory Management, Safety Compliance, Technician Registry, Financial Insights, Progress Billing).
- **Measurable Performance Gains**: 3 stat cards — 47% DSO reduction, 98% first-time closeout, +22% gross margin.
- **Dashboard Preview**: framed dashboard screenshot with chrome dots & "clearview / live" caption.
- **Footer CTA**: end-of-feed marker, "UNCOMPROMISING VISIBILITY." headline, REQUEST DEMO button, version meta.

## Design system
- **Aesthetic**: industrial HUD / tactical military tech — sharp 2px corners, 1px solid borders, monospace technical labels (`SYS // 001`, `T-01`, `FEAT // 002`), no rounded blobs, no shadows.
- **Colors**:
  - Dark (default): `#020204` bg, `#09090B` surfaces, `#27272A` borders, `#E4E4E7` text, `#FF6B00` primary, `#00D8F6` cyan accent.
  - Light: `#F8F8F7` bg, `#FFFFFF` surfaces, `#D4D4D8` borders, `#18181B` text, `#FF6B00` primary, `#0891B2` accent.
- **Typography**: Orbitron (display, uppercase, wide tracking), JetBrains Mono (labels/data), Plus Jakarta Sans (body) — loaded via `@expo-google-fonts`.
- **Icons**: `lucide-react-native` (Wrench, Droplet, Zap, Sun, HardHat, Radio, Truck, Camera, Briefcase, ShieldCheck, etc.).

## Tech
- **Frontend only** — no backend, no integrations, no auth (per user direction).
- Expo Router single-screen (`app/index.tsx`), wrapped in `ThemeProvider` (`src/theme/ThemeContext.tsx`).
- Theme is in-memory React state (no persistence requested).
- Animations via `react-native-reanimated` for the rotating word.
- Assets: `assets/images/adms-clearview-dashboard.png` (copied from user-supplied zip).

## Files added / modified
- `app/_layout.tsx` — loads Orbitron / JetBrains Mono / Plus Jakarta Sans + wraps in ThemeProvider.
- `app/index.tsx` — the entire scrolling marketing screen.
- `src/theme/ThemeContext.tsx` — theme state + dark/light color tokens.
- `src/components/Header.tsx` — sticky header with theme toggle.
- `src/components/RotatingHeadline.tsx` — animated rotating word.
- `src/data/content.ts` — trades, features, stats, rotating words.
- `assets/images/adms-clearview-dashboard.png` — dashboard preview image.
