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

Given(/^I click on link create new board from home page$/, () => {
  board.onClickNewBoard();
});

Given(/^I click on plus icon from header$/, () => {
  header.onClickPlusButton();
});

Given(/^I click on create board option from right dropdown menu$/, () => {
  rightDropDownMenu.openBoardForm();
});

Given(/^I click on button board icon from header$/, () => {
  header.onClickBoardButton();
});

Given(/^I click on create new board link from left dropdown menu$/, () => {
  leftDropDownMenu.openBoardForm();
});

When(/^I create a new board with:$/, (data) => {
  new BoardForm().createBoard(data.rowsHash());
});

Then(/^I expect my board created$/, (data) => {
  expect(board.getTitleBoard()[0]).eq(data.rowsHash().Title);
});
