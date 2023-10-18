export const userData = {
    userInfo: {
        name: 'vlad vlad',
        job: 'you do not wanna know',
    },

    userInfoForLogin: {
        email: 'email": "michael.lawson@reqres.in',
        password: 'test',
    },

    updatedUserInfo: {
        name: 'vlad',
        job: 'CEO',
    },

    objectForUserUpdate: function (token) {
        return {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            data: this.updatedUserInfo,
        };
    },
};
