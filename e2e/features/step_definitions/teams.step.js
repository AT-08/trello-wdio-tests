const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const SideBar = require('../../pages/common/sideBar.po');
const TeamForm = require('../../pages/team/teamForm.po');
const Team = require('../../pages/team/team.po');
const TeamSettings = require('../../pages/team/teamSettings.po');

let leftBar;
let teamContainer;
let members;
let teamForm;
let teamSettings;
let team;

When(/^I create a new Team with:$/, (data) => {
  teamForm = new TeamForm();
  let teamData = data.rowsHash();
  teamForm.createTeam(teamData);
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
  let team = new Team();
  members = team.inviteMember();
  let memberData = data.rowsHash();
  members.addAMember(memberData);
});

Then(/^I see the member in Team Members$/, (data) => {
  let team = new Team();
  let memberData = data.rowsHash();
  expect(team.isMember(memberData)).to.be.true;
  team.removeMember();
});

Then(/^I see the new team:$/, (data) => {
  let teamData = data.rowsHash();
  let team = new Team();
  expect(team.isNameTeam(teamData.teamName)).to.be.true;
});

Then(/^I see the new team at sidebar:$/, (data) => {
  let teamData = data.rowsHash();
  leftBar = new SideBar();
  expect(leftBar.existingTeam(teamData.teamName)).to.be.true;
});

When(/^I select Settings item list:$/, () => {
  let team = new Team();
  teamSettings = team.goToSettingTab();
});

When(/^I change the privacy of the team:$/, (data) => {
  let settingData = data.rowsHash();
  let teamSettings = new TeamSettings();
  teamSettings.changeVisibility(settingData.privacy);
});

Then(/^I see the privacy change in team:$/, (data) => {
  let teamSettings = new TeamSettings();
  let settingData = data.rowsHash();
  expect(teamSettings.verifyChangeprivacy(settingData.privacy)).to.be.true;
});



When(/^I select the Team with:$/, (data) => {
  leftBar = new SideBar();
  let rHash = data.rowsHash();
  teamContainer = leftBar.selectTeam(rHash.teamName);
  team = teamContainer.goToSetings();
});

When(/^I go to settings$/, () => {
  teamSettings = team.clickSettings();
});

When(/^I delete the team$/, () => {
  teamSettings.deleteTeam();
});

When(/^I delete the member$/, () => {
  let team = new Team();
  members = team.newMember();
  members.deleteMember();
});

Then(/^I don't expect member of team:$/, (data) => {
  let team = new Team();
  members = team.newMember();
  let memberData = data.rowsHash();
  expect(members.verifyMember(memberData)).to.be.false;
});