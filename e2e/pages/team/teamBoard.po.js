'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboardForm = require('../dashboard/dashboardForm.po');
/**
 * This is the PO of a create a team board.
 */
class teamBoard {

  constructor() {
    this.createNewBoardButton = '//div[contains(@class,"tabbed-pane-main-col")]/descendant::*[@class="board-tile mod-add"]';
  }

  /**
   * This Method create a board in the team container PO.
   */
  clickCreateBoard() {
    commonActions.waitVisibility(this.createNewBoardButton);
    commonActions.click(this.createNewBoardButton);
    return new dashboardForm();
  }
}

module.exports = teamBoard;


