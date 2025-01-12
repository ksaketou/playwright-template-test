import { Page } from "@playwright/test";
import { Action } from "../../utils/common/Action";
import { LayoutTwoElements } from "./LayoutTwoElements";
import { LayoutTwoValidations } from "./LayoutTwoValidations";

export class LayoutTwo {
    readonly page: Page
    private action: Action
    private layoutTwoElements: LayoutTwoElements
    validate: LayoutTwoValidations
    

    constructor(page: Page) {
        this.page = page;
        this.action = new Action()
        this.layoutTwoElements = new LayoutTwoElements(page)
        this.validate = new LayoutTwoValidations(page)
    }

}
