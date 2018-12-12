const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

const config = require('../../../config.json');
const credentials = config.credentials;
const CommonActions = require('../../core/ui/commonActions');

const LoginPage = require('../../pages/loginPage.po');
const loginPage = new LoginPage();
const Team = require('../../pages/team.po');
const team = new Team();

Given(/^I logged into "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
  loginPage.setEmailTextField(credentials.owner.username);
  loginPage.writePassword(credentials.owner.password);
  loginPage.clickLoginAccount();
});

When(/^I created new team "([^"]*)"$/, (team) => {
  team.onClickAddTeam();
});

Then(/^I expect new team created$/, () => {
  console.log('then');
});
