import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
  constructor(protected request: APIRequestContext) {}

// Подумать как сделать гет запрос гибким и переиспользуемым:
// 1) возможность в параметрах метода передовать квери параметры
// 2) возможность задавать хедеры
// 3) возможность отправки без апи ключа
  public async getMethod(apiPath: string, apiKey: string | undefined) {
    this.request.get(`${apiPath}?api_key=${apiKey}`);
  }
}
