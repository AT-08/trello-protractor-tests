import {Login} from '../pages/login.po';

describe('Trello\' Login page testing', () => {
  let page: Login;

  beforeEach(() => {
    page = new Login();
  });

  it('When user click on Login button from home page he should see he login page', async () => {
    await page.navigateTo();
    expect(await page.getTitlePage()).toEqual('Log in to Trello');
  });

  it('When user fill his credentials into login page he should see his board page', async () => {
    await page.navigateTo();
    console.log(await page.getCurrentPage());
  });
});
