import { Locator, Page } from "@playwright/test";

export const getByDataTestId = (page: Page, elementName: string): Locator => {
  return page.locator(`[data-test="${elementName}"]`);
};
