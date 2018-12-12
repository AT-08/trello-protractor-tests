import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';
import {Team} from '../pages/team.po';
import {Dashboardcreation} from '../pages/dashboardcreation.po';

describe('Add dashboard to a Team', () => {
    let board: Dashboard;
    let login: Login;
    let team: Team;
    let createDashBoard: Dashboardcreation;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.member1);
        team = await board.selectTeam('AT08');
    });
    it('I should add a dashboard to a team like a member', async () => {
        const data = {
            title: 'Team Board 123456789',
            background: 'green',
        };
        createDashBoard = await team.createBoardTeam();
        await createDashBoard.setDashBoard(data);
    });
});
