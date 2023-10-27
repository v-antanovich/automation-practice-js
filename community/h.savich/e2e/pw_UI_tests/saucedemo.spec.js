const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
});

test("verify test title", async ({ page }) => {
  await expect(page).toHaveTitle("Swag Labs");
});

test("successful login", async ({ page }) => {
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.click("#login-button");
  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("failed login", async ({ page }) => {
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("wrong_pass");
  await page.click("#login-button");
  await expect(
    page.locator("//div[contains(@class, 'error-message-container error')]")
  ).toBeVisible();

  await expect(page.locator("//div//*[@data-test='error']")).toContainText(
    "Epic sadface: Username and password do not match any user in this service"
  );
});
