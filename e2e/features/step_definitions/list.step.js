const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const Header = require('../../pages/common/header.po');
const BoardContainer = require('../../pages/container/boardContainer.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');
const List = require('../../pages/dashboard/list.po');

let header;
let dashboard;
let boardContainer;
let boardsDrawerContainer;
let list;

Given(/^I select a board with:$/, (dataTable) => {
  boardContainer = new BoardContainer();
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboard = boardContainer.selectBoard(titleString);
});

Given(/^I select a board in Boards Drawer with:$/, (dataTable) => {
  header = new Header();
  boardsDrawerContainer = header.clickBoardsDrawerButtom();
  let rHashBoard = dataTable.rowsHash();
  let titleString = rHashBoard.Title;
  dashboard = boardsDrawerContainer.selectBoard(titleString);
});

When(/^I create new list with:$/, (dataTable) => {
  dashboard = new Dashboard();
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  dashboard.createList(titleString);
});

Then(/^I expect list created in board$/, (dataTable) => {
  dashboard = new Dashboard();
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

When(/^I archive this list$/, () => {
  list = new List();
  list.clickListAction().archiveList();
});

Then(/^I don't expect list in board:$/, (dataTable) => {
  dashboard = new Dashboard();
  let rHash = dataTable.rowsHash();
  let titleString = rHash.Title;
  expect(dashboard.isCreatedList(titleString)).to.be.false;
});

When(/^I move the list to the my board:$/, (data) => {
  list = new List();
  let BoardSet = data.rowsHash();
  list.clickListAction().moveList(BoardSet);
});

