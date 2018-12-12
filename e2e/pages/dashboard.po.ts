import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';
import {Selectedboard} from './selectedboard.po';

/**
 * This class is the beginning for select of create a board, also can create a team.
 */
export class Dashboard {

    dashboardResumeButton = by.className('header-btn-text');
    addButton = by.css('.quiet-button.js-add-board');
    boardsButton = by.css('.js-boards-menu');

    createDashboard: Dashboardcreation;

    createTeamTab = by.css('.tab__quiet__ed4jD');
    teamNameInputText = by.css('.js-autofocus.js-display-name');
    descriptionOfTeamTextArea = by.id('org-desc');
    createTeamButton = by.css('.js-save');


    async getMemberInitials() {
        const memberInitials = by.css('span.member-initials');
        await CommonActions.waitVisibility(memberInitials);
        return CommonActions.getText(memberInitials);
    }

    /**
     * This make the creation of the dashboard.
     * @param data { background: string; privacy: string; title: string }
     */
    async createDashBoard(data: any) {
        await CommonActions.click(this.boardsButton);
        await CommonActions.click(this.addButton);
        this.createDashboard = new Dashboardcreation();
        await this.createDashboard.setDashBoard(data);
    }

    async selectDashBoard(title: string) {
        const dashBoard = by.css(`[class="board-tile-details-name"][title="${title}"]`);
        await CommonActions.click(dashBoard);
        return new Selectedboard();
    }

    async createTeam(data: any) {
        await CommonActions.click(this.createTeamTab)
        await CommonActions.setValue(this.teamNameInputText, data.title);
        await CommonActions.setValue(this.descriptionOfTeamTextArea, data.description);
        await CommonActions.click(this.createTeamButton);
    }
}
