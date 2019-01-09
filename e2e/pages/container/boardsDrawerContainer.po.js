'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboardForm = require('../dashboard/dashboardForm.po');
const dashboard = require('../dashboard/dashboard.po');

class boardsDrawerContainer {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createNewBoardButton = 'a[class="quiet-button js-add-board"]';
  }

  /**
   * This Method create a board in the board drawer container PO.
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
    let board = `[class="compact-board-tile-link-text-name"][title="${boardName}"]`;
    commonActions.click(board);
    return new dashboard();
  }

  isBoardExisting(title) {
    commonActions.waitVisibility(this.createNewBoardButton);
    return browser.isVisible(`div[title="${title}"]`);
  }
}

module.exports = boardsDrawerContainer;
