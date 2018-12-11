import {browser, by, element} from 'protractor';
import {Login} from './login.po';
import {CommonActions} from '../utils/CommonActions';

export class Home {
    URL: string;

    constructor(url: string) {
        this.URL = url;
    }

    async loadPage() {
        return browser.get(this.URL);
    }

    async isPageLoginLoaded(selector: string) {
        const linkButton = element(by.css(selector));
        const loginURL = await linkButton.getAttribute('href');
        await CommonActions.click(linkButton);
        return new Login(loginURL);
    }
}
