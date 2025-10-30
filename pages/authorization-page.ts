import { Locator, Page } from "@playwright/test";

export class AuthorizationPage {
    private getUsernameInput: Locator
    private getPasswordInput: Locator
    private getLoginBatton: Locator

    constructor(page: Page) {
        this.getUsernameInput = page.locator('[data-test="username"]')
        this.getPasswordInput = page.locator('[data-test="password"]')
        this.getLoginBatton = page.locator('[data-test="login-button"]')
    }

    public async login(username: string, password: string) {
        await this.getUsernameInput.fill(username)
        await this.getPasswordInput.fill(password)
        await this.getLoginBatton.click()
    }
}

/*await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click(); */