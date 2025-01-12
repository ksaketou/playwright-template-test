import { Page } from "@playwright/test";
import { Home } from "./home/Home";
import { LayoutOne } from "./layoutOne/LayoutOne";
import { LayoutTwo } from "./layoutTwo/LayoutTwo";

export class PageObjects {

    readonly page: Page

    constructor(page : Page) {
        this.page = page
    }

    public getHomePage() {
        return new Home(this.page)
    }

    public getLayoutOne() {
        return new LayoutOne(this.page)
    }

    public getLayoutTwo() {
        return new LayoutTwo(this.page)
    }
    
}