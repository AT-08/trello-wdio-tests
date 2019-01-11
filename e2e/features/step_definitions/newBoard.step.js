const {Given, When, Then} = require('cucumber');
const expect = require('chai').expect;

const Board = require('../../pages/container/boardContainer.po');
const Header = require('../../pages/common/header.po');
const RightDropDownMenu = require('../../pages/common/createPlus.po');
const LeftDropDownMenu = require('../../pages/common/sideBar.po');
const BoardForm = require('../../pages/dashboard/dashboardForm.po');

let board = new Board();
let header = new Header();
let rightDropDownMenu = new RightDropDownMenu();
let leftDropDownMenu = new LeftDropDownMenu();
let boardForm = new BoardForm();

Given(/^I click on link create new board from home page$/, () => {
  boardForm = board.onClickNewBoard();
});

Given(/^I click on plus icon from header$/, () => {
  header.onClickPlusButton();
});

Given(/^I click on create board option from right dropdown menu$/, () => {
  boardForm = rightDropDownMenu.openBoardForm();
});

Given(/^I click on button board icon from header$/, () => {
  header.onClickBoardButton();
});

Given(/^I click on create new board link from left dropdown menu$/, () => {
  boardForm = leftDropDownMenu.openBoardForm();
});

When(/^I create a new board using link button with:$/, (data) => {
  boardForm.createBoard(data.rowsHash());
});

When(/^I create a new board using plus icon with:$/, (data) => {
  boardForm.createBoard(data.rowsHash());
});

When(/^I create a new board using board icon with:$/, (data) => {
  boardForm.createBoard(data.rowsHash());
});

Then(/^I expect my board created$/, (data) => {
  expect(board.getTitleBoard()[0]).eq(data.rowsHash().Title);
});
