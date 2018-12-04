import {Home} from '../pages/home.po';
import {Login} from '../pages/login.po';

describe('Trello\'s Home page testing', () => {
  let page: Home;
  let login: Login;
  const url = 'https://trello.com/';
  const loginButton = 'a[href*="/login?returnUrl=%2F"]';

  beforeEach(() => {
    page = new Home(url);
  });

  it('When user acces trello app he should see the default home page', async () => {
    await page.loadPage();
    expect(await page.getElement(loginButton).isDisplayed()).toBe(true);
  });

  it('When user click on login button he should see the login page', async () => {
    await page.loadPage();
    login = await page.isPageLoginLoaded(loginButton);
    expect(await login.getTitlePage()).toEqual('Log in to Trello');
  });
});
