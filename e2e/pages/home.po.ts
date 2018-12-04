import {browser, by, element} from 'protractor';
import {Login} from './login.po';

export class Home {
  URL: string;

  constructor(url: string) {
    this.URL = url;
  }

  async loadPage() {
    return await browser.get(this.URL);
  }

  getElement(selector: string) {
    return element(by.css(selector));
  }

  async isPageLoginLoaded(selector: string) {
    const loginURL = await element(by.css(selector)).getAttribute('href');
    await element(by.css(selector)).click();
    return new Login(`${this.URL}${loginURL}`);
  }
}
