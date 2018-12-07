import {browser, ElementFinder, ExpectedConditions} from 'protractor';

const TIMEOUT = 30000;

export class CommonActions {

    static async click(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), TIMEOUT)
        element.click();
    }

    static async setValue(element: ElementFinder, value: string) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
        element.sendKeys(value);
    }
}
