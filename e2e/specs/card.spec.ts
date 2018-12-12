import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import {Card} from '../pages/card.po';
import {Selectedboard} from '../pages/selectedboard.po';
import user from '../utils/environment.json';

describe('create a one card', () => {
    let board: Dashboard;
    let login: Login;
    let selectedBoard: Selectedboard;
    let card: Card;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.owner1);
        const data = {
            title: 'Apublic',
        };
        await board.createDashBoard(data);
        selectedBoard = new Selectedboard();
    });

    it('When I selected a one board, I can to create a new card', async () => {
        card = await selectedBoard.selectedCard();
        await card.createCard('new card for testing  automation');
    });
});
