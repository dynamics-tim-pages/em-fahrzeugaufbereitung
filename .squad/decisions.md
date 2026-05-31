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

### Fenster — Lightbox Viewport Centering (2026-05-31)
The gallery lightbox should own its positioning at the `<dialog>` layer with a fixed full-viewport flex shell, explicit safe-area padding variables, and a viewport-capped inner surface. Default browser dialog placement left the modal reading too high in the viewport. Explicit overlay centering keeps the lightbox horizontally and vertically centered on mobile and desktop while preserving premium spacing, close-button reachability, and internal overflow for taller content.

## Google Maps Embed Decision (2026-05-31)

**Author:** Keaton

The Google Maps embed in the contact section uses a **2-click consent gate** — identical in spirit to the existing YouTube embed pattern. No Google iframe loads until the user explicitly opts in.

### Rationale

1. **DSGVO compliance** — Google Maps iframes transmit IP + cookies to Google. Eager-loading violates DSGVO without prior consent.
2. **Consistency** — YouTubeEmbed already establishes this pattern. Users and developers expect the same privacy UX.
3. **Performance** — No third-party iframe on initial load. Static placeholder with hex-pattern background keeps Lighthouse scores intact.

### Architecture Shape

- **New component:** `src/components/ui/GoogleMapsEmbed.astro`
- **Pattern:** Static preview state → consent overlay → iframe injection (mirrors YouTubeEmbed)
- **Data source:** `src/data/site.ts` gains a `map` object with embed URL, coordinates, and share link
- **Integration point:** Replaces the current placeholder in `Contact.astro`

### Constraints

- Use `https://www.google.com/maps/embed?pb=...` (standard embed, no API key required)
- Share link (`maps.app.goo.gl/...`) is for fallback, not iframe src
- Full server-render in idle state (no JS until interaction)
- `prefers-reduced-motion` must suppress transitions
- Consent copy references Google privacy policy

---

## Map Embed QA Guardrails (2026-05-31)

**Author:** Hockney  
**Status:** Planning Phase (Pre-Implementation)

### QA Principles

This defines what Hockney needs to see before sign-off.

1. **Privacy-First Consent Model (MANDATORY)** — 2-click pattern: Idle → Consent → Active. No external calls until user confirms.
2. **No Google Maps Static API** — Use generic hex placeholder + address text. No preview snapshots from Google.
3. **Iframe Sandboxing** — `sandbox="allow-popups allow-scripts allow-same-origin"` + `allow="geolocation"`
4. **Keyboard Navigation** — Full WCAG AA support: Tab, Escape key, visible focus rings (≥3px, ≥2:1 contrast)
5. **Responsive Container** — Aspect ratio maintained 320px → 1440px. No CLS on iframe injection.
6. **Focus Management** — Confirm/Cancel buttons use `.focus-ring`. Post-cancel, focus returns to trigger.
7. **ARIA & Semantics** — `data-map-*` state machine. Consent panel marked `role="alertdialog"`.
8. **prefers-reduced-motion** — Transitions drop to 1ms or disabled entirely.
9. **URL Parameters** — Embed URL uses proper Google Maps Embed API (not search result iframe).
10. **CSS Variables Only** — No external font/CSS loads from wrapper (map iframe is unavoidable).
11. **Loading State** — Optional: Show indicator if iframe takes >800ms.
12. **Share Link Fallback** — Optional: "View on Google Maps" link in overlay.

### Acceptance Criteria (Hockney's Checklist)

- **AC-Map-001:** Map iframe does not load until user confirms. Network tab shows no external calls until consent.
- **AC-Map-002:** Consent overlay displays, has readable text + 2 buttons, dismissible with Escape.
- **AC-Map-003:** State machine transitions: idle → consent → loading → ready with correct visual/interactive states.
- **AC-Map-004:** Keyboard accessibility: Tab, focus rings, Escape key, logical order.
- **AC-Map-005:** Responsive layout: Maintains aspect ratio, no CLS, safe area padding on mobile.
- **AC-Map-006:** ARIA updates (aria-busy, aria-label) signal state changes. Buttons have accessible names.
- **AC-Map-007:** Under `prefers-reduced-motion: reduce`, transitions disabled (1ms), interactions still work.
- **AC-Map-008:** No regressions: Address info, contact links, hours, grid, lightbox all unchanged.
- **AC-Map-009:** Lighthouse ≥95 (all categories). FCP/LCP unaffected. CLS <0.1.
- **AC-Map-010:** All copy (buttons, consent text) live in `src/data/site.ts` under `uiText.maps.*`.

### No-Go Criteria

Hockney rejects if:
- Map iframe loads on page load (privacy)
- No visible focus ring on consent buttons (WCAG AA)
- Escape key doesn't dismiss consent (keyboard)
- Contact section layout broken on mobile (regression)
- CLS >0.1 (performance)
- Static Google Maps API called without consent (DSGVO)
- Lighthouse <95 in any category
- Copy hardcoded instead of from site.ts

## Map Embed Implementation (2026-05-31)

**Authors:** McManus, Keaton, Hockney  
**Status:** Conditional Approval (Minor fixes required)

Built a dedicated `src/components/ui/GoogleMapsEmbed.astro` UI component for DSGVO-conscious map display, mirroring the existing `YouTubeEmbed.astro` state machine (`idle → consent → loading → ready`).

### Architecture

- **Privacy-First:** No Google Maps network request before explicit user consent
- **Static Placeholder:** Hex-pattern branded placeholder, no preview API calls
- **Embed URL:** Coordinate-based format (`https://maps.google.com/maps?q=48.0633341,9.4306166&z=17&output=embed`) — stable, key-free
- **Data Source:** `src/data/site.ts` gains `site.map` object (lat, lng, zoom, shareLink, embedUrl) plus `uiText.maps.*` for all copy
- **State Machine:** Idle → Consent (role="alertdialog") → Loading → Ready with ARIA updates, keyboard Escape support, prefers-reduced-motion handling
- **Security:** iframe sandbox attribute (`allow-popups allow-scripts allow-same-origin`) + defense-in-depth isolation
- **Fallback:** External share link always available for non-consenting users

### QA Status (Hockney)

**Verdict:** CONDITIONAL APPROVAL ✅  
**9/10 acceptance criteria met.** One minor security hardening required:

- ⚠️ Missing `iframe.sandbox` attribute in injected iframe (defense-in-depth)
- ⚠️ Consent panel missing explicit `role="alertdialog"` and `aria-label="Datenschutz-Hinweis"`
- ⚠️ Dead CSS line (`aria-hidden: false;` is not a CSS property) must be removed

### Code Review Status (Keaton)

**Verdict:** REJECT — three issues require resolution before ship:

1. **Dead CSS `aria-hidden: false`** (line 176) — Remove; JS correctly manages via setAttribute
2. **Missing `role="alertdialog"`** on consent panel — Add to `[data-maps-consent]` container
3. **Missing `sandbox` attribute** on injected iframe — Add per guardrail #3

### Ship Decision (Keaton)

Ship the contact-section Google Maps embed only when the privacy gate and iframe hardening are intact. Approval depends on three things holding together: branded server-rendered placeholder, explicit consent before any Google request, and a hardened injected iframe.

### Pattern Established

The map embed successfully extends the YouTube 2-click pattern without deviation. This pattern is now the canonical template for all future external embeds (social, analytics, etc.).

---

## Governance

- All meaningful changes require team consensus
- Document architectural decisions here
- Keep history focused on work, decisions focused on direction
