import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Member} from './member.po';
import {Card} from './card.po';

/**
 * This class is the Page object of the page after selecting a board.
 */
export class Selectedboard {

    showMenu = by.css('.board-header-btn.mod-show-menu');
    menuMore = by.css('.js-open-more');
    menuMoreCloseBoard = by.css('.js-close-board');
    confirmCloseBoard = by.css('.js-confirm.full.negate');
    permanentlyDeleteBoardLink = by.css('.quiet.js-delete');
    addAnotherCardLink = by.css('.open-card-composer.js-open-card-composer');
    addMemberButton = by.css('.icon-add-member');

    addListButton = by.css('.open-add-list.js-open-add-list');
    listNameInput = by.css('.list-name-input');
    saveListNameButton = by.css('.js-save-edit');
    private member: Member;

    /**
     * This method delete permanently the respective dashboard.
     */
    async deleteDashBoard() {
        await CommonActions.click(this.menuMore);
        await CommonActions.click(this.menuMoreCloseBoard);
        await CommonActions.click(this.confirmCloseBoard);
        await CommonActions.click(this.permanentlyDeleteBoardLink);
        await CommonActions.click(this.confirmCloseBoard);
    }

    /**
     * This method invite a member to the current dashboard.
     * @param data Input information.
     */
    async addMember(data: any) {
        await CommonActions.click(this.addMemberButton);
        this.member = new Member();
        await this.member.add(data);
    }

    /**
     * This method add a list to the current dashboard.
     * @param listTitle Name of the list.
     */
    async addList(listTitle: string) {
        await CommonActions.setValue(this.listNameInput, listTitle);
        await CommonActions.click(this.saveListNameButton);
    }

    async selectedCard() {
        await CommonActions.click(this.addAnotherCardLink);
        return new Card();
    }
}
