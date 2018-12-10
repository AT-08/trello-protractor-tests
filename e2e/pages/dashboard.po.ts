import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';

/**
 * This class is the beginning for select of create a board, also can create a team.
 */
export class Dashboard {

    bydashboardResumeButton = by.className('header-btn-text');
    byAddButton = by.css('a.mod-add');

    private db: Dashboardcreation;

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
        await CommonActions.click(element(this.byAddButton));
        this.db = new Dashboardcreation();
        await this.db.setDashBoard(data);
    }
}
