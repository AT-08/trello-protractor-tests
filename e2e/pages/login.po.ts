import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';
import {CommonActions} from '../utils/CommonActions';

export class Login {
    URL: string;

    userTextInput = by.css('[name="user"]');
    passwordTextInput = by.css('[name="password"]');
    loginButton = by.css('[id="login"][type="submit"]');

    constructor(url: string) {
        this.URL = url;
    }

    async loadPage() {
        return browser.get(this.URL);
    }

    async getTitlePage() {
        return CommonActions.getText(by.css('h1'));
    }

    /**
     * This method log in with an specified user.
     * @param user Input.
     */
    async LogInWithUser(user) {
        await CommonActions.setValue(this.userTextInput, user.user);
        await CommonActions.setValue(this.passwordTextInput, user.pass);
        await CommonActions.click(this.loginButton);
        return new Dashboard();
    }
}
