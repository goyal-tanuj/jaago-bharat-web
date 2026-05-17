# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Frontend (Create React App, run from repo root):
- `npm start` — dev server on http://localhost:3000
- `npm run build` — production bundle to `build/` (consumed by Firebase Hosting)
- `npm test` — Jest watch mode via react-scripts. Run a single file: `npm test -- src/App.test.js`. Single run: `CI=true npm test`.

Firebase Cloud Functions (run from `functions/`):
- `npm run serve` — start the local functions emulator (port 5001; full emulator suite ports are in `firebase.json`)
- `npm run deploy` — deploy functions only (`firebase deploy --only functions`)
- `npm run logs` — tail production function logs

Full Firebase deploy (hosting + functions): `npm run build && firebase deploy` from repo root. The Firebase project alias is `jaagobharatwebdev` (see `.firebaserc`). CI in `.github/workflows/prod-firebase-deploy.yml` auto-deploys on push to `main`.

## Architecture

**Two-codebase split.** The React SPA lives in `src/` and is deployed to Firebase Hosting. The backend is a tiny set of HTTP Cloud Functions in `functions/index.js` (Node 18, `firebase-functions` v2) backed by Firestore. The two halves are loosely coupled — the frontend talks to the deployed function URLs directly over `fetch`, not via the Firebase SDK. Notably, `src/components/loader.js` hardcodes `https://readblog-w4dwmgxs2a-uc.a.run.app?id=` for blog reads, so changing the function name or region requires updating that URL.

**Routing and page composition.** `src/App.js` is the single source of truth for routes (react-router v6 `BrowserRouter`). Almost every non-home route renders the generic `Main` component (`src/main.js`) with three props: `backimg`, `header`, and `description`. The `description` prop is a fully-formed React fragment imported as a named export from `src/components/posts.js` — that one file is a giant module of static, styled JSX blocks (Who_we_are, What_we_do, Ourfounder, Gallery, Partners, Publications, AnnualReport, GetInvolved, Donate, Wet_waste_management, WaterConservation, SMILE, Ecobrick, Achievements, Vastraay, Overview, etc.). To add a new content page, export a new component from `posts.js` and wire a `<Route>` in `App.js`.

**Blog pipeline.** `/Blog` lists posts via `BlogList.js`; `/Blog/:id` resolves through `blogRouter.js` → `loader.js` → the `readBlog` cloud function → `Blog.js` for markdown rendering (`react-markdown` + `remark-gfm`). `loader.js` caches each post in `sessionStorage` keyed by id, so during local development you may need to clear session storage to see updated blog content. Blog indices/ids are integer-keyed in Firestore (`blogs/{id}`), and `system/blogIndex` tracks the next id (managed by the `getIndex` function).

**Cloud Functions surface.** Three v2 HTTPS functions with CORS enabled: `getIndex` (current blog id counter), `readBlog?id=N` (returns `{title, desc, tags}` or a sentinel "not found" object), and `addcontact?name=&email=&phone=&zipcode=` (writes to the `contactus` Firestore collection; uses regex validation only). The contact form in `src/components/form.js` is the sole client of `addcontact`.

**Asset hosting.** Most images render from Firebase Storage URLs hardcoded in `src/components/posts.js` (and the `prefix`/`postfix` helpers at the top of that file). Local fallback assets live in `src/images/` and `public/`. `storage.rules` currently denies all client reads/writes — uploads happen out-of-band, not through the SPA.

**Styling.** Mixed: per-component CSS files (`navbar.css`, `footer.css`, `Blog.css`, etc.), `sass`, and `styled-components`. There is no global design system — copy patterns from the nearest existing component.
