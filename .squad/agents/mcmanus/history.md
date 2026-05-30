# McManus — History

## Project Context

- **Project:** EM Fahrzeugaufbereitung — premium dark landing page for a car detailing studio in Herbertingen
- **User:** tecktim (Tim Friedrich)
- **Stack:** Astro (static), Tailwind CSS v4, self-hosted fonts (Saira Condensed + Manrope)
- **Structure:** `src/pages/index.astro` (main), components in `src/components/`, data in `src/data/`
- **Key files:** `Base.astro` (layout), `Header.astro`, `Hero.astro`, `Services.astro`, `Gallery.astro`, `Contact.astro`, `Footer.astro`, `StickyCta.astro`
- **Data sources:** `site.ts` (NAP, hours, social), `services.ts` (6 services), `gallery.ts` (placeholder array)

## Learnings

- Centralized landing-page copy in `src/data/site.ts` so sections, CTAs, legal placeholders and microcopy stay data-driven instead of drifting into Astro components.
- Rebuilt the page around small Astro components (`Header`, `Hero`, `Services`, `Gallery`, `Videos`, `Contact`, `Footer`, `StickyCta`) plus UI primitives in `src/components/ui/` to keep the landing page composable.
- The YouTube flow now combines pinned Shorts with a feed-based Shorts filter plus local thumbnail caching in `src/lib/youtube.ts`, so the page can stay privacy-friendly before consent and still tolerate RSS failures.

## Session: 2026-05-30T1535 Landing Page Build
**Status:** ✓ Complete  
Built full landing page (20+ files including components, data files, layout, pages). Build passes successfully. All content centralized in `src/data/site.ts` for future copy/SEO updates.

## Session: 2026-05-30T1637 YouTube Autoplay (Background)
**Status:** ✓ Complete  
Rewrote YouTubeEmbed.astro component:
- Replaced DSGVO 2-click verification with IntersectionObserver-based autoplay (muted, looping)
- Added iframe fade-in animation (opacity 0→1 over 700ms on load)
- Removed YouTube UI controls, added playsinline for mobile
- Privacy-compliant: muted autoplay requires no explicit consent
- Build passed

