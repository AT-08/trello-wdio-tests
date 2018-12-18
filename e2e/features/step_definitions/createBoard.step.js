const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../core/ui/environment.config.json');

const login = require('../../pages/login.po.js');

let boardContainer;
let dashboard;
let dashboardForm;
let loginPage;
let titleString;
let accessibilityString;
const url = config.url;

Given(/^I login with "([^"]*)"$/, (userKeys) => {
  loginPage = new login(url.trello);
  boardContainer = loginPage.loginToTrello(userKeys);
});

When(/^I create a new Board with:$/, (dataTable) => {
  dashboardForm = boardContainer.createBoard();
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  accessibilityString = rHash.Privacy;
  dashboard = dashboardForm.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
  dashboard.showMenu();
});
