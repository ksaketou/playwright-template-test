import {Page, expect} from '@playwright/test'
import { LayoutOneElements } from './LayoutOneElements';
import { Assertion } from "../../utils/common/Assertion";
import { getTestData } from '../../utils/DataReader';
import { Action } from '../../utils/common/Action';

export class LayoutOneValidations {

    readonly page: Page
    private layoutOneElements: LayoutOneElements
    private assertion: Assertion
    private action: Action

    constructor(page: Page) {
        this.page = page;
        this.layoutOneElements = new LayoutOneElements(page)
        this.assertion = new Assertion()
        this.action = new Action()
     }

     async verifyAlertText() {
        this.page.on('dialog', async (dialog) => {
            if (dialog.type() === "confirm") {
                await expect(dialog).toContain(getTestData('ALERT_TEXT', 1));
                await dialog.accept();  // Accepting the alert message
                await this.assertion.isElementVisible(this.layoutOneElements.ALERT_CONFIRMATION_TEXT)
            } else {
                console.log('Could not find alert!');
                await expect(true).toBeFalsy();  // Fail the test if no alert is found
            }
        });
    }

    async verifyTooltipText() {
        await this.action.hover(this.layoutOneElements.TOOLTIP_OPTION)
        await this.assertion.isElementVisible(this.layoutOneElements.TOOLTIP_TEXT)
    }

    async verifyImageRelocated() {
        await this.assertion.isElementVisible(this.layoutOneElements.FILLED_BOX_TARGET)
    }
    
    async verifySuccessfullLoginText() {
        await this.assertion.isElementVisible(this.layoutOneElements.SUCCESSFULL_LOGIN_TEXT)
    }

    async verifyInvalidLoginAlert() {
        this.page.on('dialog', async (dialog) => {
            if (dialog.type() === "confirm") {
                expect(dialog).toContain(getTestData('INVALID_LOGIN_ALERT_TEXT', 1));
                await dialog.accept();  // Accepting the alert message
            } else {
                console.log('Could not find alert!');
                expect(true).toBeFalsy();  // Fail the test if no alert is found
            }
        });
    }

}





