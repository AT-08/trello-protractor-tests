import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';
import {CommonActions} from '../utils/CommonActions';
import data from '../utils/environment.json';

export class Login {
    URL: string;

    locatorUserTextInput = by.css('[name="user"]');
    locatorPassTextInput = by.css('[name="password"]');
    locatorLoginButton = by.css('[id="login"][type="submit"]');

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

    async LogInWithUser() {
        await CommonActions.setValue(element(this.locatorUserTextInput), data.user2);
        await CommonActions.setValue(element(this.locatorPassTextInput), data.pass2);
        await CommonActions.click(element(this.locatorLoginButton));
        return new Dashboard();
    }
}
