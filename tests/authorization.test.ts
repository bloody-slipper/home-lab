import test, { expect } from "@playwright/test";
import { AuthorizationPage } from "../pages/authorization-page";

test('Authorization standart user success', async ({ page }) => {
    const authorizationPage = new AuthorizationPage(page)
    await page.goto('https://www.saucedemo.com/');
    await authorizationPage.login('standard_user','secret_sauce')
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    
});

test('Authorization problem user success', async ({ page }) => {
    const authorizationPage = new AuthorizationPage(page)
    await page.goto('https://www.saucedemo.com/');
    await authorizationPage.login('problem_user','secret_sauce')
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    
});

test('Authorization performance glitch user success', async ({ page }) => {
    const authorizationPage = new AuthorizationPage(page)
    await page.goto('https://www.saucedemo.com/');
    await authorizationPage.login('performance_glitch_user','secret_sauce')
    
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    
});



