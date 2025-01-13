import { Locator, expect } from "@playwright/test";

/**
 * This class contains frequently used assertions that can be used in 
 * multiple validation methods across all page objects.
 *  
 */
export class Assertion {
    
    /**
     * This method validates if an element is present in the User Interface.
     * 
     * @param locator the element that is expected to be diplayed
     */
    async isElementVisible(locator: Locator) {
        await expect(locator).toBeVisible()
    }

    /**
     * This method validates if the given parameter is an editable element.
     * 
     * @param locator the element that is expected to be editable
     */
    async isElementEditable(locator: Locator) {
        await expect(locator).toBeEditable()
    }

    /**
     * This method validates if the given element is disabled.
     * 
     * @param locator the element that is expected to be disabled
     */
    async isElementDisabled(locator: Locator) {
        await expect(locator).toBeDisabled()
    }

    /**
     * This method validates if the given element is enabled.
     * 
     * @param locator the element that is expected to be enabled 
     */
    async isElementEnabled(locator: Locator) {
        await expect(locator).toBeEnabled()
    }

        /**
     * This method validates if the given checkbox or radio is checked.
     * 
     * @param locator the element that is expected to be checked 
     */
        async isElementChecked(locator: Locator) {
            await expect(locator).toBeChecked()
        }

    /**
     * This method validates if an element is not displayed in the User Interface.
     * 
     * @param locator the element that is expected to be invisible
     */
    async isElementHidden(locator: Locator) {
        await expect(locator).toBeHidden()
    }

    /**
     * This method validates if a given text is included in a given locator.
     * 
     * @param locator the elements that is expected to contain the given text
     * @param expectedText the text that is expected to be present in the given element
     */
    async elementContainsText(locator: Locator, expectedText: string) {
        await expect(locator).toContainText(expectedText)
    }
}
