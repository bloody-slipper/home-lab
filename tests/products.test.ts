import test, { expect } from "@playwright/test";
import { AuthorizationPage } from "../pages/authorization-page";
import { ProductsPage } from "../pages/products-page"; 

test('Check product details in the list', async ({page}) => {
    const authorizationPage = new AuthorizationPage(page)
    await page.goto('https://www.saucedemo.com/');
    await authorizationPage.login('standard_user','secret_sauce')

    const productsPage = new ProductsPage(page)
    await productsPage.verifyProductDetailIsVisible();
}); 