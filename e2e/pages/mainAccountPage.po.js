'use strict';

const CommonActions = require('../core/ui/commonActions');

const WAIT_VISIBILITY = 10000;

class MainPage {

  constructor() {
    this.createBoard = 'a[class="board-tile mod-add"]';
    this.something = 'a[class="tab__tabLink__3C9rw tab__selected__1gsiC"]';
  }
  
  clickCreateBoard() {
    browser.waitForVisible(this.something, WAIT_VISIBILITY);
    CommonActions.operate(this.createBoard);
  }
}

module.exports = MainPage;
