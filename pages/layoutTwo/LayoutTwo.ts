import { Locator, Page } from "@playwright/test";
import { Action } from "../../utils/common/Action";
import { LayoutTwoElements } from "./LayoutTwoElements";
import { LayoutTwoValidations } from "./LayoutTwoValidations";
import { getTestData } from "../../utils/DataReader";
import { getUploadPath } from "../../utils/Resources"

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
        await this.action.input(this.layoutTwoElements.FIRST_NAME_INPUT, getTestData('FIRST_NAME', 1))
        await this.action.input(this.layoutTwoElements.LAST_NAME_INPUT, getTestData('LAST_NAME', 1))
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

    async selectDropdownOption(option: string, select: Locator) {
        await this.action.selectOption(select, option)
    }

    async selectCheckbox(option: string) {
        await this.action.enableCheckbox(this.layoutTwoElements.getCheckboxByText(option), true)
    }

    async uploadFile(filename: string) {
        const fileChooserPromise = this.page.waitForEvent('filechooser')
        await this.action.click(this.layoutTwoElements.FILE_UPLOAD_INPUT)
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles(getUploadPath() + filename)
    }

    async fillTextarea(text: string) {
        await this.action.input(this.layoutTwoElements.LONG_MESSAGE_TEXTAREA, text)
    }

    async clickSubmitBtn() {
        await this.action.click(this.layoutTwoElements.SUBMIT_BUTTON)
    }

}
