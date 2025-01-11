import {test} from '@playwright/test'
import config from "../../playwright.config"
import { PageObjects } from '../../pages/PageObjects';

test.describe.configure({ mode: 'parallel' });

test.describe("TS_UI_XXX_001: Login @UI", () =>  {
    let pages: PageObjects

    test.beforeEach("Navigate to Demo Login page",async ({page}) => {
        pages = new PageObjects(page)
        // navigate to base url
        await page.goto(config.BASEURL)
        
    })

    /**
     * @jira SDMX2-5778
     */
    test("TC_001: Verify Login page opens", async () => {           
        await pages.getLoginPage().validate.verifyLoginPageOpens()        
    })

    /**
     * @jira SDMX2-5776
     */
    test("TC_002: Login with empty credentials", async () => {           
        // click on Login button
        await pages.getLoginPage().clickLoginButton()
        // validate error messages for empty fields
        await pages.getLoginPage().validate.verifyEmptyLoginCredentialsText()
        
    })

    /**
     * @jira SDMX2-5777
     */
    test("TC_003: Login with valid credentials", async () => {     
        // insert the user credentials
        await pages.getLoginPage().insertLoginCredentials()
         // click the Login button
        await pages.getLoginPage().clickLoginButton()

        // validate that the welcome text is visible
        await pages.getHomePage().validate.verifyWelcomeText()
    })

    /**
     * @jira SDMX2-5775
     */
    test("TC_004: Login with invalid credentials", async () => {     
        // insert the user credentials
        await pages.getLoginPage().insertInvalidLoginCredentials()
         // click the Login button
        await pages.getLoginPage().clickLoginButton()
        await pages.getLoginPage().validate.verifyEmptyLoginCredentialsText()
    })

})
