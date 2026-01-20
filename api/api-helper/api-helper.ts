import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
  constructor(protected request: APIRequestContext) {}

Подумать 
  public async getMethod(apiPath: string, apiKey: string | undefined) {
    this.request.get(`${apiPath}?api_key=${apiKey}`);
  }
}
