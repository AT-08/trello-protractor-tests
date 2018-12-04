import {Login} from '../pages/login.po';
import {Dashboard} from '../pages/dashboard.po';

describe('Trello\' Login page testing', () => {
  let page: Login;
  let dash: Dashboard;

  beforeEach(() => {
    page = new Login();
  });

  it('When user type Login URL from login page he should see login page', async () => {
    await page.navigateTo();
    expect(await page.getTitlePage()).toEqual('Log in to Trello');
  });

  it('When user click on Login button from login page he should see his boards page', async () => {
    await page.navigateTo();
    dash = await page.tryToLogIn();
    expect(await dash.getMemberInitials()).toEqual('NO');
    // console.log('url: ', await page.getCurrentPage());
    // console.log('url: ', await page.getCurrentPage());
    // expect(await page.isLoggedIn()).toBe(true);
  });
});
