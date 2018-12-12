import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';
import {Member} from './member.po';

export class Team {
    boardsTabPane = by.css('[data-tab="boards"]');
    createNewBoardButton = by.css('.mod-add');

    membersTabPane = by.css('[data-tab="memgbers"]');

    settingTabPane = by.css('[data-tab="settings"]');
    changePrivacyButton = by.css('[class="button-link u-text-align-center"]')

    dashBoardCreation: Dashboardcreation;
    private member: Member;

    async createBoardTeam(data: any) {
        await CommonActions.click(this.boardsTabPane);
        await CommonActions.click(this.createNewBoardButton);
        this.dashBoardCreation = new Dashboardcreation();
        await this.dashBoardCreation.setDashBoard(data);
    }

    async inviteMember(data: any) {
        await CommonActions.click(this.membersTabPane);
        this.member = new Member();
        await this.member.add(data)
    }

    async changePrivacy(privacy: string) {
        await CommonActions.click(this.settingTabPane);
        await CommonActions.click(this.changePrivacyButton);
        const privacyLocator = by.xpath(`//span[@class="icon-sm icon-${privacy}"]/parent::a`);
        await CommonActions.click(privacyLocator);
    }
}