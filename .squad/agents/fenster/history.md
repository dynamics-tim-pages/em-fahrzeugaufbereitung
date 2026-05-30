# Fenster — History

## Project Context

- **Project:** EM Fahrzeugaufbereitung — premium dark landing page for a car detailing studio
- **User:** tecktim (Tim Friedrich)
- **Stack:** Tailwind CSS v4 (via @tailwindcss/vite), CSS custom properties in `src/styles/global.css`
- **Fonts:** Self-hosted via @fontsource — Saira Condensed (700/800, display) + Manrope (variable, body)
- **Signature:** Hexagon waben-light pattern, lime-green accent (#5BC236), dark surfaces, glow effects
- **Key tokens:** See design spec §3 — colors, typography, spacing, motion all defined as CSS vars
- **Hex clip-path:** `polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)`

## Learnings

- Tailwind CSS v4 theme tokens for this project should stay in `src/styles/global.css` via `@theme inline`, so teammates can mix raw CSS variables (`var(--color-green)`) with utility classes like `bg-bg`, `text-h2`, `rounded-card`, and `max-w-site`.
- The hero signature pattern is most maintainable as a lightweight repeating SVG background with a radial top-center mask and a few brighter hotspots, which keeps the hex grid crisp without needing extra assets.
- Motion utilities should default to tasteful fade/reveal behavior, but reduced-motion mode must immediately reveal content and remove transforms so the page never feels broken for motion-sensitive users.

## Session: 2026-05-30T1535 Landing Page Build
**Status:** ✓ Complete  
Design system (global.css with tokens, @theme, animations, accessibility) built and handed off to McManus. Styling foundation is stable and ready for section integration.

