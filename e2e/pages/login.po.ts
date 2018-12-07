import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {Helper} from '../utils/helper';
import {CommonActions} from '../utils/CommonActions';

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

    async LogInWithUser() {
        const userTextInput = element(by.css('[name="user"]'));
        await CommonActions.setValue(userTextInput, 'rocku3');

        const passTextInput = element(by.css('[name="password"]'));
        await CommonActions.setValue(passTextInput, 'Pepelink21');

        const loginButton = element(by.css('#login'));
        await CommonActions.click(loginButton);
        return new Dashboard();
    }
}
