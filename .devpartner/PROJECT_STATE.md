# Project State

> Last updated: 2026-06-20 by Emily (bootstrap)
> This file is the source of truth for project continuity across sessions.

## 1. Project Snapshot

| Field | Value |
|---|---|
| Project name | Shortly URL Shortening API Landing Page |
| Primary stack | Vanilla HTML, CSS, JavaScript |
| Repo / branch | local, no remote yet |
| Current milestone | Bootstrap — no code written yet |
| Overall status | Green |

## 2. What Currently Works

| Feature | Verified by | Notes |
|---|---|---|
| Project scaffold | manual | Starter HTML, images, design files provided by Frontend Mentor |

> Anything not yet verified belongs in section 3 as "implemented, unverified" — not here.

## 3. In Progress

**Current feature/task:** CSS implementation

**Unit decomposition** (per SKILL.md 8.2 — checked off as each unit is committed):

- [x] Unit 1 — Semantic HTML structure
- [ ] Unit 2 — CSS: all sections (base styles through footer)
- [ ] Unit 3 — JS: URL shortening API client (test-first)
- [ ] Unit 4 — JS: form validation & error handling
- [ ] Unit 5 — JS: shortened link list + localStorage persistence
- [ ] Unit 6 — JS: clipboard copy
- [ ] Unit 7 — Final polish: accessibility pass, responsive verification

| Active unit | Files involved | Exact next step | Verification owed |
|---|---|---|---|
| Unit 2 | `styles.css`, `index.html` | Done — ready for commit | Visual check at mobile/tablet/desktop |
| Unit 3 | `script.js`, tests | Write API client tests, then implement | Test pass |

## 4. Known Issues / Blocked

| Issue | Impact | Blocked on | Priority |
|---|---|---|---|

## 5. Up Next (Roadmap-aligned)

1. Write semantic HTML structure with accessibility baked in
2. Implement CSS with mobile-first responsive approach
3. Implement JS: API integration, form handling, localStorage, clipboard

## 6. Conventions & Environment

| Aspect | Convention |
|---|---|
| Formatter / linter | To be decided — none configured yet |
| Type-check command | n/a — vanilla JS |
| Test framework / command | To be decided — likely a lightweight setup for DOM-isolated logic |
| Test strategy | Test-first (6.1) for API client, formatters, validators; manual for UI |
| Browser/platform support | Last 2 versions of evergreen browsers |
| Accessibility conformance target | WCAG 2.2 AA |
| Branching model | Main branch for now |
| Env setup command | n/a — static site |
| Secrets location | n/a — public API (cleanuri.com) |
| Key architectural pattern | Single-page static site, vanilla JS, BEM-style CSS |

## 7. Checkpoints / Rollback Points

| Date | Tag / Branch | Created Before | Still Relevant? |
|---|---|---|---|

## 8. Open Questions for User

- CSS architecture preference: BEM, CUBE, utility-first, or something else?
- Test framework preference for the JS logic?
- Any specific accessibility target level beyond WCAG 2.2 AA?
