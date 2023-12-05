import { mainPageUrl } from "../constants/urls";

export class SignupPage {
  constructor(page) {
    this.page = page;
  }

  async openSighupPage() {
    await this.page.goto(mainPageUrl);
  }

  async closeSighupPage() {
    await this.page.close();
  }

  async sighUp(userName, userEmail) {
    await this.page.locator("//input[@data-qa='signup-name']").fill(userName);
    await this.page.locator("//input[@data-qa='signup-email']").fill(userEmail);
    // .fill(userEmail);
    await this.page.click("//button[@data-qa='signup-button']");
  }

  async fillAccountDetails(userDetailsData, userBirthData) {
    let userFields = [
      "//input[@data-qa='name']",
      "//input[@data-qa='password']",
      "//input[@data-qa='first_name']",
      "//input[@data-qa='last_name']",
      "//select[@data-qa='days']",
      "//input[@data-qa='address']",
      "//input[@data-qa='state']",
      "//input[@data-qa='city']",
      "//input[@data-qa='zipcode']",
      "//input[@data-qa='mobile_number']",
    ];
    let userBirth = [
      "//select[@data-qa='days']",
      "//select[@data-qa='months']",
      "//select[@data-qa='years']",
    ];

    for (let i = 0; i < userFields.length; i++) {
      await this.page.locator(userFields[i]).fill(userDetailsData[i]);
    }

    await this.page.locator("#id_gender1").click();

    for (let i = 0; i < userBirth.length; i++) {
      await this.page.locator(userBirth[i]).fill(userBirthData[i]);
    }
    // await this.page.locator("//select[@data-qa='days']").selectOption("5");
    // await this.page.locator("//select[@data-qa='months']").selectOption("2");
    // await this.page.locator("//select[@data-qa='years']").selectOption("1995");

    await this.page.locator("#newsletter").click();
    await this.page.locator("//button[@data-qa='create-account']").click();
  }

  genRandonString(length) {
    var chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var charLength = chars.length;
    var result = "";
    for (var i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
  }
}
