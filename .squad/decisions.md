# Squad Decisions

## Active Decisions

### Fenster Styling Foundation (2026-05-30)
Define the landing page design system in `src/styles/global.css` using root CSS variables plus a Tailwind CSS v4 `@theme inline` bridge. Provides shared utility classes for the hero hex pattern, hex clipping, staggered fade-up motion, reveal states, focus rings, section dividers, and dark scrollbar styling.

### McManus Landing Page Build (2026-05-30)
Centralize landing-page copy in `src/data/site.ts` next to NAP/navigation data instead of scattering strings across Astro components. Future updates to hero text, section headings, CTA labels, footer copy and legal placeholders should happen in `src/data/site.ts`.

### Fenster — Lightbox Stage Composition (2026-05-30)
Treat the gallery lightbox as one premium editorial surface with a split comparison stage, not as a modal containing multiple stacked cards. The landing page brand language is strongest when the dark shell, typography, hex texture, and restrained lime accent read as one continuous composition. Separate inset boxes felt generic and especially clumsy on mobile.

### Keaton — Lightbox Entry Signal (2026-05-30)
Drive the lightbox entry label from per-item gallery data and pass it through the existing trigger `data-*` payload instead of rendering a static generic heading. Per-item labels such as `Showroom-Finish` and `Reflex-Detail` preserve the current layout while giving each lightbox state a more editorial, premium cue.

### McManus — Lightbox Follow-up Softening (2026-05-30)
Reduce the lightbox's internal separation by removing the extra meta divider, dropping the stacked mobile split border, and only showing the stage split cue from `420px` upward. The premium redesign already has enough structure from the shell, stage frame, and typography. On small screens, the extra divider treatment made the modal read as too many compartments instead of one composed surface.

### McManus — Result Title Service-Led Framing (2026-05-30)
No reliable vehicle models are documented in the existing content for the three current gallery entries. Result titles, metadata, and lightbox descriptions are deliberately service-based instead of inventing vehicle names. Frame results around core service offerings: Außenaufbereitung (exterior detailing), Innenraumaufbereitung (interior detailing), Keramik-Versiegelung (ceramic coating). This delivers premium and concrete results while remaining honest to current data.

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
