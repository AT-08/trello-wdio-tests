
const {When, Then} = require('cucumber');
const expect = require('chai').expect;

const BoardActions = require('../../pages/actionsOfABoard.js');
const BoardPage = require('../../pages/boardPage.po.js');
const ClosedBoardPage = require('../../pages/closedBoardPage.po.js')

let boardActions = new BoardActions();
let board = new BoardPage();
let closedBoardPage = new ClosedBoardPage();

When(/^I search a Board with:$/, (dataTable) => {
    let rHash = dataTable.rowsHash();
    boardActions.searchBoard(rHash.Title);
});

When(/^I delete it/, () => {
    board.closeBoard();
    closedBoardPage.deletePermanently();
});

Then(/^I expect the board delete/, () => {
    expect(closedBoardPage.titlePage()).to.contains('Error');
});