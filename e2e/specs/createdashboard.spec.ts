import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import {Selectedboard} from '../pages/selectedboard.po';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
    });

    it('its possible delelte a board', async () => {
        const data = {
            title: 'Apepetoro',
            background: 'green',
            privacy: 'public',
        };
        await login.loadPage();
        board = await login.LogInWithUser();
        await board.createDashBoard(data);
    });
});
