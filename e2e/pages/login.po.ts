import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';

export class Login {
  URL: string;
  user: string = 'nestor.otondo@fundacion-jala.org';
  password: string = 'Zeus2Deus';

  constructor(url: string) {
    this.URL = url;
  }

  async loadPage() {
    return browser.get(this.URL);
  }

  async getTitlePage() {
    await Helper.browserWait(element(by.css('h1')), 10000);
    return element(by.css('h1')).getText();
  }

  async tryToLogIn() {
    await element(by.css('[name="user"]')).sendKeys(this.user);
    await element(by.css('[name="password"]')).sendKeys(this.password);
    await element(by.css('#login')).click();
    return new Dashboard();
  }
}
