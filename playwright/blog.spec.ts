import { test, expect } from "@playwright/test";

/**
 * Blog post page should render markdown returned by the readBlog backend.
 * We mock both:
 *   - the new same-origin path /api/blog/:id (production via hosting rewrite)
 *   - the legacy run.app URL still hardcoded in past loader builds
 * so this test survives a half-deployed rewrite.
 */

const MOCK_BLOG = {
  title: "Playwright Mock Post",
  desc: "# Hello from Playwright\\n\\nThis body is **markdown**.",
  tags: ["test", "playwright"],
  author: "Test Author",
  date: "2026-05-17",
};

test("blog post renders markdown from mocked readBlog response", async ({ page }) => {
  const fulfill = (route: import("@playwright/test").Route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(MOCK_BLOG),
    });

  await page.route("**/api/blog/**", fulfill);
  await page.route("**readblog-w4dwmgxs2a-uc.a.run.app**", fulfill);

  // sessionStorage cache in loader.js would skip the fetch entirely.
  await page.addInitScript(() => {
    try {
      sessionStorage.clear();
    } catch {}
  });

  await page.goto("/Blog/0");

  await expect(page.getByRole("heading", { name: MOCK_BLOG.title })).toBeVisible();
  // react-markdown converts `# Hello…` to an h1.
  await expect(page.getByRole("heading", { name: /hello from playwright/i })).toBeVisible();
  // Bold text from `**markdown**` should render as a <strong>.
  await expect(page.locator("strong", { hasText: "markdown" })).toBeVisible();
});
