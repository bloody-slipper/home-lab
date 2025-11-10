import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { getByDataTestId } from "../helpers/utils";

export class ProductsPage extends BasePage {
    nameProductItems: Locator
    descriptionProductItems: Locator
    priceProductItems: Locator

    constructor(page: Page) {
        super(page)
        this.nameProductItems = getByDataTestId(page, "inventory-item-name");
        this.descriptionProductItems = getByDataTestId(page, "inventory-item-desc");
        this.priceProductItems = getByDataTestId(page, "inventory-item-price");
    }

    public async verifyProductDetailsIsVisible() {
        const productCount = await this.nameProductItems.count();
        for (let i = 0; i < productCount; i++) {
            await expect(this.nameProductItems.nth(i)).toBeVisible();
            await expect(this.descriptionProductItems.nth(i)).toBeVisible();
            await expect(this.priceProductItems.nth(i)).toBeVisible();
        }
    }
}