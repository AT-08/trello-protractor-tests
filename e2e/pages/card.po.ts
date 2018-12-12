import {by} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Card {
    URL: string;

    locatorAddAnotherCardLink = by.css('.open-card-composer.js-open-card-composer');
    locatorTitleTextAreaInput = by.css('.list-card-composer-textarea.js-card-title');
    locatorAddCardButton = by.css('.js-add-card');

    async createCard(title: string) {

        await CommonActions.setValue(this.locatorTitleTextAreaInput, title);
        await CommonActions.waitVisibility(this.locatorAddCardButton);
        await CommonActions.click(this.locatorAddCardButton);
    }
}
