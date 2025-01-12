import { Page } from "@playwright/test";

export class LayoutOneElements {

    constructor(private page: Page) {}

    public get SAMPLE_ALERT_BUTTON() {return this.page.locator('text= Your Sample Alert Button!');}

    public get ALERT_CONFIRMATION_TEXT() {return this.page.locator('xpath=//p[text()=\'You Pressed the OK Button!\']');}

    public get TOOLTIP_OPTION() {return this.page.locator('css=div.tooltip');}

    public get TOOLTIP_TEXT() {return this.page.locator('css=span.tooltiptext');}

    public get PIZZA_IMAGE() {return this.page.locator('css=#drag1');}

    public get EMPTY_BOX_TARGET() {return this.page.locator('css=#div1');}

    public get FILLED_BOX_TARGET() {return this.page.locator('css=#div1 #drag1');}

    public get USERNAME_INPUT() {return this.page.locator('css=#uname');}

    public get PASSWORD_INPUT() {return this.page.locator('css=#pwd');}

    public get LOGIN_BUTTON() {return this.page.locator('css=input[type=\'submit\']');}

    public get SUCCESSFULL_LOGIN_TEXT() {return this.page.locator('text=Login Successful :) ');}

}
