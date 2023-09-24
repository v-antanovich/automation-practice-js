const { test, expect } = require('@playwright/test');

test('login page texts', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.locator("div.logo").isVisible();
  await page.locator("i.fa-lock").click();
  const loginTextExpected = "Login to your account";
  const signUpTextExpected = "New User Signup!";
  const loginTextActual = await page.locator('div.login-form h2').textContent(); 

  if (loginTextActual != loginTextExpected) {
    await expect(page.locator('div.signup-form h2')).toHaveText(signUpTextExpected);
  } 
  await expect(page.locator('div.login-form h2')).toHaveText(loginTextExpected);
});

test('login', async ({ page }) => {
  await page.goto('https://automationexercise.com/login');
  await page.locator("div.login-form input[type='email']").fill('automationexercise@mailinator.com');
  await page.locator("div.login-form input[type='password']").fill('testpass0');
  await page.locator("div.login-form button").click();
  // const expUrl = "https://automationexercise.com/";
  await expect(page).toHaveURL("https://automationexercise.com/");
  await expect(page.locator("//i[@class='fa fa-user']/..")).toContainText('Logged in as');
  await expect(page.locator("//i[@class='fa fa-lock']/..")).toContainText('Logout');
  await page.locator("i.fa-lock").click();
});

test('incorrect login', async ({ page }) => {
  await page.goto('https://automationexercise.com');
  await page.locator("div.logo").isVisible();
  await page.locator("i.fa-lock").click();
  await page.locator("div.login-form input[type='email']").fill('fake@gmail.com');
  await page.locator("div.login-form input[type='password']").fill('fakeName');
  await page.locator("div.login-form button").click();
  const passwordIsIncorrect = "Your email or password is incorrect!";
  await expect(page.locator('div.login-form p')).toHaveText(passwordIsIncorrect);
});

