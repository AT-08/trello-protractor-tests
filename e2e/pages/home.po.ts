import {browser, by, element} from 'protractor';
import {Login} from './login.po';
import {Helper} from '../utils/helper';

export class Home {
  URL: string;

  constructor(url: string) {
    this.URL = url;
  }

  async loadPage() {
    return browser.get(this.URL);
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  async isPageLoginLoaded(selector: string) {
    Helper.browserWait(element(by.css(selector)), 5000);
    const loginURL = await element(by.css(selector)).getAttribute('href');
    await element(by.css(selector)).click();
    return new Login(loginURL);
  }
}
