import {test} from '@playwright/test'
import config from "../../../playwright.config"
import { PageObjects } from '../../../pages/PageObjects';

test.describe.configure({ mode: 'parallel' });

test.describe("TS_LAYOUT_TWO_001: Layout two @UI", () =>  {
    let pages: PageObjects

    test.beforeEach("Navigate to demo page",async ({page}) => {
        pages = new PageObjects(page)
        // navigate to base url
        await page.goto(config.BASEURL)
        
    })


    test("TC_001: Verify demo page opens", async () => {           
        await pages.getHomePage().validate.verifyPageIsDisplayed()        
    })




})
