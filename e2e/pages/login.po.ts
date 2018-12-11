import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {CommonActions} from '../utils/CommonActions';

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

    /**
     * This method log in with an specified user.
     * @param user Input.
     */
    async LogInWithUser(user) {
        await CommonActions.setValue(element(this.locatorUserTextInput), user.user);
        await CommonActions.setValue(element(this.locatorPassTextInput), user.pass);
        await CommonActions.click(element(this.locatorLoginButton));
        return new Dashboard();
    }
}
