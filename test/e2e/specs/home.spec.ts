import {Home} from "../pages/home.po";

describe('Trello\'s Home page testing', () => {
  let page: Home;
  let homeURL = 'https://trello.com/';
  let logInURL = 'login?returnUrl=%2F';
  let loginButton = `a[href*="/${logInURL}"]`;

  beforeEach(() => {
    page = new Home();
  });

  it('When user acces trello app he should see the default home page', async () => {
    await page.navigateTo();
    expect(await page.getButton(loginButton).isDisplayed()).toBe(true);
  });

  it('When user click on login button he should see the login page', async () => {
    await page.navigateTo();
    await page.getButton(loginButton).click();
    expect(await page.getCurrentPage()).toContain(`${homeURL}${logInURL}`);
  });
});
