import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page";
import { getByDataTestId } from "../helpers/utils";

export class AuthorizationPage extends BasePage {
  public getUsernameInput: Locator;
  public getPasswordInput: Locator;
  public getLoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.getUsernameInput = getByDataTestId(page, "username");
    this.getPasswordInput = getByDataTestId(page, "password");
    this.getLoginButton = getByDataTestId(page, "login-button");
  }

  public async login(username: string, password: string) {
    await this.getUsernameInput.fill(username);
    await this.getPasswordInput.fill(password);
    await this.getLoginButton.click();
  }
}
