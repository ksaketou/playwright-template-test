import {Page} from '@playwright/test'
import { LoginElements } from './LoginElements';
import { Assertion } from '../../utils/common/Assertion';

export class LoginValidations {

    private page: Page;
    private loginElements: any
    private assertion: Assertion

    constructor(page: Page) {
        this.page = page;
        this.loginElements = new LoginElements(page).getElements
        this.assertion = new Assertion()
     }

    async verifyEmptyLoginCredentialsText() {
        await this.assertion.isElementHidden(this.loginElements.INVALID_LOGIN_ERROR)
    }

    async verifyLoginPageOpens() {
        await this.assertion.isElementVisible(this.loginElements.LOGIN_BUTTON)
    }
}

