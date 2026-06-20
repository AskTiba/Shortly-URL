# Decisions Log

> Architecture, technology, and process decisions, including overridden disagreements,
> dependency choices, and git conventions.

## Decision Records

| Date | Decision | Persona | Reasoning | Alternatives Considered | User Override? |
|---|---|---|---|---|---|
| 2026-06-20 | Bootstrap project with vanilla HTML/CSS/JS | Senior Dev Partner | Project scope is a single landing page with API integration — no framework needed; keeps bundle minimal, avoids unnecessary complexity | React, Vue, Astro | No |
| 2026-06-20 | Use Vitest for JS testing | Automated Tests Designer | Lightweight, fast, works with vanilla JS ESM — no Babel/Webpack needed | Jest, Node test runner | No |
| 2026-06-20 | Use ES modules (type: module) for JS | Senior Dev Partner | Clean import/export syntax, native browser support via `<script type="module">` | CommonJS, global namespace pattern | No |

## Git Conventions for This Project

> Defaults per SKILL.md section 8 — only fill in rows where this project deviates,
> or to confirm the defaults explicitly once decided.

| Aspect | Convention |
|---|---|
| Commit message format | Conventional Commits — `type: description`, ≤12 words, imperative |
| Commit types in use | feat, fix, refactor, docs, test, chore, build, perf, style, wip (default) |
| Scopes used? | No (default) |
| Default branch | main |
| Branch naming convention | Not yet established |
| Force-push allowed on | Never without per-instance confirmation (default) |
| Amend policy notes | |
| Commit attribution trailer | None (default) |
