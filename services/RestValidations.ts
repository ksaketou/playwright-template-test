import { APIResponse, expect } from "@playwright/test";

export class RestValidations {

     async verifyStatusCode(response: APIResponse, statusCode: number) {
        expect(await response.status()).toBe(statusCode)
     }

     async verifyResponseText(response: APIResponse, expectedText: string) {
        expect(await response.text()).toContain(expectedText)
     }
}