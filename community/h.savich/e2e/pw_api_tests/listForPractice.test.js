import { test, expect } from "@playwright/test";

test("Get All Products List", async ({ request }) => {
  const url = "https://automationexercise.com/api/productsList";
  const response = await request.get(url);
  const responceBody = await response.json();
  console.log(responceBody);
  expect(response.status()).toBe(200);
});

test("POST To All Products List", async ({ request }) => {
  const url = "https://automationexercise.com/api/productsList";
  const response = await request.post(url);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported." //1
  );
  expect(responceBody.message).toEqual("This request method is not supported."); //2
});

test("POST To Search Product", async ({ request }) => {
  const url = "https://automationexercise.com/api/searchProduct";
  const response = await request.post(url, {
    form: {
      search_product: "Top",
    },
  });
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  console.log(responceBody);
  expect(responceBody["products"].length).toEqual(14);
  expect(responceBody["products"][0]["id"]).toEqual(1);
  expect(responceBody["products"][0]["name"]).toEqual("Blue Top");
  expect(responceBody["products"][0]["brand"]).toEqual("Polo");
});

test("PUT To All Brands List", async ({ request }) => {
  const url = "https://automationexercise.com/api/brandsList";
  const response = await request.put(url);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported."
  ); //1
});

test("DELETE To Verify Login", async ({ request }) => {
  const url = "https://automationexercise.com/api/verifyLogin";
  const response = await request.delete(url);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported."
  ); //1
});
