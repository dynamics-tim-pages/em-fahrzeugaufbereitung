---
applyTo: "src/styles/**/*.css"
---
<!-- managed-by: preflight -->
# Styling conventions

- Keep design tokens in `:root` and `@theme inline` inside `src/styles/global.css`. Add new colors, spacing, or radii there before using them in component markup.
- Preserve the current premium dark palette: dark surfaces, bright green accents, soft borders, glassy overlays, and controlled glow.
- Reuse the existing motion language (`fade-up`, `reveal`, staggered transitions) and always respect `prefers-reduced-motion`.
- Keep the hex motif, gradients, and highlights subtle. The green accent should signal action, not dominate every surface.
- Prefer reusable utility classes and tokens over one-off hard-coded values scattered across multiple components.
- Maintain accessible contrast and clear focus states for buttons, anchors, and interactive cards.
- When styling hero, gallery, or video media, optimize for local assets, masked overlays, and readable text over imagery.

## Avoid

- Hard-coding new brand colors directly in component files.
- Adding animation that loops aggressively or ignores reduced-motion preferences.
- Solving layout problems with large negative margins or brittle absolute positioning when the token system can handle it.
<!-- end-managed-by: preflight -->
