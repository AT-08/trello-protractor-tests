import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Card {
    titleTextAreaInput = by.css('.list-card-composer-textarea.js-card-title');
    addCardButton = by.css('.js-add-card');

    async createCard(title: string) {
        await CommonActions.setValue(this.titleTextAreaInput, title);
        await CommonActions.waitVisibility(this.addCardButton);
        await CommonActions.click(this.addCardButton);
        await CommonActions.sleep();
    }
}
