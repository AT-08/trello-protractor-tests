import {browser, by, element, ExpectedConditions} from 'protractor';

import {Helper} from '../utils/helper';

export class Dashboard {
    loadPage() {
        return browser.get('https://trello.com/nestorotondo/boards');
    }

    async getMemberInitials() {
        await Helper.browserWait(element(by.css('span.member-initials')), 30000);
        return element(by.css('span.member-initials')).getText();
    }

    async tryToCreateNewBoard(name: string) {
        await browser.wait(ExpectedConditions.visibilityOf(by.css('a.mod-add')), 30000)
        await element(by.css('a.mod-add')).click();
        await element(by.css('.subtle-input')).sendKeys(name);
        await element(by.css('button[title="blue"]')).click();
        await element(by.css('button[type="submit"]')).click();
        await Helper.browserWait(element(by.css(`div[title="${name}"]`)), 30000);
        return element(by.css(`div[title="${name}"]`)).isPresent();
    }
}
