import {Page, expect} from '@playwright/test'
import { LayoutTwoElements } from './LayoutTwoElements';
import { Assertion } from "../../utils/common/Assertion";
import { getTestData } from '../../utils/DataReader';
import { Action } from '../../utils/common/Action';

export class LayoutTwoValidations {

    readonly page: Page
    private layoutTwoElements: LayoutTwoElements
    private assertion: Assertion
    private action: Action

    constructor(page: Page) {
        this.page = page;
        this.layoutTwoElements = new LayoutTwoElements(page)
        this.assertion = new Assertion()
        this.action = new Action()
     }



}





