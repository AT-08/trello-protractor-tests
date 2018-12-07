import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Dashboard {

    titleTextInput = element(by.css('.subtle-input'));
    backgroundColor = element(by.css('button[title="blue"]'));
    createDashboardButton = element(by.css('button[type="submit"]'));
    dashboardResumeButton = element(by.className('header-btn-text'));

    private _dashtitle: string;
    private _background: string;
    private _privacy: string;

    async getMemberInitials() {
        const initialsNameLabel = element(by.css('span.member-initials'));
        await CommonActions.waitVisibility(initialsNameLabel);
        return await initialsNameLabel.getText();
    }

    /**
     * Test.
     * @param data { background: string; privacy: string; title: string }
     */
    async createDashBoard(data: any) {
        const fillProjectInformation = {
            title: () => this.setdashtitle(data.title),
            background: () => this.setbackground(data.background),
            privacy: () => this.setprivacy(data.privacy),
        };
        Object.keys(data).forEach((key) => {
            fillProjectInformation[key].call();
        });
        const addBoardButton = element(by.css('a.mod-add'));
        await CommonActions.click(addBoardButton);
        await CommonActions.setValue(this.titleTextInput, fillProjectInformation.title());
        await CommonActions.click(this.backgroundColor);
        await CommonActions.click(this.createDashboardButton);
        // const boardTitleTextInput = element(by.css(`div[title="${data}"]`));
        // await CommonActions.waitVisibility(boardTitleTextInput);
        // return boardTitleTextInput.isPresent();
    }

    setdashtitle(value: string) {
        this._dashtitle = value;
        return this._dashtitle;
    }

    setbackground(value: string) {
        this._background = value;
        return this._background;
    }

    setprivacy(value: string) {
        this._privacy = value;
        return this._privacy
    }
}
