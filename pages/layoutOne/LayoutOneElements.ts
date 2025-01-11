import { Page } from "@playwright/test";

export class LayoutOneElements {

    constructor(private page: Page) {}

    public get SAMPLE_ALERT_BUTTON() {
        return this.page.locator('text= Your Sample Alert Button!');
    }

    public get ALERT_CONFIRMATION_TEXT() {
        return this.page.locator('text=You Pressed the OK Button!');
    }


}
