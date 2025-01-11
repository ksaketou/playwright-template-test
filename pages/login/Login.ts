import { Page } from "@playwright/test";
import { LoginElements } from "./LoginElements";
import config from "../../playwright.config"
import { getTestData } from "../../utils/DataReader";
import { Action } from "../../utils/common/Action";
import { LoginValidations } from "./LoginValidations";

export class Login {
    readonly page: Page
    private action: Action
    private loginElements: any
    validate: LoginValidations

    constructor(page: Page) {
        this.page = page;
        this.action = new Action()
        this.loginElements = new LoginElements(page).getElements
        this.validate = new LoginValidations(page)
     }

    async clickLoginButton() {
        await this.action.click(this.loginElements.LOGIN_BUTTON)
    }

    async insertLoginCredentials() {
        await this.action.input(this.loginElements.USERNAME_INPUT,config.USERNAME)
        await this.action.input(this.loginElements.PASSWORD_INPUT,config.PASSWORD)
    }

    async insertInvalidLoginCredentials() {
        // read data from .properties file
        await this.action.input(this.loginElements.USERNAME_INPUT,getTestData('INVALID_USERNAME'))
        await this.action.input(this.loginElements.PASSWORD_INPUT,getTestData('INVALID_PASSWORD'))
    }

}
