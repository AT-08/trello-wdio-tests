'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboardForm = require('../dashboard/dashboardForm.po');
const dashboard = require('../dashboard/dashboard.po');
const boardForm = require('../dashboard/dashboardForm.po');

//const DEFAULT_PAUSE = 30000;

class boardContainer {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createNewBoardButton = '.board-tile.mod-add';
    this.titleBoard = '.board-header-btn-text';
  }

  /**
   * This Method create a board in the board container PO. Deprecated ?
   */
  createBoard() {
    commonActions.click(this.createNewBoardButton);
    return new dashboardForm();
  }

  /**
   * Method for select a board in the board container PO.
   *
   * @param boardName Name of the board.
   * @returns {Dashboard} The PO of the dashboard.
   */
  selectBoard(boardName) {
    let board = `[class="board-tile-details-name"][title="${boardName}"]`;
    commonActions.click(board);
    return new dashboard();
  }

  isBoardExisting(title) {
    //browser.pause(DEFAULT_PAUSE);
    //commonActions.waitVisibility(this.createNewBoardButton);
    return commonActions.getText(this.titleBoard) === title;
  }

  getTitleBoard() {
    return commonActions.getText(this.titleBoard);
  }

  /**
   * Method to click on new board.
   */
  onClickNewBoard() {
    commonActions.click(this.createNewBoardButton);
    return new boardForm();
  }
}

module.exports = boardContainer;
