import { BaseElement } from '../elements/baseElement';
import { BasePage } from '../pages/index';

export class CreateUserPage extends BasePage {
    constructor(page) {
        super(page);
    }

    get getSignUpForm() {
        return new BaseElement(this.page.locator('//h2[@class="title text-center"]'));
    }

    #getTitleRadioButton(gender) {
        return new BaseElement(this.page.locator(`//input[@value='${gender}']`));
    }

    get #getNameInput() {
        return new BaseElement(this.page.locator('//input[@id="name"]'));
    }

    get #getPasswordInput() {
        return new BaseElement(this.page.locator('//input[@id="password"]'));
    }

    get #getDayOfBirthSelect() {
        return new BaseElement(this.page.locator('//select[@id="days"]'));
    }

    get #getMonthOfBirthSelect() {
        return new BaseElement(this.page.locator('//select[@id="months"]'));
    }

    get #getYearOfBirthSelect() {
        return new BaseElement(this.page.locator('//select[@id="years"]'));
    }

    get #getNewsLetterCheckBox() {
        return new BaseElement(this.page.locator('//input[@id="newsletter"]'));
    }

    get #getOptinCheckBox() {
        return new BaseElement(this.page.locator('//input[@id="optin"]'));
    }

    get #getFirstNameInput() {
        return new BaseElement(this.page.locator('//input[@id="first_name"]'));
    }

    get #getLastNameInput() {
        return new BaseElement(this.page.locator('//input[@id="last_name"]'));
    }

    get #getCompanyInput() {
        return new BaseElement(this.page.locator('//input[@id="company"]'));
    }

    get #getAddress1Input() {
        return new BaseElement(this.page.locator('//input[@id="address1"]'));
    }

    get #getAddress2Input() {
        return new BaseElement(this.page.locator('//input[@id="address2"]'));
    }

    get #getCountrySelect() {
        return new BaseElement(this.page.locator('//select[@id="country"]'));
    }

    get #getStateInput() {
        return new BaseElement(this.page.locator('//input[@id="state"]'));
    }

    get #getCityInput() {
        return new BaseElement(this.page.locator('//input[@id="city"]'));
    }

    get #getZipCodeInput() {
        return new BaseElement(this.page.locator('//input[@id="zipcode"]'));
    }

    get #getMobileNumberInput() {
        return new BaseElement(this.page.locator('//input[@id="mobile_number"]'));
    }

    async #selectDateOfBirth(day, month, year) {
        await this.#getDayOfBirthSelect.selectOption(day);
        await this.#getMonthOfBirthSelect.selectOption(month);
        await this.#getYearOfBirthSelect.selectOption(year);
    }

    getCreateAccountButton() {
        return new BaseElement(this.page.locator('//button[@data-qa="create-account"]'));
    }

    async enterAccountInformation(gender, name, password, day, month, year) {
        await this.#getTitleRadioButton(gender).check();
        await this.#getNameInput.fill(name);
        await this.#getPasswordInput.fill(password);
        await this.#selectDateOfBirth(day, month, year);
        await this.#getNewsLetterCheckBox.check();
        await this.#getOptinCheckBox.check();
    }

    async enterAddressInformation(firstName, lastName, companyName, address1, address2, country, state, city, zipCode, mobileNumber) {
        await this.#getFirstNameInput.fill(firstName);
        await this.#getLastNameInput.fill(lastName);
        await this.#getCompanyInput.fill(companyName);
        await this.#getAddress1Input.fill(address1);
        await this.#getAddress2Input.fill(address2);
        await this.#getCountrySelect.selectOption(country);
        await this.#getStateInput.fill(state);
        await this.#getCityInput.fill(city);
        await this.#getZipCodeInput.fill(zipCode);
        await this.#getMobileNumberInput.fill(mobileNumber);
    }
}
