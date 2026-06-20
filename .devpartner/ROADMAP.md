# Roadmap

## Vision

A fully responsive, accessible landing page for a URL shortening service that integrates with the Clean URI API. Users can shorten URLs, see their history (persisted across sessions), copy links to clipboard, and get clear error feedback — all with a polished, production-quality UI matching the provided designs.

## Non-Functional Requirements

| Dimension | Target | Notes |
|---|---|---|
| Expected scale | Single user / portfolio project | No load requirements |
| Latency budget | API response < 2s | Depends on cleanuri.com |
| Accessibility | WCAG 2.2 AA | Build in from start |
| Responsive | 320px – 1440px+ | Mobile-first approach |

## Performance Log

> Owned by the Performance Tracker standing persona (SKILL.md 1.3).

| Date | Metric | Target | Measured | Status |
|---|---|---|---|---|

## Milestones

| Milestone | Status | Target | Notes |
|---|---|---|---|
| Bootstrap + planning | In progress | Session 1 | Repo init, .devpartner, requirements scan |
| HTML structure | Not started | Session 1 | Semantic, accessible markup |
| CSS implementation | Not started | Session 1 | Mobile-first, responsive |
| JavaScript logic | Not started | Session 1-2 | API, form, localStorage, clipboard |
| Testing + polish | Not started | Session 2 | Accessibility audit, responsive verification |

## Tech Debt & Risk Register

| Date Identified | Item | Risk if Unaddressed | Deferred Because | Revisit When |
|---|---|---|---|---|
| 2026-06-20 | No test framework set up yet | JS logic bugs may go undetected during development | Need to decide on approach with user | Before writing JS |

## Backlog (Unscheduled)

- Add automated tests for URL validation and API client logic
- Set up linting and formatting conventions
- Deploy to Vercel or Netlify
