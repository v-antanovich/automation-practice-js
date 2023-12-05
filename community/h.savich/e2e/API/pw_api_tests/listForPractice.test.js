import { test, expect } from "@playwright/test";
import { productsListUrl } from "../constants/urls";
import { searchProductUrl } from "../constants/urls";
import { brandsListUrl } from "../constants/urls";
import { verifyLoginUrl } from "../constants/urls";

test("Get All Products List", async ({ request }) => {
  const url = productsListUrl;
  const response = await request.get(url);
  const responceBody = await response.json();
  console.log(responceBody);
  expect(response.status()).toBe(200);
});

test("POST To All Products List", async ({ request }) => {
  const response = await request.post(productsListUrl);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported." //1
  );
  expect(responceBody.message).toEqual("This request method is not supported."); //2
});

test("POST To Search Product", async ({ request }) => {
  const response = await request.post(searchProductUrl, {
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
  const response = await request.put(brandsListUrl);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported."
  ); //1
});

test("DELETE To Verify Login", async ({ request }) => {
  const response = await request.delete(verifyLoginUrl);
  expect(response.status()).toBe(200);
  const responceBody = await response.json();
  expect(responceBody.responseCode).toBe(405);
  expect(responceBody["message"]).toEqual(
    "This request method is not supported."
  ); //1
});
