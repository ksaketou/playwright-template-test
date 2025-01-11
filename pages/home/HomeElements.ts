import { Page } from "@playwright/test";

export class HomeElements {

    constructor(private page: Page) {}

    public get PAGE_TOP_TITLE() {
        return this.page.locator('text=Your Website to practice Automation Testing');
    }

    public get LAYOUT_ONE_TITLE() {
        return this.page.locator('text=This is your layout one');
    }

    public get LAYOUT_TWO_TITLE() {
        return this.page.locator('text=This is your layout two');
    }
}
