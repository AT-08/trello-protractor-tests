import {browser, element, ExpectedConditions, Locator} from 'protractor';

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
     * @param locator Input.
     */
    static async click(locator: Locator) {
        await browser.wait(ExpectedConditions.elementToBeClickable(element(locator)), TIMEOUT);
        await element(locator).click();
    }

    /**
     * Method for set value.
     * @param locator Input.
     * @param value String to be set.
     */
    static async setValue(locator: Locator, value: string) {
        await browser.wait(ExpectedConditions.visibilityOf(element(locator)), TIMEOUT);
        await element(locator).clear();
        await element(locator).sendKeys(value);
    }

    /**
     * Method wait the visibility of an locator.
     * @param locator Input.
     */
    static async waitVisibility(locator: Locator) {
        await browser.wait(ExpectedConditions.visibilityOf(element(locator)), TIMEOUT);
    }

    /**
     * Method for submit a form.
     * @param locator Input.
     */
    static async submit(locator: Locator) {
        await browser.wait(ExpectedConditions.visibilityOf(element(locator)), TIMEOUT);
        await element(locator).submit();
    }

    /**
     * Method for get the Text of a element.
     * @param locator Input.
     */
    static async getText(locator: Locator) {
        await browser.wait(ExpectedConditions.visibilityOf(element(locator)), TIMEOUT);
        await element(locator).getText();
    }

    /**
     * Method for wait the invisibility of an element.
     * @param locator Input locator.
     */
    static async waitInvisibilityOf(locator: Locator) {
        await browser.wait(ExpectedConditions.invisibilityOf(element(locator)), TIMEOUT)
    }
}
