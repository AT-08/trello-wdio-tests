const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../core/ui/environment.config.json');
const CommonActions = require('../../core/ui/commonActions');

const MainPage = require('../../pages/mainAccountPage.po.js');
const BoardPage = require('../../pages/boardPage.po.js');
const BoardActions = require('../../pages/actionsOfABoard.js');
const LoginPage = require('../../pages/loginPage.po.js');

let mainPage;
let board = new BoardPage();
let boardActions = new BoardActions();
let loginpage = new LoginPage();
let titleString;
let accessibilityString;
const credentials = config.credentials;
const url = config.url;

Given(/^I login$/, () => {
    CommonActions.loadPage(url.trello);
    if (CommonActions.getTitlePage() === 'Log in to Trello') {
        mainPage = loginpage.loginToTrello(credentials.member1);
    }
});
When(/^I create a new Board with:$/, (dataTable) => {
    mainPage.clickCreateBoard();
    let rHash = dataTable.rowsHash();
    titleString = rHash.Title;
    accessibilityString = rHash.Privacy;
    boardActions.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
    board.isBoardCreated();
    expect(board.pageTitle()).to.equal(titleString + ' | Trello');
    expect(board.accessibilityBoard().toString()).to.equal(titleString + ',' + accessibilityString);
});
