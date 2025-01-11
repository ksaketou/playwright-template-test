import {Page, expect} from '@playwright/test'
import { LayoutOneElements } from './LayoutOneElements';
import { Assertion } from "../../utils/common/Assertion";
import { getTestData } from '../../utils/DataReader';

export class LayoutOneValidations {

    readonly page: Page
    private layoutOneElements: LayoutOneElements
    private assertion: Assertion

    constructor(page: Page) {
        this.page = page;
        const homeElements = new LayoutOneElements(page)
        this.assertion = new Assertion()
     }

     async verifyAlertText() {
        this.page.on('dialog', async (dialog) => {
            if (dialog.type() === "confirm") {
                await expect(dialog).toContain(getTestData('ALERT_TEXT'));
                await dialog.accept();  // Accepting the alert message
                await this.assertion.isElementVisible(this.layoutOneElements.ALERT_CONFIRMATION_TEXT)
            } else {
                console.log('Could not find alert!');
                await expect(true).toBeFalsy();  // Fail the test if no alert is found
            }
        });
    }
    

}





