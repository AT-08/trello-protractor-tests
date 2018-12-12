import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';
import {Team} from '../pages/team.po';

describe('This spec verify if a owner can add a member to a team', () => {
    let board: Dashboard;
    let login: Login;
    let team: Team;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.owner1);
        const data = {
            title: 'TeamTestMember',
            description: 'This is a proof for add member to a team',
        };
        team = await board.createTeam(data);
    });
    it('I should add member to my team', async () => {
        const data = {
            user: 'rocku',
        };
        await team.inviteMember(data);
    });
});
