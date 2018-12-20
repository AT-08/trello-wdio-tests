const {Given, When, Then} = require('cucumber');
const header = require('../../pages/common/header.po.js');
const boardcontainer = require('../../pages/container/boardContainer.po.js');

let dashboardTest;
let boardcontainer1;


Given(/^I select a board with:$/, (dataTable) => {
  boardcontainer1 = new boardcontainer();
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboardTest = boardcontainer1.selectBoard(titleString);
});

When(/^I create new list with:$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  dashboardTest.createList(titleString);
});

Then(/^I expect list created in board$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  browser.console(titleString);
});
