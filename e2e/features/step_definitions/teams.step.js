const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const SideBar = require('../../pages/common/sideBar.po');

let leftBar;
let teamForm;
let team;
let teamContainer;
let members;
When(/^I create a new Team with:$/, (data) => {
  leftBar = new SideBar();
  teamForm = leftBar.createTeam();
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
});
