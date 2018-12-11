import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';
import {Selectedboard} from './selectedboard.po';

/**
 * This class is the beginning for select of create a board, also can create a team.
 */
export class Dashboard {

    bydashboardResumeButton = by.className('header-btn-text');
    byAddButton = by.css('.quiet-button.js-add-board');
    locatorBoardsButton = by.css('.js-boards-menu');
    db: Dashboardcreation;

    async getMemberInitials() {
        const initialsNameLabel = element(by.css('span.member-initials'));
        await CommonActions.waitVisibility(initialsNameLabel);
        return initialsNameLabel.getText();
    }

    /**
     * This make the creation of the dashboard.
     * @param data { background: string; privacy: string; title: string }
     */
    async createDashBoard(data: any) {
        const plusButton = element(this.locatorBoardsButton);
        await CommonActions.click(plusButton);
        const addBoardButton = element(this.byAddButton);
        await CommonActions.click(addBoardButton);
        this.db = new Dashboardcreation();
        await this.db.setDashBoard(data);
    }

    async selectDashBoard(title: string) {
        const dashBoard = element(by.css(`[class="board-tile-details-name"][title="${title}"]`));
        await CommonActions.click(dashBoard);
        return new Selectedboard();
    }
}
