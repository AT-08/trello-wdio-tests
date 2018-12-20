const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const header = require('../../pages/common/header.po');
const sideBar = require('../../pages/common/sideBar.po');

let dashboard;
let members;
When(/^I add member in the board:$/, (data) => {
  members = dashboard.inviteMember();
  let memberData = data.rowsHash();
  members.addMember(memberData);
});

Then(/^I see the member in board Members$/, (data) => {
});


