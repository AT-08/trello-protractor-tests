import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';

describe('This spec verify the creation of a team', () => {
    let board: Dashboard;
    let login: Login;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.owner1);
    });
    it('I create a team', async () => {
        const data = {
            title: 'Team Test Creation',
            description: 'This is a proof of the creation of a team',
        };
        await board.createTeam(data);
    });
});
