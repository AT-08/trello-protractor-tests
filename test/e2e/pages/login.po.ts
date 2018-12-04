import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';

export class Login {
  URL: string;

  constructor(url: string) {
    this.URL = url;
  }

  async loadPage() {
    return await browser.get(this.URL);
  }

  async getTitlePage() {
    await Helper.browserWait(element(by.css('h1')), 10000);
    return await element(by.css('h1')).getText();
  }

  async tryToLogIn() {
    await element(by.css('[name="user"]')).sendKeys('nestor.otondo@fundacion-jala.org');
    await element(by.css('[name="password"]')).sendKeys('Zeus2Deus');
    await element(by.css('#login')).click();
    return new Dashboard();
  }
}
