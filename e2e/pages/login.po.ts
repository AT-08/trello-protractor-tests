import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';
import {CommonActions} from '../utils/CommonActions';
import data from '../utils/environment.json';

export class Login {
    URL: string;

    userTextInput = element(by.css('[name="user"]'));
    passTextInput = element(by.css('[name="password"]'));
    loginButton = element(by.css('[id="login"][type="submit"]'));

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
        await CommonActions.setValue(this.userTextInput, data.user2);
        await CommonActions.setValue(this.passTextInput, data.pass2);
        await CommonActions.click(this.loginButton);
        return new Dashboard();
    }
}
