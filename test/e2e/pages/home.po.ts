import {browser, by, element} from "protractor";

export class Home {
  navigateTo() {
    browser.waitForAngularEnabled(false);
    return browser.get('https://trello.com/');
  }

  getButton(name: string) {
    return element(by.css(name));
  }

  getCurrentPage() {
    return browser.getCurrentUrl();
  }
}
