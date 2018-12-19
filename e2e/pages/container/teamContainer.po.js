'use strict';
const commonActions = require('../../core/ui/commonActions');
const dashboardForm = require('../dashboard/dashboardForm.po');
const dashboard = require('../dashboard/dashboard.po');

/**
 * Page Object of the Team Container.
 */
class teamContainer {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createNewBoardButton = '[class*="mod-add"][href="#"]';
    this.membersItemList = '[href*=members]';
  }

  /**
   * This Method create a board in the team container PO.
   */
  createBoard() {
    commonActions.click(this.createNewBoardButton);
    return new dashboardForm();
  }

  /**
   * Method for select a board in the team container PO.
   *
   * @param boardName Name of the board.
   * @returns {dashboard} The PO of the dashboard.
   */
  selectBoard(boardName) {
    let board = `[class="board-tile-details-name"][title="${boardName}"]`;
    commonActions.click(board);
    return new dashboard();
  }

  /**
   * Method for click to Members item list.
   */
  goToMembers() {
    commonActions.click(this.membersItemList);
  }
}

module.exports = teamContainer;
