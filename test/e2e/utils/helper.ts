import {browser, ExpectedConditions} from 'protractor';

export class Helper {
  static async browserWait(condition: any, timeout?: number, message?: string) {
    await browser.wait(ExpectedConditions.visibilityOf(condition), timeout, message);
  }
}
