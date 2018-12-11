import {browser, by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Card {
    URL: string;

    locatorAddAnotherCardLink = by.css('.js-add-another-card');
    locatorTitleTextAreaInput = by.css('.list-card-composer-textarea js-card-title');
    locatorAddCardButton = by.css('.primary confirm mod-compact js-add-card');

    constructor(url: string) {
        this.URL = url;
    }

    async loadPage() {
        return browser.get(this.URL);
    }

    async createCard(title: string) {
        await CommonActions.click(element(this.locatorAddAnotherCardLink));
        await CommonActions.setValue(element(this.locatorTitleTextAreaInput), title);
        await CommonActions.click(element(this.locatorAddCardButton));
      }
}
