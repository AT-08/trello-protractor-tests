import {browser, by, element, ElementFinder} from 'protractor';
import {Helper} from '../utils/helper';
import {CommonActions} from '../utils/CommonActions';

export class Dashboardcreation {

    async setDashBoard(dataTable: any) {
        const addBoardButton = element(by.css('a.mod-add'));
        await CommonActions.click(addBoardButton);
        const titleTextInput = element(by.css('.subtle-input'));
        await CommonActions.setValue(titleTextInput, name);
        const backgroundColor = element(by.css('button[title="blue"]'));
        await CommonActions.click(backgroundColor);
        const createDashboardButton = element(by.css('button[type="submit"]'));
        await CommonActions.click(createDashboardButton);
        await Helper.browserWait(element(by.css(`div[title="${name}"]`)), 30000);
        return element(by.css(`div[title="${name}"]`)).isPresent();
    }
}
