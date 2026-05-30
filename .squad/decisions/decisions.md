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
