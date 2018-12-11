import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import {Selectedboard} from '../pages/selectedboard.po';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    let selectedBoard: Selectedboard;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
    });

    it('When user logged in his dashboard, he can create new board', async () => {
        board = await login.LogInWithUser();
        selectedBoard = await board.selectDashBoard('test N');
        await selectedBoard.deleteDashBoard();
    });
});
