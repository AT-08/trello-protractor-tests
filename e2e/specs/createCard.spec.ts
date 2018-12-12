import {Dashboard} from '../pages/dashboard.po';
import {Login} from '../pages/login.po';
import {Card} from '../pages/card.po';
import {Selectedboard} from '../pages/selectedboard.po';
import {Dashboardcreation} from '../pages/dashboardcreation.po';
import user from '../utils/environment.json';

describe('Create a one card', () => {
    let board: Dashboard;
    let selectedBoard: Selectedboard;
    let boardCreation: Dashboardcreation;
    let login: Login;
    let card: Card;
    const url = 'https://trello.com/login?returnUrl=%2F';
    beforeEach(async () => {
        login = new Login(url);
        await login.loadPage();
        board = await login.LogInWithUser(user.owner1);

        const data = {
            title: 'Aatestfinal',
        };
        boardCreation = await board.createDashBoard();
        await boardCreation.setDashBoard(data);
        selectedBoard = new Selectedboard();
        await selectedBoard.addList('list test GUI');
    });

    it('When I selected a one board, I can to create a new card', async () => {
        card = await selectedBoard.selectedCard();
        await card.createCard('new card whit testfinal1 ');
    });
});
