'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboardForm = require('../dashboard/dashboardForm.po');
const dashboard = require('../dashboard/dashboard.po');

class boardContainer {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createNewBoardButton = '[class*="mod-add"][href="#"]';
  }

  /**
   * This Method create a board in the board container PO.
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
}

module.exports = boardContainer;
