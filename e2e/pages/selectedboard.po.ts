import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

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

    async deleteDashBoard() {
        await CommonActions.click(this.menuMore);
        await CommonActions.click(this.menuMoreCloseBoard);
        await CommonActions.click(this.confirmCloseBoard);
        await CommonActions.click(this.permanentlyDeleteBoardLink);
        await CommonActions.click(this.confirmCloseBoard);
    }

    async addMember(user, description: string) {
        await CommonActions.click(this.addMemberButton);
        await CommonActions.setValue(this.findMemberInputText, user.user);
        const memberContainer = by.cssContainingText('.full-name', user.user);
        await CommonActions.waitVisibility(memberContainer);
        await CommonActions.click(memberContainer);
        await CommonActions.setValue(this.invitationMessageInput, description);
        await CommonActions.click(this.sendInvitationButton);
    }

    async addList(listTitle: string) {
        await CommonActions.click(this.addListButton);
        await CommonActions.setValue(this.listNameInput, listTitle);
        await CommonActions.click(this.saveListNameButton);
    }
}
