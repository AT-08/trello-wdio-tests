const { Given, When, Then } = require('cucumber');
const expect = require('chai').expect;

const config = require('../../core/ui/environment.config.json');
const credentials = config.credentials;
const CommonActions = require('../../core/ui/commonActions');

const Page = require('../../pages/login.po');
const page = new Page();
const Board = require('../../pages/board.po');
const boards = new Board();

Given(/^I logged into Trello website$/, (data) => {
  CommonActions.loadPage(data.hashes()[0].url);
  page.setUsername(credentials.owner.username);
  page.setPassword(credentials.owner.password);
  page.submit();
});

When(/^I created new Team$/, (data) => {
  boards.onClickAddIcon();
  boards.setNewTeamName(data.hashes()[0].team);
  boards.onClickCreate();
});

Then(/^I expect new team created$/, (data) => {
  CommonActions.loadPage(data.hashes()[0].url);
  expect(boards.isNewTeamCreated()).to.eq(true);
});
