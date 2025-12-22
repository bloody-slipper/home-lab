import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  public async visit() {
    await this.page.goto('/');
  }
}
