export const data = {
  userId: 12,
  tokenUrl: "https://reqres.in/api/register",
  loginUrl: "https://reqres.in/api/login",
  registerUrl: `https://reqres.in/api/register`,
  userUrl: `https://reqres.in/api/users/12`,
  usersUrl: `https://reqres.in/api/users`,
  body: {
    data: {
      email: "george.bluth@reqres.in",
      password: "pistol",
    },
  },
  objectForUpdateUser: function (token: string) {
    return {
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
      data: this.newUser,
    };
  },
  newUser: {
    name: "Jake",
    job: "Developer",
  },
};

export const expData = {
  email: "emma.wong@reqres.in",
};
