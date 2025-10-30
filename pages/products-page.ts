import { expect, Locator, Page } from "@playwright/test";

export class ProductsPage {
    nameProductItem: Locator
    descriptionProductItem: Locator
    priceProductItem: Locator
    imgProductItem: Locator
    buttonProductItem: Locator

    constructor(page: Page) {
        const firstProduct = page.locator('[data-test="inventory-item"]').first();
        this.nameProductItem = firstProduct.locator('[data-test="inventory-item-name"]')
        this.descriptionProductItem = firstProduct.locator('[data-test="inventory-item-desc"]')
        this.priceProductItem = firstProduct.locator('[data-test="inventory-item-price"]')
        this.imgProductItem = firstProduct.locator('[data-test="inventory-item-sauce-labs-backpack-img"]')
        this.buttonProductItem = firstProduct.locator('[data-test="add-to-cart-sauce-labs-backpack"]')
    }

    public async verifyProductDetailIsVisible() {
        await expect(this.nameProductItem).toBeVisible();
        await expect(this.descriptionProductItem).toBeVisible();
        await expect(this.priceProductItem).toBeVisible();
        await expect(this.imgProductItem).toBeVisible();
        await expect(this.buttonProductItem).toBeVisible();
    }
}