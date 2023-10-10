const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/loginPage.js';

let loginPage

test.beforeEach(({page}) => {
  loginPage = new LoginPage(page)
})

test('Login and check if login was successfull', async ({ page }) => {
  await loginPage.openPage()
  await loginPage.login("tomsmith","SuperSecretPassword!")

  const isLoginSuccess = await loginPage.isLoginSuccess()

  expect(isLoginSuccess).toBeTruthy()
});

