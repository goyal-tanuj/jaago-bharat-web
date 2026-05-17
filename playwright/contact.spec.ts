import { test, expect } from "@playwright/test";

/**
 * The contact form lives in the global footer (src/components/form.js).
 * We pick a stable, low-noise page to host it (Donate), fill all four fields,
 * mock the addcontact function response, and assert the react-hot-toast
 * success toast appears.
 */

test("contact form submits and shows success toast", async ({ page }) => {
  await page.route("**addcontact**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ result: "ok" }),
    })
  );

  await page.goto("/Donate");

  // Footer contact form is at the bottom — scroll there to make sure inputs
  // are in the viewport for fill (helps webkit in particular).
  const form = page.locator("form.formBody");
  await form.scrollIntoViewIfNeeded();
  await expect(form).toBeVisible();

  await form.getByPlaceholder("Name").fill("Test User");
  await form.getByPlaceholder("Email").fill("test@example.com");
  await form.getByPlaceholder("Mobile number").fill("9999999999");
  await form.getByPlaceholder("Zipcode").fill("110001");

  await form.locator('input[type="submit"]').click();

  // react-hot-toast renders into a portal at the document root.
  await expect(page.getByText(/success/i)).toBeVisible({ timeout: 10_000 });
});
