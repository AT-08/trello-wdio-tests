const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const BoardContainer = require('../../pages/container/boardContainer.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');

let dashboard;
let boardContainer;

Given(/^I select a board with:$/, (dataTable) => {
  boardContainer = new BoardContainer();
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboard = boardContainer.selectBoard(titleString);
});

When(/^I create new list with:$/, (dataTable) => {
  dashboard = new Dashboard();
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  dashboard.createList(titleString);
});

Then(/^I expect list created in board$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  expect(dashboard.isCreatedList(titleString)).to.be.true;
});

Given(/^I select a list with:$/, (data) => {
  dashboard = new Dashboard();
  let listToSelect = data.rowsHash();
  let nameList = listToSelect.Title;
  dashboard.selectList(nameList);
});