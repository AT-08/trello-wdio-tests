const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const header = require('../../pages/common/header.po');
const sideBar = require('../../pages/common/sideBar.po');
const Dashboard = require('../../pages/dashboard/dashboard.po');

let dashboard;
let members;

When(/^I select Members button$/, () => {
  let dashboard = new Dashboard();
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


