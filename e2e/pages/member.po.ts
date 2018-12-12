import {CommonActions} from '../utils/CommonActions';
import {by} from 'protractor';

export class Member {
    addMemberButton = by.css('.icon-add-member');
    findMemberInputText = by.css('.autocomplete-input');
    invitationMessageInput = by.css('.js-invitation-message');
    sendInvitationButton = by.css('.autocomplete-btn.primary');

    async add(data: any) {
        await this.fillDataMember(data);
        await CommonActions.click(this.sendInvitationButton);
    }

    private fillDataMember(data: any) {
        const fillProjectInformation = {
            title: () => this.selectUser(data.title),
            description: () => this.setDescription(data.description),
        };
        return Promise.all(Object.keys(data).map(async (key) => {
            return fillProjectInformation[key].call();
        }));
    }

    async selectUser(user) {
        await CommonActions.setValue(this.findMemberInputText, user.user);
        const memberContainer = by.cssContainingText('.full-name', user.user);
        await CommonActions.waitVisibility(memberContainer);
        await CommonActions.click(memberContainer);
    }

    async setDescription(description) {
        await CommonActions.setValue(this.invitationMessageInput, description);

    }
}