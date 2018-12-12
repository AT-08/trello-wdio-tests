const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

const config = require('../../../my.config.json');
const CommonActions = require('../../core/ui/commonActions');

const AccountPage = require('../../pages/mainAccountPage.po.js');
const BoardPage = require('../../pages/boardPage.po.js');
const BoardActions = require('../../pages/actionsOfABoard.js');
const LoginPage = require('../../pages/loginPage.po.js');

let accountpageP = new AccountPage();
let board = new BoardPage();
let boardActions = new BoardActions();
let loginpage = new LoginPage();
let titleString;
let accessibilityString;
const credentials = config.credentials;

Given(/^I login "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
  if (CommonActions.getTitlePage() === 'Log in to Trello') {
    loginpage.setEmailTextField(credentials.owner.username);
    loginpage.writePassword(credentials.owner.password);
    loginpage.clickLoginAccount();
  }
});

When(/^I create a new Board with:$/, (dataTable) => {
  accountpageP.clickCreateBoard();
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  accessibilityString = rHash.Privacy;
  boardActions.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
  board.isBoardCreated();
  expect(board.pageTitle()).to.equal(titleString+' | Trello');
  expect(board.accessibilityBoard().toString()).to.equal(titleString+','+accessibilityString);
});
