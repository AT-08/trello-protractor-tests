import {Selectedboard} from '../pages/selectedboard.po';
import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import user from '../utils/environment.json';

describe('This spec verify if a owner can add a member to a dashboad', () => {
    let board: Dashboard;
    let login: Login;
    let selectedboard: Selectedboard;

    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.owner1);
        selectedboard = await board.selectDashBoard('ae');
    });
    it('I should add member to my dashboard', async () => {
        const data = {
                user: 'rocku',
                description: 'aksdfmdksfnsd',
            }
        ;
        await selectedboard.addMember(data);
    });
});
