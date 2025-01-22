import {test} from '@playwright/test'
import config from "../../../playwright.config"
import { PageObjects } from '../../../pages/PageObjects';
import { getTestData } from '../../../utils/DataReader';
import { LayoutTwoElements } from '../../../pages/layoutTwo/LayoutTwoElements';

test.describe.configure({ mode: 'parallel' });

test.describe("TS_LAYOUT_TWO_001: Form @UI", () =>  {
    let pages: PageObjects
    let layoutTwoElements: LayoutTwoElements

    test.beforeEach("Navigate to demo page",async ({page}) => {
        pages = new PageObjects(page)
        layoutTwoElements = new LayoutTwoElements(page)
        // navigate to base url
        await page.goto(config.BASEURL)
        
    })

    test("TC_001: Insert name and gender info", async () => {           
        await pages.getLayoutTwo().insertNameInfo()

        await pages.getLayoutTwo().selectGender(getTestData('GENDER', 1))
        await pages.getLayoutTwo().validate.verifyGenderRadioChecked(getTestData('GENDER', 1))
    })


    test("TC_002: Select one option from the dropdown ", async () => {
        await pages.getLayoutTwo().selectDropdownOption(
            getTestData('DROPDOWN_SELECTION', 1), layoutTwoElements.OPTION_DROPDOWN_SELECT)
        await pages.getLayoutTwo().validate.verifyDropdownSelectedOptionByValue(
            getTestData('DROPDOWN_SELECTION', 1), layoutTwoElements.OPTION_DROPDOWN_SELECT)
    })

    test("TC_003: Select multiple options from the dropdown", async () => { // FAILS - two options cannot be selected
        await pages.getLayoutTwo().selectDropdownOption(
            getTestData('MULTI_DROPDOWN_SELECTION', 1), layoutTwoElements.OPTION_DROPDOWN_SELECT_MULTIPLE)
        await pages.getLayoutTwo().selectDropdownOption(
            getTestData('MULTI_DROPDOWN_SELECTION', 2), layoutTwoElements.OPTION_DROPDOWN_SELECT_MULTIPLE)
        await pages.getLayoutTwo().validate.verifyDropdownSelectedOptionByValue(
            getTestData('MULTI_DROPDOWN_SELECTION', 1), layoutTwoElements.OPTION_DROPDOWN_SELECT_MULTIPLE)
        await pages.getLayoutTwo().validate.verifyDropdownSelectedOptionByValue(
            getTestData('MULTI_DROPDOWN_SELECTION', 2), layoutTwoElements.OPTION_DROPDOWN_SELECT_MULTIPLE)
    })

    test("TC_004: Select checkboxes and fill out textarea", async () => {   // FAILS - the old text remains in the DOM
        await pages.getLayoutTwo().selectCheckbox('option1')
        await pages.getLayoutTwo().selectCheckbox('option2')
        await pages.getLayoutTwo().validate.verifyCheckboxSelected('option1')
        await pages.getLayoutTwo().validate.verifyCheckboxSelected('option2')

        await pages.getLayoutTwo().fillTextarea(getTestData('TEXT', 1))
        await pages.getLayoutTwo().validate.verifyLongMessageText(getTestData('TEXT', 1))
    })

    test("TC_005: Upload file and click submit", async () => {
        await pages.getLayoutTwo().uploadFile(getTestData('FILENAME', 1))
        await pages.getLayoutTwo().uploadFile(getTestData('FILENAME', 1))

        await pages.getLayoutTwo().clickSubmitBtn()
        await pages.getLayoutTwo().validate.verifySubmitBtnSelected()
    })


})
