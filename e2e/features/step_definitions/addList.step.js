const {Given, When, Then} = require('cucumber');

const BoardActions = require('../../pages/dashboard/dashboardForm.po.js');
const config = require('../../core/ui/environment.config.json');
const login = require('../../pages/common/login.po.js');
const header = require('../../pages/common/header.po.js');
const boardcontainer = require('../../pages/container/boardContainer.po.js');
const dashboard = require('../../pages/dashboard/dashboard.po.js');

let dashboardTest;
let boardcontainer1;
let list;
const url = config.url;

When(/^I click Trello icon$/, () => {
  header.clickTrelloIcon();
  boardcontainer1 = new boardcontainer();
});

Given(/^I select a board with:$/, (dataTable) => {
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboardTest = boardcontainer1.selectBoard(titleString);
});

When(/^I create new list with:$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  dashboardTest.createList(titleString);
});

Then(/^I expect list created in board$/, () => {

});
