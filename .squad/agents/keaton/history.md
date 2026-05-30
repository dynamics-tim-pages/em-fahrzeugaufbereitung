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

## Session: 2026-05-30T1637 GitHub Pages Deployment (Background)
**Status:** ✓ Complete  
Established GitHub Pages deployment pipeline:
- Created `.github/workflows/deploy.yml` (trigger: push to main)
- Updated `astro.config.mjs`: site='https://dynamics-tim-pages.github.io', base='/em-fahrzeugaufbereitung'
- Enabled GitHub Pages via Actions (modern config, not legacy gh-pages branch)
- Fixed initial Node 20 build failure → Node 22 (fixed by Coordinator)
- Deploy passed; live at https://dynamics-tim-pages.github.io/em-fahrzeugaufbereitung/
- Production domain (www.em-fahrzeugaufbereitung.de) unaffected

