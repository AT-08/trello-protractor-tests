import {browser, by, element, promise} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';
import data from '../utils/environment.json';

export class Login {
    URL: string;

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
        await element(by.css('[name="user"]')).sendKeys(data.user1);
        await element(by.css('[name="password"]')).sendKeys(data.pass1);
        await element(by.css('#login')).click();
        return new Dashboard();
    }
}
