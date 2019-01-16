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

Given(/^I click on link create new board from home page$/, () => {
  let board = new BoardContainer();
  board.onClickNewBoard();
});

When(/^I create a new Board with:$/, (dataTable) => {
  let boardForm = new DashboardForm();
  boardForm.createBoard(dataTable.rowsHash());
});

Then(/^I expect my board created$/, () => {
  Dashboard.showMenu();
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

When(/^I click in ShowMenu link/, () => {
  boardMenu = new BoardMenu();
  boardMenu.clickShowMenu();
});


When(/^I delete it/, () => {
  boardMenu = new BoardMenu();
  boardMenu.deleteBoard();
});

When(/^I go to boards page "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
});

Then (/^I expect the board delete:$/, (data) => {
  boardPage = new BoardContainer();
  let boardData = data.rowsHash();
  expect(boardPage.isBoardExisting(boardData.Title)).to.be.false;
});

Then(/^I should see the list in the board:$/, (dataTable) => {
  dashboard = new Dashboard();
  let rHash = dataTable.rowsHash();
  expect(dashboard.isCreatedList(rHash.Title)).to.be.true;
});
