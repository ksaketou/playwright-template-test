import { Page } from "@playwright/test";

export class HomeElements {

    constructor(private page: Page) {
        this.page = page;
    }

    public getElements = {
        SUCCESSFULL_LOGIN_TEXT: this.page.getByRole('heading').locator("text='Logged In Successfully'")
    }     
     
}
