const {Given, When, Then} = require('cucumber');

const header = require('../../pages/common/header.po');
const sideBar = require('../../pages/common/sideBar.po');

let leftBar;
let teamForm;
let team;
let teamContainer;
let members;
When(/^I create a new Team with:$/, (data) => {
  leftBar = new sideBar();
  teamForm = leftBar.createTeam();
  let teamData = data.rowsHash();
  team = teamForm.createTeam(teamData);
});

When(/^I click Trello icon$/, () => {
  header.clickTrelloIcon();
});

Given(/^I select a team with:$/, (data) => {
  let rHash = data.rowsHash();
  teamContainer = leftBar.selectTeam(rHash.TeamName);
});

When(/^I select Members item list$/, () => {
  teamContainer.goToMembers();
});

When(/^I add member in the team:$/, (data) => {
  members = team.inviteMember();
  let memberData = data.rowsHash();
  members.addMember(memberData);
});

Then(/^I expect member add in team$/, () => {
  console.log('POSI');
});
