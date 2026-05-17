---
name: CRA jest test is broken on main
description: The single src/App.test.js is broken on main and pre-dates any modernization work — don't be surprised when CI=true npm test fails
type: project
---

`src/App.test.js` asserts `getByText(/learn react/i)` — the default CRA template assertion — but the actual app has no such text. Even if the assertion were right, the test currently fails to *load* because Jest (CRA 5's default config) cannot transform `react-markdown` (pure ESM) which is transitively imported via `App.js → blogRouter.js → Blog.js`. Error: `SyntaxError: Unexpected token 'export'`.

**Why:** This was the state of `main` at commit 5783178 before any modernization. Reproduced on main with the working tree stashed.

**How to apply:** If a user asks "did your changes break the unit tests?", answer no and point at the pre-existing failure. Real fix requires either (a) adding a `transformIgnorePatterns` jest override (CRA needs `--ejected` or a craco-style override since `react-scripts` 5 doesn't accept jest config in package.json for this), (b) replacing the placeholder test with a real one, or (c) migrating off CRA. Don't silently delete `App.test.js`.
