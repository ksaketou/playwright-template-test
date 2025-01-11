import { Page } from "@playwright/test";
import { Login } from "./login/Login";
import { Home } from "./home/Home";
import { LayoutOne } from "./layoutOne/LayoutOne";

export class PageObjects {

    readonly page: Page

    constructor(page : Page) {
        this.page = page
    }
    
    public getLoginPage() {
        return new Login(this.page)
    }

    public getHomePage() {
        return new Home(this.page)
    }

    public getLayoutOne() {
        return new LayoutOne(this.page)
    }
    
}