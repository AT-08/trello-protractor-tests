import {browser, ElementFinder, ExpectedConditions} from 'protractor';

const TIMEOUT = 30000;

export class CommonActions {

    static async click(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), TIMEOUT);
        await element.click();
    }

    static async setValue(element: ElementFinder, value: string) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
        await element.clear();
        await element.sendKeys(value);
    }

    static async waitVisibility(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
    }
}
