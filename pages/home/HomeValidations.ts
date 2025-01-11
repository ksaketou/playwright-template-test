import {Page} from '@playwright/test'
import { HomeElements } from './HomeElements';
import { Assertion } from "../../utils/common/Assertion";

export class HomeValidations {

    readonly page: Page
    private homeElements: HomeElements
    private assertion: Assertion

    constructor(page: Page) {
        this.page = page;
        this.homeElements = new HomeElements(page)
        this.assertion = new Assertion()
     }

    async verifyPageIsDisplayed() {
        await this.assertion.isElementVisible(this.homeElements.PAGE_TOP_TITLE)
        await this.assertion.isElementVisible(this.homeElements.LAYOUT_ONE_TITLE)
        await this.assertion.isElementVisible(this.homeElements.LAYOUT_TWO_TITLE)
    }

}





