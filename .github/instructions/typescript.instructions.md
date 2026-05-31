---
applyTo: "src/**/*.ts"
---
<!-- managed-by: preflight -->
# TypeScript instructions

- This repo uses strict TypeScript. Keep exports fully typed and prefer `as const`, `satisfies`, explicit object shapes, and narrow unions over `any`.
- Always use the `@/` alias for modules under `src`; never add relative imports inside `src`.
- Keep shared content and site configuration in `src/data/*.ts` and transforms or external helpers in `src/lib/*.ts`.
- Match repo style: no semicolons, single quotes, 2-space indentation, and trailing commas for multiline literals.
- Use lowercase single-word filenames in `src/data` and `src/lib` when creating new modules.
- Give exported transforms clear input and output types, especially for sitemap entries, gallery/video data, and external fetch results.
- Sanitize or validate external or HTML-adjacent data before turning it into typed output consumed by Astro templates.
- Do not add barrel exports.
<!-- end-managed-by: preflight -->
