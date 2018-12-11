//trellosteps.js
const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../../config.json');
const CommonActions = require('../../core/ui/commonActions');

const AccountPage = require('../../pages/mainAccountPage.po.js');
const BoardPage = require('../../pages/boardPage.po.js');
const CreationBoard = require('../../pages/creationOfABoard.js');
const LoginPage = require('../../pages/loginPage.po.js');

let accountpageP = new AccountPage();
let board = new BoardPage();
let boardCreation = new CreationBoard();
let loginpage = new LoginPage();

Given(/^I login "([^"]*)"$/, (url) => {
    CommonActions.loadPage(url);
    if (CommonActions.getTitleOfPage() === 'Log in to Trello') {
        loginpage.setEmailTextField(config.username);
        loginpage.writePassword(config.password);
        loginpage.clickLoginAccount();
    }
});

When(/^I create a new Board with:$/, (dataTable) => {
    accountpageP.clickCreateBoard();
    let rHash = dataTable.rowsHash();
    boardCreation.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
    board.isDashboardCreated();
    expect(board.pageTitle()).to.contains('| Trello');
});
