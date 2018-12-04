import {browser, by, element, ExpectedConditions} from 'protractor';

export class Dashboard {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://trello.com/nestorotondo/boards');
  }

  async getMemberInitials() {
    await browser.wait(ExpectedConditions.visibilityOf(element(by.css('span.member-initials'))), 30000);
    return await element(by.css('span.member-initials')).getText();
  }
}
