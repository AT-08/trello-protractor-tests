import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';
import {Member} from './member.po';

/**
 * This is the page object of a team page.
 */
export class Team {
    boardsTabPane = by.css('[data-tab="boards"]');
    createNewBoardButton = by.css('.mod-add');

    membersTabPane = by.css('[data-tab="memgbers"]');

    settingTabPane = by.css('[data-tab="settings"]');
    changePrivacyButton = by.css('[class="button-link u-text-align-center"]')
    confirmDeleteTeam = by.css('.js-confirm');
    deleteButton = by.css('[class="quiet-button"]');

    dashBoardCreation: Dashboardcreation;
    private member: Member;

    /**
     * This method create a board when the user is in the team page.
     * @param data Input Data.
     */
    async createBoardTeam(data: any) {
        await CommonActions.click(this.boardsTabPane);
        await CommonActions.click(this.createNewBoardButton);
        this.dashBoardCreation = new Dashboardcreation();
        await this.dashBoardCreation.setDashBoard(data);
    }

    /**
     * This method invite a member instantiating the member class.
     * @param data Input Data.
     */
    async inviteMember(data: any) {
        await CommonActions.click(this.membersTabPane);
        this.member = new Member();
        await this.member.add(data)
    }

    /**
     * This method changes the privacy of the Team.
     * @param privacy Input privacy.
     */
    async changePrivacy(privacy: string) {
        await CommonActions.click(this.settingTabPane);
        await CommonActions.click(this.changePrivacyButton);
        const privacyLocator = by.xpath(`//span[@class="icon-sm icon-${privacy}"]/parent::a`);
        await CommonActions.click(privacyLocator);
    }

    /**
     * This method delete permanently a team.
     */
    async deleteTeam() {
        await CommonActions.click(this.settingTabPane);
        await CommonActions.click(this.deleteButton);
        await CommonActions.click(this.confirmDeleteTeam);
    }
}