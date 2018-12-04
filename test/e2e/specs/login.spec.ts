import {Login} from '../pages/login.po';
import {Dashboard} from '../pages/dashboard.po';

describe('Trello\' Login page testing', () => {
  let page: Login;
  let dash: Dashboard;
  const url = 'https://trello.com/login?returnUrl=%2F';

  beforeEach(() => {
    page = new Login(url);
  });

  it('When user type Login URL from login page he should see login page', async () => {
    await page.loadPage();
    expect(await page.getTitlePage()).toEqual('Log in to Trello');
  });

  it('When user click on Login button from login page he should see his boards page', async () => {
    await page.loadPage();
    dash = await page.tryToLogIn();
    expect(await dash.getMemberInitials()).toEqual('NO');
  });
});
