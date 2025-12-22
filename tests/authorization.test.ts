import test, { expect } from "@playwright/test";
import { AuthorizationPage } from "../pages/authorization-page";
import { ProductsPage } from "../pages/products-page";

let authorizationPage: AuthorizationPage 
let productsPage: ProductsPage

test.beforeEach(async ({ page }) => {
  authorizationPage = new AuthorizationPage(page);
  productsPage = new ProductsPage(page);

  await authorizationPage.visit();
  });

test("Authorization standart user success", async ({ page }) => {
  await authorizationPage.login("standard_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(productsPage.cartButton).toBeVisible();
});

test("Authorization problem user success", async ({ page }) => {
  await authorizationPage.login("problem_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(productsPage.cartButton).toBeVisible();
});

test("Authorization performance glitch user success", async ({ page }) => {
  await authorizationPage.login("performance_glitch_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(productsPage.cartButton).toBeVisible();
});

test("Authorization error user success", async ({ page }) => {
  await authorizationPage.login("error_user", "secret_sauce");

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  await expect(productsPage.cartButton).toBeVisible();
});
