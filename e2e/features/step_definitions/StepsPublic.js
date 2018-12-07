//trellosteps.js
const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const MainPage = require('../../pages/MainPage.po.js');
const AccountPage = require('../../pages/MainAccountPagePublic.po.js');
const BoardPage = require('../../pages/BoardPage.po.js');

let mpageP = new MainPage();
let accountpageP = new AccountPage();
let board = new BoardPage();

Given(/^I go to "([^"]*)"$/, (url) => {
    mpageP.goUrl(url);
});

When(/^I create a new public Dashboard/, () => {
    accountpageP.clickCreateBoard();
    accountpageP.createNewBoard();
});

Then(/^I expect my public board created/, () => {
    board.isDashboardCreated();
    expect(board.pageTitle()).to.be.eql('PublicBoard | Trello');
});
