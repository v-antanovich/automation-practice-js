import { test, expect } from '@playwright/test';

import { UserApi } from '../../API/apiList/userApi';
import { createUserApi, updateUserApi, deleteUserApi, loginUserApi } from '../../API/data/user/urls';
import { userData } from '../../API/data/user/userData';

test.describe('user tests', () => {
    test('Create User', async ({ request }) => {
        const userApi = new UserApi(request);

        const createUserResponse = await userApi.createUser(createUserApi, userData.userInfo);

        const createUserResponseBody = await createUserResponse.json();
        const actualEmail = createUserResponseBody.email;
        const actualPassword = createUserResponseBody.password;

        expect(createUserResponse.status()).toBe(201);
        expect(actualEmail).toBe(userData.userInfo.email);
        expect(actualPassword).toBe(userData.userInfo.password);
    });

    test('Update User', async ({ request }) => {
        const userApi = new UserApi(request);

        const loginUserResponse = await userApi.loginUser(loginUserApi, userData.userInfoForLogin);
        const loginUserResponseBody = await loginUserResponse.json();
        const token = loginUserResponseBody.token;

        const updateUserResponse = await userApi.updateUser(updateUserApi, userData.objectForUserUpdate(token));

        const updateUserResponseBody = await updateUserResponse.json();
        const actualName = updateUserResponseBody.name;
        const actualJob = updateUserResponseBody.job;

        expect(updateUserResponse.status()).toBe(200);
        expect(actualName).toBe(userData.updatedUserInfo.name);
        expect(actualJob).toBe(userData.updatedUserInfo.job);
    });

    test('Delete User', async ({ request }) => {
        const userApi = new UserApi(request);
        const response = await userApi.deleteUser(deleteUserApi);

        expect(response.status()).toBe(204);
    });
});
