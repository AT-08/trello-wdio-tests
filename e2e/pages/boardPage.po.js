'use strict';

const CommonActions = require('../core/ui/commonActions');
const WAIT_TIME = 30000;

class Board {

  constructor() {
    this.board = '#board';
    this.moreOptions = 'a[class="board-menu-navigation-item-link js-open-more"]';
    this.closeBoardLink = 'a[class="board-menu-navigation-item-link js-close-board"]';
    this.confirmCLoseBoard = 'input[class="js-confirm full negate"]';
    this.accessibilityButton = 'span[class="board-header-btn-text"]';
  }

  isBoardCreated() {
    browser.waitForVisible(this.board, WAIT_TIME);
  }

  pageTitle() {
    return browser.getTitle();
  }

  closeBoard() {
    this.isBoardCreated();
    CommonActions.operate(this.moreOptions);
    CommonActions.operate(this.closeBoardLink);
    CommonActions.operate(this.confirmCLoseBoard);
  }

  isBoardExisting(title) {
    return browser.isExisting(`div[title="${title}"]`);
  }

  accessibilityBoard() {
    return browser.getText(this.accessibilityButton);
  }
}

module.exports = Board;
