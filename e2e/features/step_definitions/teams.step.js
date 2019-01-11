const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const SideBar = require('../../pages/common/sideBar.po');
const TeamForm = require('../../pages/team/teamForm.po');
const Team = require('../../pages/team/team.po');

let leftBar;
let team;
let teamContainer;
let members;
let teamForm;

When(/^I create a new Team with:$/, (data) => {
  teamForm = new TeamForm();
  let teamData = data.rowsHash();
  team = teamForm.createTeam(teamData);
});

Given(/^I select a team with:$/, (data) => {
  leftBar = new SideBar();
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
});

Then(/^I see the new team:$/, (data) => {
  let teamData = data.rowsHash();
  team = new Team();
  expect(team.isNameTeam(teamData.teamName)).to.be.true;
});

Then(/^I see the new team at sidebar:$/, (data) => {
  let teamData = data.rowsHash();
  leftBar = new SideBar();
  expect(leftBar.existingTeam(teamData.teamName)).to.be.true;
});

