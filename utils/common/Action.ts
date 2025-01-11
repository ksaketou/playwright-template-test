import { Locator } from "@playwright/test";

/**
 * This class contains frequently used action methods that can be used to
 * interact with UI elements across all page objects.
 *  
 */
export class Action {

    /**
     * This method clicks on a given locator.
     * 
     * @param locator the element that will receive the click action
     */
    async click(locator: Locator)  {
        await locator.click()
    }

    /**
     * This method double clicks on a given locator.
     * 
     * @param locator the element that will receive the double click action
     */
    async doubleClick(locator: Locator)  {
        await locator.dblclick()
    }

    /**
     * This method hovers on a given locator.
     * 
     * @param locator the locator that will receive the hover action
     */
    async hover(locator: Locator)  {
        await locator.hover()
    }

    /**
     * This method fills a given input field with a given text value.
     * 
     * @param locator the input locator that will receive the text
     * @param value the text that will be added to the locator
     */
    async input(locator: Locator, value: string)  {
        await locator.fill(value)
    }

    /**
     * This method checks or unchecks a given checkbox or radio button
     * depending on the value of the parameter state.
     * 
     * @param locator a checkbx or a radio button element
     * @param state the desired state of the element
     */
    async enableCheckbox(locator: Locator, state: boolean)  {
        await locator.setChecked(state)
    }

    /**
     * This method selects a given value from a select element. The string is 
     * matched with both values and labels.
     * 
     * @param locator a select element
     * @param option the expected value to be selected
     */
    async selectOption(locator: Locator, option: string)  {
        await locator.selectOption(option)
    }

    /**
     * This method selects multiple values from a select element.
     * 
     * @param locator a select element
     * @param options the expected values to be selected 
     */
    async selectMultipleOptions(locator: Locator, options: string[])  {
        await locator.selectOption(options)
    }

    /**
     * This method interacts with an element by simulating an 
     * interaction with the keyboard.
     * 
     * @param locator the locator that will receive the interaction
     * @param key the desired key to be pressed (eg. 'Enter', 'Esc', 'KeyA')
     */
    async keyPress(locator: Locator, key: string)  {
        await locator.press(key)
    }

    /**
     * This method simulates the drag and drop action by moving a given locator
     * to a specific destination.
     * 
     * @param locator the element that will be dragged
     * @param destination the location that the element will be placed to
     */
    async dragAndDrop(locator: Locator, destination: Locator)  {
        await locator.dragTo(destination)
    }
}