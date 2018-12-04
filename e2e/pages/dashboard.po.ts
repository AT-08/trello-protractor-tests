import {browser, by, element} from 'protractor';

import {Helper} from '../utils/helper';

export class Dashboard {
  navigateTo() {
    return browser.get('https://trello.com/nestorotondo/boards');
  }

  async getMemberInitials() {
    await Helper.browserWait(element(by.css('span.member-initials')), 30000);
    return element(by.css('span.member-initials')).getText();
  }
}
