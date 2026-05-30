# Squad Decisions

## Active Decisions

### Fenster Styling Foundation (2026-05-30)
Define the landing page design system in `src/styles/global.css` using root CSS variables plus a Tailwind CSS v4 `@theme inline` bridge. Provides shared utility classes for the hero hex pattern, hex clipping, staggered fade-up motion, reveal states, focus rings, section dividers, and dark scrollbar styling.

### McManus Landing Page Build (2026-05-30)
Centralize landing-page copy in `src/data/site.ts` next to NAP/navigation data instead of scattering strings across Astro components. Future updates to hero text, section headings, CTA labels, footer copy and legal placeholders should happen in `src/data/site.ts`.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
