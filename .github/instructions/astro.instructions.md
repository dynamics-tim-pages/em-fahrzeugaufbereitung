---
applyTo: "src/**/*.astro"
---
<!-- managed-by: preflight -->
# Astro instructions

- Keep Astro server-first and static-friendly. Compute view data in frontmatter from `@/data/*` or typed helpers, and send only small progressive-enhancement scripts to the browser.
- Use `@/` imports for anything under `src`; never add relative imports inside `src`.
- Keep layouts in `src/layouts`, pages in `src/pages`, domain components in `src/components`, and shared UI in `src/components/ui`.
- Use PascalCase filenames for `.astro` components and layouts.
- Prefer semantic HTML, clear heading structure, landmarks, accessible controls, and the existing SEO/meta patterns in `src/layouts/BaseLayout.astro`.
- Keep copy and configuration in `src/data/*.ts` instead of hardcoding shared content in components.
- Preserve the existing inline script patterns for menus, dialogs, galleries, and video consent; do not introduce `client:*` islands unless inline enhancement is clearly insufficient.
- Treat `set:html`, inline SVG strings, JSON-LD, and other raw HTML injection as review-required.
<!-- end-managed-by: preflight -->
