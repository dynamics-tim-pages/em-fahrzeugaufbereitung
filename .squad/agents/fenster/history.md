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
- The gallery lightbox in `src/components/ui/Lightbox.astro` should read as one editorial surface: use a single comparison stage with an internal divider instead of stacking separate inner cards for before, after, caption, and CTA. Verified with Lightbox UI Refresh team iteration.
- tecktim prefers premium modal composition over generic app-card patterns on mobile, so lime stays restrained to the “after” state and close CTA while the rest of the surface stays dark and unified.
- Dialog polish on this project should keep explicit `aria-labelledby` / `aria-describedby` hooks when title and caption move deeper into the visual stage, so styling upgrades do not cost accessibility.
- Per-item entry labels (e.g., `Showroom-Finish`, `Reflex-Detail`) from trigger data preserve layout while elevating editorial character; maintains resilience with `galleryLabels.entry` fallback.
- Centering the lightbox reliably in `src/components/ui/Lightbox.astro` means treating `<dialog>` as the full-viewport overlay shell with safe-area-aware padding variables, while the inner editorial surface owns the capped scrolling area via viewport-based `max-height`.

## Session: 2026-05-30T1535 Landing Page Build
**Status:** ✓ Complete  
Design system (global.css with tokens, @theme, animations, accessibility) built and handed off to McManus. Styling foundation is stable and ready for section integration.

## Team Update: 2026-05-30T1751 Lightbox UI Refresh
**Agents:** Fenster, McManus, Keaton, Hockney  
**Status:** ✓ Complete
Redesigned `src/components/ui/Lightbox.astro` as premium editorial surface with split comparison stage (not stacked modal cards). Fenster established unified composition; McManus softened divider density; Keaton added item-driven per-item labels (`Showroom-Finish`, `Reflex-Detail`); Hockney approved final UX with accessibility validation. All decisions merged to `.squad/decisions.md`.
