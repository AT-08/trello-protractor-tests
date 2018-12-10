import {browser, by, element} from 'protractor';
import {CommonActions} from '../utils/CommonActions';

export class Card {
    URL: string;

    locatorAddAnotherCardLink = by.css('[class="class="js-add-another-card"]');
    locatorTitleTextAreaInput = by.css('[class="list-card-composer-textarea js-card-title"]');
    locatorAddCardButton = by.css('[class="primary confirm mod-compact js-add-card"][value="Add Card"]');

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
