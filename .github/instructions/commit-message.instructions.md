<!-- managed-by: preflight -->
# Commit message instructions

Use Conventional Commits:

`<type>(<scope>): <description>`

`scope` is optional. Keep the subject imperative, lowercase, specific to the staged change, and under 72 characters.

## Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting or styling-only cleanup with no logic change |
| `refactor` | Code restructuring without behavior change |
| `test` | Adding or updating tests |
| `chore` | Tooling, housekeeping, or maintenance |
| `perf` | Performance improvements |
| `ci` | CI/CD configuration changes |
| `build` | Build system or dependency changes |

## Scopes

- Prefer scopes drawn from this repo: `pages`, `layouts`, `components`, `ui`, `data`, `lib`, `styles`, `seo`, `config`, `ci`, `deps`, `assets`
- Use `config` for Astro, TypeScript, Copilot, editor, or preflight changes.
- Use `seo` for metadata, canonical URLs, JSON-LD, sitemap, robots, or social card changes.
- Use `deps` for `package.json` or `package-lock.json` updates.
- Omit the scope if the change spans multiple areas equally.

## Rules

- Use imperative mood.
- Keep the subject lowercase with no trailing period.
- Capture the most important staged change only; do not mention unrelated follow-up work.
- Add a short body only when extra context is necessary.
- Mark breaking changes with `!` after the type or scope and add a `BREAKING CHANGE:` footer.

## Examples

- `feat(pages): add paint correction hero section`
- `fix(data): correct contact and legal metadata`
- `refactor(ui): simplify youtube consent overlay markup`
- `ci: update github pages deploy workflow`
- `chore(config): add preflight copilot instructions`

`feat(config)!: move site to root deploy path`

`BREAKING CHANGE: pages now resolve without the repository base path.`
<!-- end-managed-by: preflight -->
