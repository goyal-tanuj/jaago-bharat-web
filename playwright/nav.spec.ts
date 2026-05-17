import { test, expect } from "@playwright/test";

/**
 * Smoke test: every primary route renders its expected header.
 * Header text is taken directly from src/App.js so this catches accidental
 * route/header renames.
 */

const MOCK_BLOG = {
  title: "Mock Post",
  desc: "Mock description body.",
  tags: [],
  author: "Mock Author",
  date: "2026-05-17",
};

// Home (/) and /Blog both fan-out fetches to the readBlog backend on mount.
// Without mocking, those requests hit `serve`'s SPA-fallback (index.html),
// produce a JSON parse error in loader.js, and pollute pageerror. We mock the
// backend at the network boundary so the nav smoke test stays focused on
// routing, not backend wiring.
test.beforeEach(async ({ page }) => {
  const blogJson = (route: import("@playwright/test").Route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_BLOG),
    });
  await page.route("**/api/blog/**", blogJson);
  await page.route("**readblog-w4dwmgxs2a-uc.a.run.app**", blogJson);
  await page.addInitScript(() => {
    try {
      sessionStorage.clear();
    } catch {}
  });
});

const routes: { path: string; header?: RegExp }[] = [
  { path: "/" }, // home has its own layout, no Main header — just assert no errors.
  { path: "/Who we are", header: /who we are/i },
  { path: "/What We Do", header: /an overview/i },
  { path: "/Gallery", header: /gallery/i },
  { path: "/Donate", header: /donate/i },
  { path: "/GetInvolved", header: /get involved/i },
  { path: "/Blog" }, // BlogList renders post cards, no single h1 to match.
];

for (const { path, header } of routes) {
  test(`route ${path} renders without crash`, async ({ page }) => {
    const errors: string[] = [];
    page.on("pageerror", (err) => errors.push(err.message));

    await page.goto(path);
    await page.waitForLoadState("domcontentloaded");

    if (header) {
      await expect(page.getByRole("heading", { name: header }).first()).toBeVisible();
    } else {
      await expect(page.locator("body")).toBeVisible();
    }

    expect(errors, `pageerror(s) on ${path}: ${errors.join("; ")}`).toEqual([]);
  });
}
