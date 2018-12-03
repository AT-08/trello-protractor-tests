import {browser, by, element} from 'protractor';

 export class Login {
     navigateTo() {
       browser.waitForAngularEnabled(false);
       return browser.get('https://trello.com/login?returnUrl=%2F');
     }

     getTitlePage() {
       return element(by.css('h1')).getText();
     }

     getCurrentPage() {
       return browser.getCurrentUrl();
     }
 }
