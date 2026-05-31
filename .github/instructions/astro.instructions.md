---
applyTo: "src/**/*.astro"
---
<!-- managed-by: preflight -->
# Astro zone conventions

- Treat `landingpage-spec.md` as the source of truth for section order, CTA behavior, privacy copy, and SEO requirements.
- Build homepage sections as focused Astro components in `src/components/` and compose them from `src/pages/index.astro`.
- Keep sections presentational. Pull copy, labels, contact data, and zone configuration from `src/data/*.ts` instead of hard-coding them in templates.
- Reuse `SectionHeading` for section intros and `Button` for CTA styling before adding new patterns.
- Keep `Header`, `Hero`, `Services`, `Gallery`, `Videos`, `Contact`, and `Footer` anchored to the ids used by the navigation and the spec.
- Use semantic HTML: one `h1` on the page, `section` with `aria-labelledby`, real `button` elements for interactive controls, and decorative images with empty alt text only when appropriate.
- Prefer zero-JS Astro by default. Inline scripts are only appropriate for interaction islands like the mobile header menu, lightbox, or YouTube consent gate.
- Keep YouTube embeds consent-gated and base-path aware. No remote iframe should load before the user explicitly confirms.
- Keep metadata, canonical logic, and JSON-LD inside `BaseLayout.astro` unless there is a strong page-level reason to override them.
- When adding media, prefer local files in `public/images/` or processed assets that ship with the repo.

## Avoid

- Moving business content into components.
- Adding framework-style client state for static sections.
- Introducing autoplay, tracking scripts, or remote embeds that bypass the privacy constraints in the spec.
<!-- end-managed-by: preflight -->
