import { test, expect } from '../../fixtures/pageFixture';
import { userInfo, addressInfo } from '../../constants/index';

test('should register a new user', async ({ mainPage, accountCreatedPage, createUserPage, deleteAccountPage, registerUserPage }) => {
    await expect.soft(mainPage.getMainPage.checkIsVisible()).toBeTruthy();

    await mainPage.goToLoginPage();

    await expect.soft(registerUserPage.getSignUpForm.checkIsVisible()).toBeTruthy();

    await registerUserPage.fillUserData(userInfo.name, userInfo.email);
    await createUserPage.enterAccountInformation(
        userInfo.title,
        userInfo.name,
        userInfo.password,
        userInfo.dayOfBirth,
        userInfo.monthOfBirth,
        userInfo.yearOfBirth,
    );
    await createUserPage.enterAddressInformation(
        addressInfo.firstName,
        addressInfo.lastName,
        addressInfo.companyName,
        addressInfo.address1,
        addressInfo.address2,
        addressInfo.country,
        addressInfo.state,
        addressInfo.city,
        addressInfo.zipCode,
        addressInfo.mobileNumber,
    );

    const createAccountButton = await createUserPage.getCreateAccountButton();
    await createAccountButton.click();

    await expect.soft(accountCreatedPage.getAccountCreatedLabel.checkIsVisible()).toBeTruthy();

    const continueButtonAccountCreatedPage = await accountCreatedPage.getContinueButton();
    await continueButtonAccountCreatedPage.click();

    const actualLoggedInAsUserMessage = await mainPage.getLoggedUserLabelText();
    await expect.soft(actualLoggedInAsUserMessage).toBe(userInfo.isLoggedAs);

    const deleteLink = await mainPage.getDeleteLink();
    await deleteLink.click();

    await expect.soft(deleteAccountPage.getAccountDeletedText.checkIsVisible()).toBeTruthy();

    const continueButtonAccountDeletePage = await deleteAccountPage.getContinueButton();
    await continueButtonAccountDeletePage.click();
});
