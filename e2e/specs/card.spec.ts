import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import {Card} from '../pages/card.po';
import {Selectedboard} from '../pages/selectedboard.po';

describe('', () => {
    let board: Dashboard;
    let login: Login;
    let selectedBoard: Selectedboard;
    let card: Card;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(() => {
        login = new Login(url);
    });

    it('When user logged in his dashboard, he can selected a one  board', async () => {
        await login.loadPage();
        board = await login.LogInWithUser();
        selectedBoard = await board.selectDashBoard('ae');

        await card.createCard('new card');
    });
});
