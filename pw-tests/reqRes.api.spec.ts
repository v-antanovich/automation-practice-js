import { test, expect } from "@playwright/test";
import { data } from "../data/reqresData";
import { ApiUser } from "../API/User.api";

test("Get Users", async ({ request }) => {
  const url = "https://reqres.in/api/users";
  const response = await request.get(url);
  const responceBody = await response.json();
  console.log(responceBody["data"][2]["email"]);
  expect(response.status()).toBe(200);
  expect(responceBody["data"][2]["email"]).toEqual("emma.wong@reqres.in");
});

// Post
test("Register User", async ({ request }) => {
  const client = new ApiUser(request);
  const response = await client.registerUser(data.registerUrl, data.body);
  expect(response.status()).toBe(200);
});

// Get
test("Get User", async ({ request }) => {
  const client = new ApiUser(request);
  const response = await client.getUser(data.userUrl);
  expect(response.status()).toBe(200);
});

// Post
test("Login", async ({ request }) => {
  const client = new ApiUser(request);
  const response = await client.loginUser(data.loginUrl, data.body);
  expect(response.status()).toBe(200);
});

test("Create User", async ({ request }) => {
  const client = new ApiUser(request);
  const response = await client.createUser(data.usersUrl, data.body);
  expect(response.status()).toBe(201);
});

// Put
test("Update User", async ({ request }) => {
  // get token
  const client = new ApiUser(request);
  let token = await client.getToken();
  // Update User
  let response = await client.updateUser(
    data.userUrl,
    data.objectForUpdateUser(token)
  );
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.name).toEqual(data.newUser.name);
  expect(responceBody.job).toEqual(data.newUser.job);
});

// Delete
test("Delete User", async ({ request }) => {
  const client = new ApiUser(request);
  const response = await client.deleteUser(data.userUrl);
  expect(response.status()).toBe(204);
});
