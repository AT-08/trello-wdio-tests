//trellosteps.js
const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const MainPage = require('../../pages/MainPage.po.js');
const AccountPage = require('../../pages/MainAccountPageDataTable.po.js');
const BoardPage = require('../../pages/BoardPage.po.js');

let mpage = new MainPage();
let accountpage = new AccountPage();
let board = new BoardPage();

Given(/^I go "([^"]*)"$/, (url) => {
    mpage.goUrl(url);
});

When(/I create board with this (.*) and (.*)$/, (name, bg) => {
    accountpage.clickCreateBoard();
    accountpage.createNewBoard(name, bg);
});

Then(/^I expect a public board created (.*)$/, (title) => {
    board.isDashboardCreated();
    expect(board.pageTitle()).to.be.eql(title.toString().concat(' | Trello'));
});
