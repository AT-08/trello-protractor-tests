import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

/**
 * This class makes the creation of a board.
 */
export class Dashboardcreation {
    locatorDashboardButton = by.css('.create-board-form.button.primary');
    locatorTitleTextInput = by.css('.subtle-input');
    locatorPrivacyButton = by.css('.subtle-chooser-trigger.unstyled-button vis-chooser-trigger');

    /**
     * This set the data for fill the dashboard form and create the button.
     * @param data { background: string; privacy: string; title: string }
     */
    async setDashBoard(data: any) {
        await this.fillData(data);
        const createDashboardButton = element(this.locatorDashboardButton);
        await CommonActions.submit(createDashboardButton);
    }

    /**
     * Make a map for fill the dashboard.
     * @param data { background: string; privacy: string; title: string }
     */
    async fillData(data: any) {
        const fillProjectInformation = {
            title: () => this.setdashtitle(data.title),
            background: () => this.setbackground(data.background),
            privacy: () => this.setprivacy(data.privacy),
        };
        await Promise.all(Object.keys(data).map(async (key) => {
            await fillProjectInformation[key].call();
        }));
    }

    /**
     * This set the dashboard title.
     * @param title Input.
     */
    private async setdashtitle(title: string) {
        const titleTextInput = element(this.locatorTitleTextInput);
        await CommonActions.setValue(titleTextInput, title);
    }

    /**
     * This set the color of the background.
     * @param background Color input.
     */
    private async setbackground(background: string) {
        const backgroundColor = element(by.css(`button[title="${background}"]`));
        await CommonActions.click(backgroundColor)
    }

    /**
     * This set the privacy of the dashboard.
     * @param privacy Input.
     */
    private async setprivacy(privacy: string) {
        const privacyButton = element(this.locatorPrivacyButton);
        await CommonActions.click(privacyButton);
        const selectPrivacy = element(by.xpath(`//span[@class="icon-sm icon-${privacy}"]/parent::a`));
        await CommonActions.click(selectPrivacy);
    }
}
