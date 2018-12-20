const {Given, When, Then} = require('cucumber');
const Boardcontainer = require('../../pages/container/boardContainer.po.js');
const expect = require('chai').expect;
const dashboardClass = require('../../pages/dashboard/dashboard.po');

let dashboard;
let boardcontainer;


Given(/^I select a board with:$/, (dataTable) => {
  boardcontainer = new Boardcontainer();
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboard = boardcontainer.selectBoard(titleString);
});

When(/^I create new list with:$/, (dataTable) => {
  dashboard = new dashboardClass();
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  dashboard.createList(titleString);
});

Then(/^I expect list created in board$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  expect(dashboard.isCreatedList(titleString)).to.be.true;
});
