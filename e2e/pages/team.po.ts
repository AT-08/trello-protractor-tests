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

    membersTabPane = by.css('[data-tab="members"]');

    settingTabPane = by.css('[data-tab="settings"]');
    changePrivacyButton = by.css('[class="button-link u-text-align-center"]');
    confirmDeleteTeam = by.css('.js-confirm');
    deleteButton = by.css('[class="quiet-button"]');

    sendInvitationButton = by.css('.autocomplete-btn.primary');
    dashboardForm = by.css('.create-board-form');
    private member: Member;

    /**
     * This method create a board when the user is in the team page.
     */
    async createBoardTeam() {
        await CommonActions.click(this.boardsTabPane);
        await CommonActions.click(this.createNewBoardButton);
        await CommonActions.sleep();
        return new Dashboardcreation();
    }

    /**
     * This method invite a member instantiating the member class.
     * @param data Input Data.
     */
    async inviteMember(data: any) {
        await CommonActions.click(this.membersTabPane);
        this.member = new Member();
        await this.member.add(data);
        await CommonActions.waitInvisibilityOf(this.sendInvitationButton);
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
