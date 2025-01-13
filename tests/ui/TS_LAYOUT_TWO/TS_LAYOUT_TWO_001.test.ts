import {test} from '@playwright/test'
import config from "../../../playwright.config"
import { PageObjects } from '../../../pages/PageObjects';
import { getTestData } from '../../../utils/DataReader';

test.describe.configure({ mode: 'parallel' });

test.describe("TS_LAYOUT_TWO_001: Form @log", () =>  {
    let pages: PageObjects

    test.beforeEach("Navigate to demo page",async ({page}) => {
        pages = new PageObjects(page)
        // navigate to base url
        await page.goto(config.BASEURL)
        
    })


    test("TC_001: Fill out the form by inserting all fields", async () => {           
        await pages.getLayoutTwo().insertNameInfo()

        await pages.getLayoutTwo().selectGender(getTestData('GENDER'))
        await pages.getLayoutTwo().validate.verifyGenderRadioChecked(getTestData('GENDER'))
    })




})
