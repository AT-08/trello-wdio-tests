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
    this.notBoardMessage = 'div[class="little-message"]';
  }

  deleteBoard() {
    commonActions.waitVisibility(this.menuMoreItem);
    commonActions.click(this.menuMoreItem);
    commonActions.click(this.menuMoreCloseBoard);
    commonActions.click(this.confirmCloseBoard);
    commonActions.click(this.permanentlyDeleteBoardLink);
    commonActions.click(this.confirmCloseBoard);
    commonActions.waitVisibility(this.notBoardMessage);

  }

  clickShowMenu () {
    commonActions.waitVisibility('.board-header-btn-text');
    if (!browser.isVisible('div[class="board-menu js-fill-board-menu"]')) {
      browser.click('.board-header-btn.mod-show-menu.js-show-sidebar');
    }
  }

  closeBoard() {
    commonActions.click(this.menuMoreItem);
    commonActions.click(this.menuMoreCloseBoard);
    commonActions.click(this.confirmCloseBoard);
  }

}

module.exports = dashboardMenu;
