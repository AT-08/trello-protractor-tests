import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
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
        const titlePage = element(by.css('h1'));
        return CommonActions.getText(titlePage);
    }

    async LogInWithUser() {
        await CommonActions.setValue(element(this.locatorUserTextInput), data.user2);
        await CommonActions.setValue(element(this.locatorPassTextInput), data.pass2);
        await CommonActions.click(element(this.locatorLoginButton));
        return new Dashboard();
    }
}
