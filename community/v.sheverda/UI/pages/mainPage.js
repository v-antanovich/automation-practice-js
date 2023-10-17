import { BaseElement } from '../elements/baseElement';
import { BasePage } from '../pages/index';

export class MainPage extends BasePage {
    #url;
    constructor(page, url) {
        super(page);
        this.#url = url;
    }

    get #getLoginLink() {
        return new BaseElement(this.page.locator('//a[@href="/login"]'));
    }

    get getMainPage() {
        return new BaseElement(this.page.locator('//section[@id="slider"]'));
    }

    getLoggedUserLabelText() {
        const loggedUserElement = new BaseElement(this.page.locator('//ul[@class="nav navbar-nav"]/li').nth(-1));
        return loggedUserElement.getText();
    }

    getDeleteLink() {
        return new BaseElement(this.page.locator('//a[@href="/delete_account"]'));
    }

    async navigate() {
        await this.page.goto(this.#url);
    }

    async goToLoginPage() {
        await this.#getLoginLink.click();
    }
}
