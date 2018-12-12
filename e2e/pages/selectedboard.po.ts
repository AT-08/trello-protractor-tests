import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Selectedboard {

    showMenu = by.css('.board-header-btn.mod-show-menu');
    menuMore = by.css('.js-open-more');
    menuMoreCloseBoard = by.css('.js-close-board')
    confirmCloseBoard = by.css('.js-confirm.full.negate');
    permanentlyDeleteBoardLink = by.css('.quiet.js-delete');

    async deleteDashBoard() {
        await CommonActions.click(this.menuMore);
        await CommonActions.click(this.menuMoreCloseBoard);
        await CommonActions.click(this.confirmCloseBoard);
        await CommonActions.click(this.permanentlyDeleteBoardLink);
        await CommonActions.click(this.confirmCloseBoard);
    }

}
