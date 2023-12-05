export class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.getByText(" Signup / Login");
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }
}
