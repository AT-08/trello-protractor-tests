import {browser, by, element} from 'protractor';
import {Dashboard} from './dashboard.po';

export class Login {
     navigateTo() {
       browser.waitForAngularEnabled(false);
       return browser.get('https://trello.com/login?returnUrl=%2F');
     }

     getTitlePage() {
       return element(by.css('h1')).getText();
     }

     async tryToLogIn() {
       await element(by.css('[name="user"]')).sendKeys('nestor.otondo@fundacion-jala.org');
       await element(by.css('[name="password"]')).sendKeys('Zeus2Deus');
       await element(by.css('#login')).click();
       return new Dashboard();
     }
 }
