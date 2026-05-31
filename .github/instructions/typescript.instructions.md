---
applyTo: "src/**/*.ts"
---
<!-- managed-by: preflight -->
# TypeScript conventions

- Keep `src/data/*.ts` as typed, serializable content/config modules. Use `as const`, `satisfies`, and exported types to keep component props narrow.
- Keep `src/lib/*.ts` for build-time utilities only. Node APIs, RSS fetching, and thumbnail caching belong there, not in browser code.
- When changing the YouTube pipeline, preserve the contract: pinned highlights stay first, feed items exclude pinned ids, failures degrade gracefully, and local thumbnail paths remain valid under `import.meta.env.BASE_URL`.
- Non-critical build-time network features should warn and fall back safely instead of crashing the entire build.
- Avoid duplicating contact data, URLs, labels, or CTA copy; reference `site.ts` and the relevant data module instead.
- Keep helper functions small, explicit, and side-effect aware. If a function touches the filesystem or network, make that obvious in the name and placement.
- Prefer real type guards and precise return types over `as any` or double-casting.
- If a data shape changes, update both the source module and all consuming components in the same change.

## Avoid

- Browser globals inside build-time utilities.
- Silent behavior changes in section data without updating the corresponding Astro zone.
- Hard-coded deployment URLs when `siteMeta.baseUrl` or `import.meta.env.BASE_URL` should be used.
<!-- end-managed-by: preflight -->
