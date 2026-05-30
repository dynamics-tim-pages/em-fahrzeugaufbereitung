# Decisions Log

## GitHub Pages Deployment (2026-05-30)

**Decision by:** Keaton  
**Status:** Active

### What

Deploy the EM Fahrzeugaufbereitung site to GitHub Pages for preview/showcase use.

### URL

`https://dynamics-tim-pages.github.io/em-fahrzeugaufbereitung/`

### Configuration

- `astro.config.mjs` → `site: 'https://dynamics-tim-pages.github.io'`, `base: '/em-fahrzeugaufbereitung'`
- GitHub Actions workflow at `.github/workflows/deploy.yml` (push to `main` triggers deploy)
- Pages source: GitHub Actions (not the legacy `gh-pages` branch)
- Node 20.x, `npm ci` install, `astro build` output from `./dist`

### Notes

- The production domain (`www.em-fahrzeugaufbereitung.de`) is **not** affected — this Pages URL is for preview only
- Data files in `src/data/` still reference the production domain where needed
- The `public/` folder (including cached YouTube thumbnails) is included in the build output automatically by Astro

## YouTube Autoplay Embed Loading State (2026-05-30)

**Decision by:** McManus  
**Status:** Active

### What

The YouTube autoplay embed now uses `data-state="idle|loading|ready"` on the existing frame wrapper instead of per-element inline opacity toggles.

### Loading UX

- As soon as the iframe is injected, the poster is blurred and heavily faded
- A soft glass loading card with understated animated dots appears
- The iframe stays invisible until its `load` event fires
- Existing autoplay/mute/hide-chrome/teardown behavior is preserved

### Why

This hides the rough YouTube paint while still signaling progress in the site's dark/lime premium style without adding a loud spinner.

## Motion Strategy — EM Fahrzeugaufbereitung (2026-05-30)

**Decision by:** Fenster (UI/Styling)  
**Status:** Proposal

### Philosophy

This is a premium car detailing brand. Motion should feel **deliberate and confident** — like a clean reveal after a polish. The existing page already uses `fade-up` on hero elements and `reveal` for scroll-triggered sections. This foundation is solid; the strategy below refines rather than adds.

### Existing Motion (Keep As-Is)

| Element | Current Behavior | Verdict |
|---------|------------------|---------|
| Hero text stagger | `fade-up` + `.stagger-1-4` delays | ✓ Keep — establishes rhythm |
| Scroll reveal | `.reveal` + IntersectionObserver | ✓ Keep — subtle, performant |
| Header scroll state | Opacity/blur transition on scroll | ✓ Keep — functional feedback |
| Focus ring | `180ms ease` transition | ✓ Keep — accessibility |

**Do not touch:** Section backgrounds, hex-pattern, gradient overlays. Static elements provide visual stability and premium weight.

### Recommended Animation Moments (Max 5)

1. **Gallery Card Hover — Micro-Lift**: Signals interactivity. Existing `hover:-translate-y-1` is good; add subtle border-color transition. 200-250ms ease-out.

2. **Lightbox Open/Close — Smooth Scale-Fade**: Dialog smooth entry/exit at scale+fade. 220ms duration: `scale(0.97) opacity(0)` → `scale(1) opacity(1)`.

3. **YouTube Embed Loading → Ready — Cross-Fade**: Existing 700ms cross-fade is premium. Optional: reduce loading sheen to single opacity pulse instead of shimmer.

4. **Service Cards — Staggered Reveal on Scroll**: Light 50-80ms stagger per card (not row), total sequence under 500ms. Only if cards are above fold.

5. **Sticky CTA — Slide-Up on Scroll Threshold**: Mobile sticky bar: `translateY(100%)` → `translateY(0)`, 250ms ease-out, triggered after hero scroll.

### Timing & Easing Principles

| Context | Duration | Easing | Rationale |
|---------|----------|--------|-----------|
| Enter/Reveal | 400-500ms | `ease-out` or `cubic-bezier(0.22, 1, 0.36, 1)` | Smooth deceleration, perceived speed |
| Hover micro-interactions | 180-250ms | `ease` | Responsive, not sluggish |
| Exit/Close | 200-280ms | `ease-in` or `ease` | Slightly faster than enter feels snappy |
| Stagger delay | 50-80ms | — | Perceptible but not slow |

**Global rule:** Never exceed 600ms for any single animation. Premium = efficient, not theatrical.

### What Should Stay Static

- Section backgrounds & gradients — movement would feel cheap
- Hex pattern overlays — parallax or float would distract
- Typography after initial reveal — no text scaling or color shifts
- Header logo/brand — solid anchor point
- Contact section content — informational, trust-building
- Video thumbnails before interaction — poster is the teaser

### Technical Notes

- Continue using `prefers-reduced-motion` media query (already in `global.css`)
- Avoid `will-change` proliferation — current usage is acceptable
- Dialog animations require `@starting-style` for native `<dialog>` or JS class toggling
- Consider View Transitions API for future lightbox enhancement

### Summary

This page is already 80% there. Recommendation: **refinement, not addition**.

1. Lightbox open/close animation (new)
2. Service card stagger (enhancement)
3. Sticky CTA scroll-triggered entrance (new)
4. Keep all existing motion
5. Resist the urge to animate anything else

**Premium motion = knowing when to hold still.**
