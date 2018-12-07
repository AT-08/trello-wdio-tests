//trellosteps.js
const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const config = require('../../../config.json');

const MainPage = require('../../pages/MainPage.po.js');
const LoginPage = require('../../pages/LoginPage.po.js');
const AccountPage = require('../../pages/MainAccountPage.po.js');
const BoardPage = require('../../pages/BoardPage.po.js');

let mpage = new MainPage();
let loginpage = new LoginPage();
let accountpage = new AccountPage();
let board = new BoardPage();

Given(/^I log in "([^"]*)"$/, (url) => {
    mpage.goUrl(url);
    loginpage.setEmailTextField(config.username);
    loginpage.writePassword(config.password);
    loginpage.clickLoginAccount();
});

When(/^I create a new Board/, () => {
    accountpage.clickCreateBoard();
    accountpage.createNewBoard();
});

Then(/^I expect the board created/, () => {
    board.isDashboardCreated();
    expect(board.pageTitle()).to.be.eql('NewBoard | Trello');
});
