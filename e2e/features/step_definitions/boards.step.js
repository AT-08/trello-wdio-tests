const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const BoardContainer = require('../../pages/container/boardContainer.po');
const DashboardForm = require('../../pages/dashboard/dashboardForm.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');
const BoardMenu = require('../../pages/dashboard/dashboardMenu.po');

const CommonActions = require('../../core/ui/commonActions');

let dashboard;
let dashboardForm;
let titleString;
let member;
let boardMenu;
let boardPage;
let boardContainer;
let boardForm = new DashboardForm();

When(/^I search a Board with:$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  dashboardForm = new DashboardForm().searchBoard(titleString);
  dashboardForm.click();
});

Given(/^I select the board with:$/, (dataTable) => {
  boardContainer = new BoardContainer();
  let rHashBoard = dataTable.rowsHash();
  titleString = rHashBoard.Title;
  dashboard = boardContainer.selectBoard(titleString);
});

When(/^I create a new Board with:$/, (dataTable) => {
  let board = new BoardContainer();
  boardForm = board.onClickNewBoard();
  boardForm.createBoard(dataTable.rowsHash());
});

When(/^I select Members button$/, () => {
  dashboard = new Dashboard();
  member = dashboard.inviteMember();
});

When(/^I add member in the board:$/, (data) => {
  let memberData = data.rowsHash();
  member.addAMember(memberData);
});

Then(/^I see the member in board Members$/, (data) => {
  let memberData = data.rowsHash();
  expect(member.isMemberDashboard(memberData.user)).to.be.true;
});

When(/^I delete it/, () => {
  boardMenu = new BoardMenu();
  boardMenu.deleteBoard();
});

When(/^I go to boards page "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
});

Then(/^I expect the board delete/, () => {
  boardPage = new BoardContainer();
  expect(boardPage.isBoardExisting(titleString)).to.be.false;
});

Then(/^I should see the list in the board:$/, (dataTable) => {
  dashboard = new Dashboard();
  let rHash = dataTable.rowsHash();
  expect(dashboard.isCreatedList(rHash.Title)).to.be.true;
});
