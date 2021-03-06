import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';
import {Dashboardcreation} from '../pages/dashboardcreation.po';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    let createDashBoard: Dashboardcreation;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
    });

    it('When user logged in his dashboard, he can create new board', async () => {
        const data = {
            title: 'HiTest',
            background: 'green',
            privacy: 'public',
        };
        board = await login.LogInWithUser(user.member1);
        createDashBoard = await board.createDashBoard();
        await createDashBoard.setDashBoard(data);
    });
});
