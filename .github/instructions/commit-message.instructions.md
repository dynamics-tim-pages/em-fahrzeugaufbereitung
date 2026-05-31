<!-- managed-by: preflight -->
# Commit message format

Use this format for every generated commit message:

`<type>(<scope>): <description>`

- Write the subject in lowercase imperative mood.
- Keep the subject line at or under 72 characters.
- Do not end the subject with a period.
- Use `!` after the type or scope for breaking changes and add a `BREAKING CHANGE:` footer.

## Types

| Type | When to use |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, spacing, or visual-only changes |
| `refactor` | Code restructuring without behavior change |
| `test` | Adding or updating tests |
| `chore` | Tooling, dependencies, or maintenance |
| `perf` | Performance improvements |
| `ci` | CI/CD configuration changes |
| `build` | Build system or deployment changes |

## Scopes

Use the narrowest scope that matches the change. Common scopes in this repo:

- `hero`, `header`, `services`, `gallery`, `videos`, `contact`, `footer`
- `data`, `layouts`, `pages`, `styles`, `seo`, `legal`
- `copilot`, `deps`, `build`

Scopes are optional, but prefer them when the change is confined to one zone or one concern.

## Examples

- `feat(videos): add consent-gated shorts feed section`
- `fix(header): point sticky cta to whatsapp`
- `chore(copilot): add astro and styles instructions`

Example with body:

```text
feat(gallery): expand placeholder showcase cards

Keep six local-ready gallery placeholders so the homepage matches the landing page spec.
```

Example with breaking change:

```text
refactor(data)!: rename site metadata fields

BREAKING CHANGE: update components that read siteMeta canonical properties.
```
<!-- end-managed-by: preflight -->
