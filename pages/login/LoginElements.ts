import { Page } from "@playwright/test";

export class LoginElements {

    constructor(private page: Page) {
        this.page = page;
     }

    public getElements = {
        LOGIN_BUTTON: this.page.locator("//button[@id='submit']"),
        USERNAME_INPUT: this.page.locator("#username"),
        PASSWORD_INPUT: this.page.locator("#password"),
        INVALID_LOGIN_ERROR: this.page.locator("#error")
     }


}
