# Keaton — History

## Project Context

- **Project:** EM Fahrzeugaufbereitung — premium dark landing page for a car detailing studio in Herbertingen
- **User:** tecktim (Tim Friedrich)
- **Stack:** Astro (static), Tailwind CSS v4, self-hosted fonts (Saira Condensed + Manrope)
- **Aesthetic:** Dark studio look, hexagonal motifs, lime-green accent, premium/automotive vibe
- **Key constraints:** DSGVO-compliant (no external fonts/trackers), Lighthouse ≥ 95, mobile-first, data-driven content from `src/data/`

## Learnings

- GitHub Pages deployment requires careful config alignment: `astro.config.mjs` (site + base), workflow node version, and Pages settings all must work together
- Debugging Pages failures via Actions logs is essential; Node 20 vs 22 compatibility is a common gotcha

## Session: 2026-05-31T2108 Google Maps Embed Architecture
**Status:** Plan delivered to McManus  
Designed 2-click DSGVO-compliant map embed following the YouTubeEmbed pattern. Key decisions:
- New `src/components/ui/GoogleMapsEmbed.astro` component with idle→consent→loading→ready state machine
- Data in `site.ts` under `site.map` (embedUrl, coords, shareLink)
- Replaces placeholder in Contact.astro lines 92–108
- Share link: https://maps.app.goo.gl/81u1kzvX6RqsqCfj7 (coords: 48.0633341, 9.4306166)
- No API key needed — uses standard `/maps/embed?pb=` URL
- Consent UI copy parallels YouTube consent wording for consistency

## Session: 2026-05-30T1637 GitHub Pages Deployment (Background)
**Status:** ✓ Complete  
Established GitHub Pages deployment pipeline:
- Created `.github/workflows/deploy.yml` (trigger: push to main)
- Updated `astro.config.mjs`: site='https://dynamics-tim-pages.github.io', base='/em-fahrzeugaufbereitung'
- Enabled GitHub Pages via Actions (modern config, not legacy gh-pages branch)
- Fixed initial Node 20 build failure → Node 22 (fixed by Coordinator)
- Deploy passed; live at https://dynamics-tim-pages.github.io/em-fahrzeugaufbereitung/
- Production domain (www.em-fahrzeugaufbereitung.de) unaffected

## Team Update: 2026-05-30T1751 Lightbox UI Refresh
**Agents:** Fenster, McManus, Keaton, Hockney  
**Status:** ✓ Complete  
Item-driven label system: replaced static entry label with per-item gallery data passed through trigger `data-*` payload. Per-item premium labels (`Showroom-Finish`, `Reflex-Detail`) across Gallery and Lightbox components preserve layout while elevating editorial character. Maintained existing pattern (title, caption, meta, before, after) with `galleryLabels.entry` as resilient fallback. Approved by Hockney with full accessibility validation.



## Map Embed Orchestration Session (2026-05-31)
Squad orchestrated map embed decision. Keaton and Hockney defined architecture and QA guardrails respectively. Decision merged into decisions.md. Ready for McManus implementation phase.
