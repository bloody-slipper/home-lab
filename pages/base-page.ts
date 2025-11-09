import { Page } from "@playwright/test";

const basicURL = "https://www.saucedemo.com";

export class BasePage {
  constructor(protected page: Page) {}

  public async visit(){
    await this.page.goto(basicURL)
  }
}
