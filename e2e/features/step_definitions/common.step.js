const {Given, When} = require('cucumber');

const config = require('../../../environment.json');

const Login = require('../../pages/common/login.po.js');
// const Header = require('../../pages/common/header.po');

Given(/^I login with "([^"]*)"$/, (userKeys) => {
  Login.isLoggedIn(config.url.trello);
  Login.loginAs(userKeys);
  /*let loginPage = new Login(config.url.trello);
  loginPage.loginAs(userKeys);*/
});

When(/^I go to Trello main page$/, () => {
  console.log('commons step');
  // Header.clickTrelloIcon();
});
