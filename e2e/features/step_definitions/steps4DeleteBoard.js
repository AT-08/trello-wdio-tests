
const {When, Then} = require('cucumber');
const expect = require('chai').expect;

const BoardActions = require('../../pages/actionsOfABoard.js');
const BoardPage = require('../../pages/boardPage.po.js');
const ClosedBoardPage = require('../../pages/closedBoardPage.po.js');

const CommonActions = require('../../core/ui/commonActions');

let boardActions = new BoardActions();
let board = new BoardPage();
let closedBoardPage = new ClosedBoardPage();
let boardElement;
let titleString;

When(/^I search a Board with:$/, (dataTable) => {
  let rHash = dataTable.rowsHash();
  titleString = rHash.Title;
  boardElement = boardActions.searchBoard(titleString);
  boardElement.click();
});

When(/^I delete it/, () => {
  board.closeBoard();
  closedBoardPage.deletePermanently();
});

When(/^I go to boards page "([^"]*)"$/, (url) => {
  CommonActions.loadPage(url);
});

Then(/^I expect the board delete/, () => {
  expect(board.isBoardExisting(titleString)).to.equal(false);
});
