import { BaseElement } from '../elements/baseElement';
import { BasePage } from '../pages/index';

export class RegisterUserPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getSignUpForm() {
        return new BaseElement(this.page.locator('//div[@class="signup-form"]'));
    }

    get #getNameInput() {
        return new BaseElement(this.page.locator('//input[@data-qa="signup-name"]'));
    }

    get #getEmailInput() {
        return new BaseElement(this.page.locator('//input[@data-qa="signup-email"]'));
    }

    get #getSignUpButton() {
        return new BaseElement(this.page.locator('//button[@data-qa="signup-button"]'));
    }

    async fillUserData(name, email) {
        await this.#getNameInput.fill(name);
        await this.#getEmailInput.fill(email);
        await this.#getSignUpButton.click();
    }
}
