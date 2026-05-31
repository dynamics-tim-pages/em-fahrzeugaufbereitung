---
applyTo: "src/**/*.{astro,css}"
---
<!-- managed-by: preflight -->
# Styles instructions

- Tailwind v4 runs through `@tailwindcss/vite`. Keep shared design tokens, theme bridges, and reusable utilities in `src/styles/global.css`.
- Use existing CSS custom properties first, including the shared color, spacing, radius, and layout tokens already exposed there.
- In `.astro` files, prefer Tailwind utilities and existing token-based values for local styling; move styles into CSS only when they are shared or truly global.
- Preserve the current premium dark visual system: restrained lime accents, textured surfaces, glassy cards, and deliberate motion.
- Respect `prefers-reduced-motion`, visible focus states, contrast, and keyboard/touch usability; do not rely on hover-only affordances.
- Review inline SVG, `set:html`, data URI backgrounds, and any HTML/CSS injection carefully before changing them.
<!-- end-managed-by: preflight -->
