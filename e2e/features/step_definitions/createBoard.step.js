const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../core/ui/environment.config.json');

const LoginPage = require('../../pages/loginPage.po.js');

let mainPage;
let dashboard;
let boardForm;
let loginpage;
let titleString;
let accessibilityString;
const url = config.url;

Given(/^I login with "([^"]*)"$/, (userKeys) => {
  loginpage = new LoginPage(url.trello);
  mainPage = loginpage.loginToTrello(userKeys);
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

