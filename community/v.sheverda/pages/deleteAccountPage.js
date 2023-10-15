import { BaseElement } from '../elements/baseElement';
import { BasePage } from '../pages/index';

export class DeleteAccountPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getAccountDeletedText() {
        return new BaseElement(this.page.locator('//h2[@class="title text-center"]'));
    }

    getContinueButton() {
        return new BaseElement(this.page.locator('//a[@data-qa="continue-button"]'));
    }
}
