import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Dashboardcreation} from './dashboardcreation.po';

export class Selectedboard {

    locatorShowMenu = by.css('.board-header-btn.mod-show-menu');
    locatorMenu_More = by.css('.board-menu-navigation-item-link.js-open-more');
    locatorMenu_More_CloseBoard = by.css('.board-menu-navigation-item-link.js-close-board')
    locatorConfirmCloseBoard = by.css('.js-confirm.full.negate');
    locatorPermanentlyDeleteBoardLink = by.css('.quiet.js-delete');
    private db: Dashboardcreation;

    async deleteDashBoard() {
        const itemMore = element(this.locatorMenu_More);
        await CommonActions.click(itemMore);
        const itemCloseBoard = element(this.locatorMenu_More_CloseBoard);
        await CommonActions.click(itemCloseBoard);
        const itemConfirmCloseBoard = element(this.locatorConfirmCloseBoard);
        await CommonActions.click(itemConfirmCloseBoard);
        const permanentlyDeleteBoard = element(this.locatorPermanentlyDeleteBoardLink);
        await CommonActions.click(permanentlyDeleteBoard);
        await CommonActions.click(itemConfirmCloseBoard);
    }

}
