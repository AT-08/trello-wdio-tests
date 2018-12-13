const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../core/ui/environment.config.json');
const CommonActions = require('../../core/ui/commonActions');

const LoginPage = require('../../pages/loginPage.po.js');

let mainPage;
let dashboard;
let boardForm;
let loginpage;
let titleString;
let accessibilityString;
const credentials = config.credentials;
const url = config.url;

Given(/^I login with user$/, () => {
  CommonActions.loadPage(url.trello);
  if (CommonActions.getTitlePage() === 'Log in to Trello') {
    loginpage = new LoginPage();
    mainPage = loginpage.loginToTrello(credentials.member1);
  }
});
When(/^I create a new Board with:$/, (dataTable) => {
  boardForm = mainPage.clickCreateBoard();
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  accessibilityString = rHash.Privacy;
  dashboard = boardForm.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
  dashboard.isBoardCreated();
  expect(dashboard.pageTitle()).to.equal(titleString + ' | Trello');
  expect(dashboard.accessibilityBoard().toString()).to.equal(titleString + ',' + accessibilityString);
});
