import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

/**
 * This class makes the creation of a board.
 */
export class Dashboardcreation {

    titleTextField = by.css('.subtle-input');
    privacySelect = by.css('.subtle-chooser-trigger.unstyled-button.vis-chooser-trigger');
    createBoardButton = by.css('.create-board-form button.primary');

    /**
     * This set the data for fill the dashboard form and create the button.
     * @param data { background: string; privacy: string; title: string }
     */
    async setDashBoard(data: any) {
        await this.fillData(data);
        await CommonActions.click(element(this.createBoardButton));
    }

    /**
     * Make a map for fill the dashboard.
     * @param data { background: string; privacy: string; title: string }
     */
    async fillData(data: any) {
        const fillProjectInformation = {
            title: () => this.setTitle(data.title),
            background: () => this.selectBackground(data.background),
            privacy: () => this.selectPrivacy(data.privacy),
        };
        return Promise.all(Object.keys(data).map(async (key) => {
            return fillProjectInformation[key].call();
        }));
    }

    /**
     * This set the dashboard title.
     * @param title Input.
     */
    private async setTitle(title: string) {
        await CommonActions.setValue(element(this.titleTextField), title);
    }

    /**
     * This set the color of the background.
     * @param background Color input.
     */
    private async selectBackground(background: string) {
        await CommonActions.click(element(by.css(`button[title="${background}"]`)))
    }

    /**
     * This set the privacy of the dashboard.
     * @param privacy Input.
     */
    private async selectPrivacy(privacy: string) {
        await CommonActions.click(element(this.privacySelect));
        await CommonActions.click(element(by.css(`.icon-${privacy}`)));
        await CommonActions.click(element(by.css('.js-confirm')));
    }
}
