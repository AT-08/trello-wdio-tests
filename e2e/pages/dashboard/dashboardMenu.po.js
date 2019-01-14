'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * PageObject of the Menu of the dashboard.
 */
class dashboardMenu {
  /**
   * Constructor of set the elements to be used.
   */
  constructor() {
    this.menuMoreItem = '.js-open-more';
    this.menuMoreCloseBoard = '.js-close-board';
    this.confirmCloseBoard = '.js-confirm.full.negate';
    this.permanentlyDeleteBoardLink = '.quiet.js-delete';
  }

  deleteBoard() {
    commonActions.waitVisibility(this.menuMoreItem);
    commonActions.click(this.menuMoreItem);
    commonActions.click(this.menuMoreCloseBoard);
    commonActions.click(this.confirmCloseBoard);
    commonActions.click(this.permanentlyDeleteBoardLink);
    commonActions.click(this.confirmCloseBoard);
  }

  closeBoard() {
    commonActions.click(this.menuMoreItem);
    commonActions.click(this.menuMoreCloseBoard);
    commonActions.click(this.confirmCloseBoard);
  }

}

module.exports = dashboardMenu;
