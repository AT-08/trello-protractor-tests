import {CommonActions} from '../utils/CommonActions';
import {by} from 'protractor';

/**
 * This is the Page Object for the members form.
 */
export class Member {
    addMemberButton = by.css('.icon-add-member');
    findMemberInputText = by.css('.autocomplete-input');
    invitationMessageInput = by.css('.js-invitation-message');
    sendInvitationButton = by.css('.autocomplete-btn.primary');

    /**
     * This method add/invite a member.
     * @param data
     */
    async add(data: any) {
        await this.fillDataMember(data);
        await CommonActions.click(this.sendInvitationButton);
    }

    /**
     * This method fills the members form with the available data.
     * @param data Input project data.
     */
    private fillDataMember(data: any) {
        const fillProjectInformation = {
            title: () => this.selectUser(data.title),
            description: () => this.setDescription(data.description),
        };
        return Promise.all(Object.keys(data).map(async (key) => {
            return fillProjectInformation[key].call();
        }));
    }

    /**
     * This method selects a user from the search list.
     * @param user Specific user.
     */
    async selectUser(user) {
        await CommonActions.setValue(this.findMemberInputText, user.user);
        const memberContainer = by.cssContainingText('.full-name', user.user);
        await CommonActions.waitVisibility(memberContainer);
        await CommonActions.click(memberContainer);
    }

    /**
     * This method set a optional description when a owner tries to invite a member to a dashboard.
     * @param description Input description.
     */
    async setDescription(description) {
        await CommonActions.setValue(this.invitationMessageInput, description);
    }
}
