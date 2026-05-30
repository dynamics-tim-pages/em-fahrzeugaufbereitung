---
name: "editorial-comparison-surface"
description: "Style before/after lightboxes as a single premium surface instead of stacked cards."
domain: "ui-styling"
confidence: "high"
source: "earned"
---

## Context

Use this pattern when a comparison modal or lightbox needs to feel native to the premium EM Fahrzeugaufbereitung landing page, especially on mobile where nested cards quickly feel generic.

## Patterns

- Start with one dark shell and let the shell scroll, rather than nesting several rounded cards inside the modal.
- Build one comparison stage with an internal divider so before/after content feels editorial, not app-like.
- Place title and caption inside the stage hierarchy; reserve the secondary area for compact meta only.
- Keep lime accent limited to the “after” marker and the close/return CTA.
- Preserve accessibility with `aria-labelledby` and `aria-describedby` on the dialog when content moves visually.

## Examples

- `src/components/ui/Lightbox.astro`

## Anti-Patterns

- Stacking individual bordered cards for before, after, caption, and actions.
- Giving every inner section its own glow, border, and radius.
- Letting mobile collapse into a pile of disconnected boxes inside the modal.
