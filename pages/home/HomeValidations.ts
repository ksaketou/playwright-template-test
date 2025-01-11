import {Page} from '@playwright/test'
import { HomeElements } from './HomeElements';
import { Assertion } from "../../utils/common/Assertion";

export class HomeValidations {

    readonly page: Page
    private homeElements: any
    private assertion: Assertion

    constructor(page: Page) {
        this.page = page;
        this.homeElements = new HomeElements(page).getElements
        this.assertion = new Assertion()
     }

    async verifyWelcomeText() {
        await this.assertion.isElementVisible(this.homeElements.SUCCESSFULL_LOGIN_TEXT)
    }

}





