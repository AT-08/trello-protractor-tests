import {by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Selectedboard {

    locatorShowMenu = by.css('.board-header-btn.mod-show-menu');
    locatorMenuMore = by.css('.board-menu-navigation-item-link.js-open-more');
    locatorMenuMoreCloseBoard = by.css('.board-menu-navigation-item-link.js-close-board');
    locatorConfirmCloseBoard = by.css('.js-confirm.full.negate');
    locatorPermanentlyDeleteBoardLink = by.css('.quiet.js-delete');

    locatorAddMember = by.css('.icon-add-member');
    locatorFindInputText = by.css('.autocomplete-input-container');
    locatorInvitationMessageInput = by.css('.js-invitation-message');
    locatorSendInvitationButton = by.css('.autocomplete-btn.primary');

    locatorAddListButton = by.css('.open-add-list.js-open-add-list');
    locatorListNameInput = by.css('.list-name-input');
    locatorSaveListNameButton = by.css('.js-save-edit');

    async deleteDashBoard() {
        const itemMore = element(this.locatorMenuMore);
        await CommonActions.click(itemMore);
        const itemCloseBoard = element(this.locatorMenuMoreCloseBoard);
        await CommonActions.click(itemCloseBoard);
        const itemConfirmCloseBoard = element(this.locatorConfirmCloseBoard);
        await CommonActions.click(itemConfirmCloseBoard);
        const permanentlyDeleteBoard = element(this.locatorPermanentlyDeleteBoardLink);
        await CommonActions.click(permanentlyDeleteBoard);
        await CommonActions.click(itemConfirmCloseBoard);
    }

    async addMember(user, description: string) {
        const addMemberButton = element(this.locatorAddMember);
        await CommonActions.click(addMemberButton);
        const findMemberInputText = element(this.locatorFindInputText);
        await CommonActions.setValue(findMemberInputText, user.user);
        const foundName = element(by.cssContainingText('.full-name', user.user));
        await CommonActions.click(foundName);
        const invitationMessageInput = element(this.locatorInvitationMessageInput);
        await CommonActions.setValue(invitationMessageInput, description);
        const sendInvitationButton = element(this.locatorSendInvitationButton);
        await CommonActions.click(sendInvitationButton);
    }

    async addList(listTitle: string) {
        const addListButton = element(this.locatorAddListButton);
        await CommonActions.click(addListButton);
        const listNameInput = element(this.locatorListNameInput);
        await CommonActions.setValue(listNameInput, listTitle);
        const saveListNamebutton = element(this.locatorSaveListNameButton);
        await CommonActions.click(saveListNamebutton);
    }
}
