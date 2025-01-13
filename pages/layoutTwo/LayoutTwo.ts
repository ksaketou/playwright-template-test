import { Page } from "@playwright/test";
import { Action } from "../../utils/common/Action";
import { LayoutTwoElements } from "./LayoutTwoElements";
import { LayoutTwoValidations } from "./LayoutTwoValidations";
import { getTestData } from "../../utils/DataReader";

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

    async insertNameInfo() {
        await this.action.input(this.layoutTwoElements.FIRST_NAME_INPUT, getTestData('FIRST_NAME'))
        await this.action.input(this.layoutTwoElements.LAST_NAME_INPUT, getTestData('LAST_NAME'))
    }

    async selectGender(gender: String) {

        switch(gender) {
            case "Male":
                await this.action.enableCheckbox(this.layoutTwoElements.getGenderRadioById('male'), true)
                break
            case "Female":
                await this.action.enableCheckbox(this.layoutTwoElements.getGenderRadioById('female'), true)
                break
            default:
                await this.action.enableCheckbox(this.layoutTwoElements.getGenderRadioById('other'), true)
                break
        }
        
    }

}
