import test, { expect } from "@playwright/test";
import { API_KEY } from "../consts/env-consts";
import { ApiHelper } from "../api-helper/api-helper";

test('should create a bug report', async ({ request }) => {
const apiHelper =  new ApiHelper(request)
//   const result = await request.get(`/planetary/apod?api_key=${API_KEY}`);
const result = apiHelper.getMethod("/planetary/apod", API_KEY)
  console.log(result)
//   expect(issues.ok()).toBeTruthy();
//   expect(await issues.json()).toContainEqual(expect.objectContaining({
//     title: '[Bug] report 1',
//     body: 'Bug description'
//   }));
});