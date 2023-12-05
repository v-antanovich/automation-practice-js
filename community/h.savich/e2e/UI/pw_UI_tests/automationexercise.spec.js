const { test, expect } = require("@playwright/test");
import { SignupPage } from "../pagesUI/signupPage.js";
import { LoginPage } from "../pagesUI/LoginPage.js";

let signupPage;
let loginPage;

test.beforeEach(async ({ page }) => {
  signupPage = new SignupPage(page);
  signupPage.openSighupPage();
  loginPage = new LoginPage(page);
});

let userDetailsData = [
  "userName",
  "password",
  "firstName",
  "last_name",
  "address",
  "state",
  "city",
  "55000",
  "555444",
];

let userBirthData = ["5", "2", "1995"];

test("Test Case 1: Register User", async ({ page }) => {
  await expect(page.locator("ul.nav.navbar-nav")).toBeVisible();
  await loginPage.clickLoginLink();
  await expect(page.locator("//div[@class='signup-form']")).toBeVisible();
  await signupPage.sighUp(
    "test",
    signupPage.genRandonString(8).concat("@gmail.com")
  );

  await expect(
    page.locator(
      "//div[@class='login-form']//*[contains(text(), 'Enter Account Information')]"
    )
  ).toBeVisible();

  await signupPage.fillAccountDetails(userDetailsData, userBirthData);

  await expect(page.getByText("Account Created!")).toBeVisible();

  await page.locator("[data-qa='continue-button']").click();

  await expect(page.getByText(" Logged in as " + userDetails[0])).toBeVisible();

  await page.getByText(" Delete Account").click();
  await expect(page.getByText("Account Deleted!")).toBeVisible();
  await page.locator("[data-qa='continue-button']").click();
  await signupPage.closeSighupPage();
});
