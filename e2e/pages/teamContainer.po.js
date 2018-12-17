'use strict';
const commonActions = require('../core/ui/commonActions');
const dashboardForm = require('../');
const dashboard = require('../pages/dashboard.po');

/**
 * Page Object of the Team Container.
 */
class teamContainer {
  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createNewBoardButton = '[class*="mod-add"][href="#"]';

  }

  /**
   * This Method create a board in the team container PO.
   */
  createBoard() {
    commonActions.click(this.createNewBoardButton);
    return new dashboardForm();
  }

  selectBoard(boardName) {
    let board = `[class="board-tile-details-name"][title="${boardName}"]`;

    return new dashboard();
  }
}

module.exports = teamContainer;
