import {browser, ElementFinder, ExpectedConditions} from 'protractor';

/**
 * This is the Time out of the explicit wait.
 */
const TIMEOUT = 30000;

/**
 * This class is a container about all the possible common actions who can be used, with the explicit wait.
 */
export class CommonActions {
    /**
     * Method for click element.
     * @param element Input.
     */
    static async click(element: ElementFinder) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element), TIMEOUT);
        await element.click();
    }

    /**
     * Method for set value.
     * @param element Input.
     * @param value String to be set.
     */
    static async setValue(element: ElementFinder, value: string) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
        await element.clear();
        await element.sendKeys(value);
    }

    /**
     * Method wait the visibility of an element.
     * @param element Input.
     */
    static async waitVisibility(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
    }

    /**
     * Method for submit a form.
     * @param element Input.
     */
    static async submit(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
        await element.submit();
    }

    /**
     * Method for get the Text of a element.
     * @param element Input.
     */
    static async getText(element: ElementFinder) {
        await browser.wait(ExpectedConditions.visibilityOf(element), TIMEOUT);
        await element.getText();
    }
}
