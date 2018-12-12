import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
    });

    it('When user logged in his dashboard, he can create new board', async () => {
        const data = {
            title: 'Apublic',
            background: 'pink',
            privacy: 'public',
        };
        board = await login.LogInWithUser(user.owner1);
        await board.createDashBoard(data);
    });
});
