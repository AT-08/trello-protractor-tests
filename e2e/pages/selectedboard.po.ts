import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';

export class Selectedboard {

    locatorShowMenu = by.css('.board-header-btn.mod-show-menu');
    locatorMenu_More = by.css('.board-menu-navigation-item-link.js-open-more');

    private db: Dashboardcreation;

    async deleteDashBoard() {
        // const showMenuLink = element(this.locatorShowMenu);
        // await CommonActions.click(showMenuLink);
        const itemMore = element(this.locatorMenu_More);
        await CommonActions.click(itemMore);
    }

}
