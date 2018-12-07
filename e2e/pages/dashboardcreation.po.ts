import {browser, by, element, ElementFinder} from 'protractor';
import {Helper} from '../utils/helper';
import {CommonActions} from '../utils/CommonActions';

export class Dashboardcreation {
    titleTextInput = element(by.css('.subtle-input'));
    createDashboardButton = element(by.css('button[type="submit"]'));
    // selectPrivacyButton = element(by.css('[class='subtle-chooser-trigger unstyled-button vis-chooser-trigger']'))

    async setDashBoard(data: { background: string; privacy: string; title: string }) {
        const fillProjectInformation = {
            title: () => this.setdashtitle(data.title),
            background: () => this.setbackground(data.background),
            privacy: () => this.setprivacy(data.privacy),
        };
        Object.keys(data).forEach((key) => {
            fillProjectInformation[key].call();
        });
        await CommonActions.click(this.createDashboardButton);
    }

    private async setdashtitle(title: string) {
        await CommonActions.setValue(this.titleTextInput, title);
    }

    private async setbackground(background: string) {
        const backgroundColor = element(by.css(`button[title="${background}"]`));
        await CommonActions.click(backgroundColor)
    }

    private setprivacy(privacy: string) {
        const backgroundColor = element(by.css(`button[title="${background}"]`));
        return undefined;
    }
}
