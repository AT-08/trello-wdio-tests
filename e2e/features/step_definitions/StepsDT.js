//trellosteps.js
const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const MainPage = require('../../pages/MainPage.po.js');
const AccountPage = require('../../pages/MainAccountPagePublic.po.js');
const BoardPage = require('../../pages/BoardPage.po.js');
const CreationBoard = require('../../pages/CreationOfABoard.js');

let mpageP = new MainPage();
let accountpageP = new AccountPage();
let board = new BoardPage();
let boardCreation = new CreationBoard();

Given(/^I go to webpage "([^"]*)"$/, (url) => {
    mpageP.goUrl(url);
});

When(/^I create a new Dashboard with:$/, (dataTable) => {
    accountpageP.clickCreateBoard();
    let rHash = dataTable.rowsHash();
    boardCreation.createBoard(rHash);
});

Then(/^I expect my board created/, () => {
    board.isDashboardCreated();
    expect(board.pageTitle()).to.contains('| Trello');
});
