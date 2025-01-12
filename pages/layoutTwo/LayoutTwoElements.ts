import { Page } from "@playwright/test";

export class LayoutTwoElements {

    constructor(private page: Page) {}

    public get FIRST_NAME_INPUT() {return this.page.locator('css=#fname');}
    public get LAST_NAME_INPUT() {return this.page.locator('css=#lname');}

    public get MALE_RADIO_BTN() {return this.page.locator('css=#male');}
    public get FEMALE_RADIO_BTN() {return this.page.locator('css=#female');}
    public get OTHER_RADIO_BTN() {return this.page.locator('css=#other');}

    public get OPTION_DROPDOWN() {return this.page.locator('css=#option');}

    public get DATA_LIST_INPUT() {return this.page.locator("css=input[list='datalists']");}

    public get FAV_COLOR_INPUT() {return this.page.locator('css=#favcolor');}

    public get DATE_INPUT() {return this.page.locator('css=#day');}

    public get FILE_UPLOAD_INPUT() {return this.page.locator('css=#myfile');}

    public get QUANTITY_INPUT() {return this.page.locator('css=#quantity');}

    public get LONG_MESSAGE_TEXTAREA() {return this.page.locator("css=textarea[name='message']");}

    public get SUBMIT_BUTTON() {return this.page.locator('css=button.btn-success');}

    public getCheckboxByText(text: string) {
        return this.page.locator("xpath=//input[@type='checkbox' and @name='" + text + "']")
    }
}
