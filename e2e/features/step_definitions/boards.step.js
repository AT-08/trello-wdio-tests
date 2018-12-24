const {When, Then} = require('cucumber');
const expect = require('chai').expect;

const BoardContainer = require('../container/boardContainer.po');
const DashboardForm = require('../../pages/dashboard/dashboardForm.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');

const CommonActions = require('../../core/ui/commonActions');

let dashboard;
let dashboardForm;
let titleString;
let members;

When(/^I search a Board with:$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  dashboardForm = new DashboardForm().searchBoard(titleString);
  dashboardForm.click();
});

When(/^I create a new Board with:$/, (dataTable) => {
  let dashboardForm = new BoardContainer().createBoard();
  let rHash = dataTable.rowsHash();
  dashboard = dashboardForm.createBoard(rHash);
});

Then(/^I expect my board created$/, () => {
  Dashboard.showMenu();
});

When(/^I select Members button$/, () => {
  dashboard = new Dashboard();
  members = dashboard.inviteMember();
});

When(/^I add member in the board:$/, (data) => {
  let memberData = data.rowsHash();
  members.addMemberBoard(memberData);
});

Then(/^I see the member in board Members$/, (data) => {
  let memberData = data.rowsHash();
  expect(members.isMemberDashboard(memberData.user)).to.be.true;
});

When(/^I delete it/, () => {
  dashboard.closeBoard();
});

When(/^I go to boards page "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
});

Then(/^I expect the board delete/, () => {
  expect(dashboard.isBoardExisting(titleString)).to.equal(false);
});
