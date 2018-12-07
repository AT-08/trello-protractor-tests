import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    const url = 'https://trello.com/login?returnUrl=%2F';
    const titleExpected = 'Test create new board';

    beforeEach(() => {
        login = new Login(url);
    });

    it('When user logged in his dashboard, he can create new board', async () => {
        const data = {
            background: 'green',
            privacy: 'private',
            title: 'Apepetoro',
        };
        await login.loadPage();
        board = await login.LogInWithUser();
        await board.createDashBoard(data);
        // expect(await board.getMemberInitials()).toEqual('R');
        // expect(await board.createDashBoard(titleExpected)).toBe(true);
    });
});
