import { Locator, Page } from "@playwright/test";
import { Action } from "../../utils/common/Action";
import { LayoutOneElements } from "./LayoutOneElements";
import { LayoutOneValidations } from "./LayoutOneValidations";

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
}
