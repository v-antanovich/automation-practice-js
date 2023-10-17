import { BaseElement } from '../elements/baseElement';
import { BasePage } from '../pages/index';

export class AccountCreatedPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getAccountCreatedLabel() {
        return new BaseElement(this.page.locator('//h2[@data-qa="account-created"]'));
    }

    getContinueButton() {
        return new BaseElement(this.page.locator('//a[@data-qa="continue-button"]'));
    }
}
