import {test} from '@playwright/test'
import config from "../../../playwright.config"
import { PageObjects } from '../../../pages/PageObjects';
import { getTestData } from '../../../utils/DataReader';

test.describe.configure({ mode: 'parallel' });

test.describe("TS_LAYOUT_ONE_002: Login page @UI", () =>  {
    let pages: PageObjects

    test.beforeEach("Navigate to demo page",async ({page}) => {
        pages = new PageObjects(page)
        // navigate to base url
        await page.goto(config.BASEURL)
        
    })


    test("TC_001: Login successfully", async () => {           
        await pages.getLayoutOne().fillLoginForm(config.USERNAME, config.PASSWORD)
        await pages.getLayoutOne().clickLoginButton()
        await pages.getLayoutOne().validate.verifySuccessfullLoginText()        
    })

    test("TC_002: Login with empty credentials", async () => {           
        await pages.getLayoutOne().fillLoginForm("", "")
        await pages.getLayoutOne().clickLoginButton()
        await pages.getLayoutOne().validate.verifyInvalidLoginAlert()        
    })

    test("TC_03: Login with invalid credentials", async () => {           
        await pages.getLayoutOne().fillLoginForm(config.USERNAME, getTestData('INVALID_PASSWORD'))
        await pages.getLayoutOne().clickLoginButton()
        await pages.getLayoutOne().validate.verifyInvalidLoginAlert()        
    })

})
