import { Page } from "@playwright/test";
import { HomeValidations } from "./HomeValidations"

export class Home {
    readonly page: Page
    validate: HomeValidations

    constructor(page: Page) {
        this.page = page;
        this.validate = new HomeValidations(page)
     }
}