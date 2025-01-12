import { Locator, Page } from "@playwright/test";
import { Action } from "../../utils/common/Action";
import { LayoutOneElements } from "./LayoutOneElements";
import { LayoutOneValidations } from "./LayoutOneValidations";
import config from "../../playwright.config";

export class LayoutOne {
    readonly page: Page
    private action: Action
    private layoutOneElements: LayoutOneElements
    validate: LayoutOneValidations
    

    constructor(page: Page) {
        this.page = page;
        this.action = new Action()
        this.layoutOneElements = new LayoutOneElements(page)
        this.validate = new LayoutOneValidations(page)
     }

    async clickOnAlertButton() {
        await this.action.click(this.layoutOneElements.SAMPLE_ALERT_BUTTON)
    }

    async dragAndDropImage(image: Locator, target: Locator) {
        await this.action.dragAndDrop(image, target)
    }

    async fillLoginForm(username: string, password: string) {
        await this.action.input(this.layoutOneElements.USERNAME_INPUT, username)
        await this.action.input(this.layoutOneElements.PASSWORD_INPUT, password)
    }

    async clickLoginButton() {
        await this.action.click(this.layoutOneElements.LOGIN_BUTTON)
    }
}
