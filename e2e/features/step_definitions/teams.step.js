const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const SideBar = require('../../pages/common/sideBar.po');
const Header = require('../../pages/common/header.po');

let leftBar;
let teamForm;
let team;
let teamContainer;
let members;
let header;
let teamBoard;
let dashboard;

When(/^I create a new Team with:$/, (data) => {
  leftBar = new SideBar();
  teamForm = leftBar.createTeam();
  let teamData = data.rowsHash();
  team = teamForm.createTeam(teamData);
});

When(/^I create a team board:$/, (data) => {
  let dashboardForm = team.clickCreateBoard();
  let rHash = data.rowsHash();
  dashboard = dashboardForm.createTeamBoard(rHash);

});


When(/^I create a new Team using plus buttom with:$/, (data) => {
  header = new Header();
  teamForm = header.clickPlusButtom().createTeam();
  let teamData = data.rowsHash();
  team = teamForm.createTeam(teamData);
});

Given(/^I select a team with:$/, (data) => {
  let rHash = data.rowsHash();
  teamContainer = leftBar.selectTeam(rHash.teamName);
});

When(/^I select Members item list$/, () => {
  teamContainer.goToMembers();
});

When(/^I add member in the team:$/, (data) => {
  members = team.inviteMember();
  let memberData = data.rowsHash();
  members.addAMember(memberData);
});

Then(/^I see the member in Team Members$/, (data) => {
  let memberData = data.rowsHash();
  expect(team.isMember(memberData.user)).to.be.true;
  team.removeMember();
});

Then(/^I see the new team:$/, (data) => {
  let teamData = data.rowsHash();
  leftBar = new SideBar();
  expect(leftBar.existingTeam(teamData.teamName)).to.be.true;
});
