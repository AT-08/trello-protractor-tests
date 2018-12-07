import {browser, by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Dashboard {

    titleTextInput = element(by.css('.subtle-input'));
    backgroundColor = element(by.css('button[title="blue"]'));
    createDashboardButton = element(by.css('button[type="submit"]'));
    dashboardResumeButton = element(by.className('header-btn-text'));

    async getMemberInitials() {
        const initialsNameLabel = element(by.css('span.member-initials'));
        await CommonActions.waitVisibility(initialsNameLabel);
        return await initialsNameLabel.getText();
    }

    async createDashBoard(data: any) {
        const fillProjectInformation = {
            title: () => this.setProjectNameTextField(data.name),
            background: () => this.setAccountItem(data.account),
            privacy: () => this.setProjectPrivacyRadio(data.privacy),
        };
        Object.keys(data).forEach(key => {
            fillProjectInformation[key].call();
        });
        // this.clickCreateSubmit();
        const addBoardButton = element(by.css('a.mod-add'));
        await CommonActions.click(addBoardButton);
        await CommonActions.setValue(this.titleTextInput, 'title');
        await CommonActions.click(this.backgroundColor);
        await CommonActions.click(this.createDashboardButton);
        // const boardTitleTextInput = element(by.css(`div[title="${data}"]`));
        // await CommonActions.waitVisibility(boardTitleTextInput);
        // return boardTitleTextInput.isPresent();
        return new Project();
    }
}
