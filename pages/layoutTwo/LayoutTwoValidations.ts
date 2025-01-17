import {Locator, Page, expect} from '@playwright/test'
import { LayoutTwoElements } from './LayoutTwoElements';
import { Assertion } from "../../utils/common/Assertion";

export class LayoutTwoValidations {

    readonly page: Page
    private layoutTwoElements: LayoutTwoElements
    private assertion: Assertion

    constructor(page: Page) {
        this.page = page;
        this.layoutTwoElements = new LayoutTwoElements(page)
        this.assertion = new Assertion()
    }

    async verifyGenderRadioChecked(gender: string) {
        
        switch(gender.toLowerCase()) {
            case "male":
                await this.assertion.isElementChecked(this.layoutTwoElements.getGenderRadioById('male'))
                break
            case "female":
                await this.assertion.isElementChecked(this.layoutTwoElements.getGenderRadioById('female'))
                break
            default:
                await this.assertion.isElementChecked(this.layoutTwoElements.getGenderRadioById('other'))
                break
        }
    }

    async verifyDropdownSelectedOptionByValue(selectedOption: string, select: Locator) {
        expect(await select.inputValue() === selectedOption).toBeTruthy()

    }

    async verifyCheckboxSelected(name: string) {
        await this.assertion.isElementChecked(this.layoutTwoElements.getCheckboxByText(name))
    }

    async verifyLongMessageText(expectedText: string) {
        console.log(await this.layoutTwoElements.LONG_MESSAGE_TEXTAREA.textContent())
        expect(await this.layoutTwoElements.LONG_MESSAGE_TEXTAREA.textContent() === expectedText).toBeTruthy()
    }

    async verifySubmitBtnSelected() {
        const newTabPromise = this.page.waitForEvent("popup");
        const newTab = await newTabPromise;
        await newTab.waitForLoadState();
      
        await expect(newTab).toHaveURL("https://www.google.com/");
    }

}





