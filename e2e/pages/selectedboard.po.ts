import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';
import {Member} from './member.po';

export class Selectedboard {

    showMenu = by.css('.board-header-btn.mod-show-menu');
    menuMore = by.css('.js-open-more');
    menuMoreCloseBoard = by.css('.js-close-board')
    confirmCloseBoard = by.css('.js-confirm.full.negate');
    permanentlyDeleteBoardLink = by.css('.quiet.js-delete');

    addMemberButton = by.css('.icon-add-member');
    findMemberInputText = by.css('.autocomplete-input');
    invitationMessageInput = by.css('.js-invitation-message');
    sendInvitationButton = by.css('.autocomplete-btn.primary');

    addListButton = by.css('.open-add-list.js-open-add-list');
    listNameInput = by.css('.list-name-input');
    saveListNameButton = by.css('.js-save-edit');
    private member: Member;

    async deleteDashBoard() {
        await CommonActions.click(this.menuMore);
        await CommonActions.click(this.menuMoreCloseBoard);
        await CommonActions.click(this.confirmCloseBoard);
        await CommonActions.click(this.permanentlyDeleteBoardLink);
        await CommonActions.click(this.confirmCloseBoard);
    }

    async addMember(data: any) {
        await CommonActions.click(this.addMemberButton);
        this.member = new Member();
        await this.addMember(data)

    }

    async addList(listTitle: string) {
        await CommonActions.click(this.addListButton);
        await CommonActions.setValue(this.listNameInput, listTitle);
        await CommonActions.click(this.saveListNameButton);
    }
}
