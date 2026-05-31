# Hockney — History

## Project Context

- **Project:** EM Fahrzeugaufbereitung — premium dark landing page for a car detailing studio
- **User:** tecktim (Tim Friedrich)
- **Stack:** Astro (static), Tailwind CSS v4
- **Acceptance criteria:** See design spec §7 — Lighthouse ≥ 95 (all 4), WCAG AA, no CLS, self-hosted fonts, responsive 320–1440px, keyboard-accessible lightbox
- **DSGVO requirements:** No external font CDN calls, no trackers, no hotlinked images, maps as 2-click embed only

## Learnings

- Hockney's UX review role is critical for premium design validation: initial feedback on over-boxed divider density and generic entry label shapes iteration toward elevated editorial character.
- Per-item premium labels like `Showroom-Finish` and `Reflex-Detail` successfully elevate lightbox reading from generic gallery component to exclusive editorial surface while maintaining existing layout.
- YouTube 2-click embed pattern (Privacy gating + state machine + consent overlay + keyboard support) is the architectural foundation for ALL future external embeds (maps, social, etc.). Do not reinvent—extend or mirror this pattern.
- Site coordinates are 48.0633341 N, 9.4306166 E (Herbertingen, EM Fahrzeugaufbereitung). Current placeholder copy in Contact.astro line 105 reads "Maps-Embed folgt als 2-Klick-Lösung".

## Session: 2026-05-30T1751 Lightbox UI Refresh (Review)
**Agents:** Fenster, McManus, Keaton, Hockney  
**Status:** ✓ Complete
Conducted UX review across three iterations: identified divider density and entry label genericness; rejected McManus revision; approved Keaton's per-item label implementation with full accessibility sign-off. Final lightbox UX ready for integration.

## Session: 2026-05-30 Result Title Refresh (Approval)
**Agents:** McManus, Hockney  
**Status:** ✓ Complete  
Reviewed mcmanus result title refresh: service-led framing for Außenaufbereitung, Innenraumaufbereitung, Keramik-Versiegelung per core service offerings (no reliable vehicle models in current data). Approved titles as specific, premium, and placeholder-free. All gallery and lightbox labels wired per-item.



## Map Embed Orchestration Session (2026-05-31)
Squad orchestrated map embed decision. Keaton and Hockney defined architecture and QA guardrails respectively. Decision merged into decisions.md. Ready for McManus implementation phase.
