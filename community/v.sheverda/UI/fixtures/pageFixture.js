import { test as base } from '@playwright/test';

import { AccountCreatedPage, CreateUserPage, DeleteAccountPage, MainPage, RegisterUserPage } from '../pages/index';
import { mainPageUrl } from '../constants/index';

export const test = base.extend({
    mainPage: async ({ page }, use) => {
        const mainPage = new MainPage(page, mainPageUrl);
        await mainPage.navigate();
        await use(mainPage);
    },

    accountCreatedPage: async ({ page }, use) => {
        await use(new AccountCreatedPage(page));
    },

    createUserPage: async ({ page }, use) => {
        await use(new CreateUserPage(page));
    },

    deleteAccountPage: async ({ page }, use) => {
        await use(new DeleteAccountPage(page));
    },

    registerUserPage: async ({ page }, use) => {
        await use(new RegisterUserPage(page));
    },
});

exports.expect = base.expect;
