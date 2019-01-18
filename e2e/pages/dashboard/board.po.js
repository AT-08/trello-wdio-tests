'use strict';

const commonActions = require('../../core/ui/commonActions');

class Board {
  constructor() {
    this.title = '.board-header-btn.board-header-btn-name.js-rename-board';
  }

  getTitle() {
    return commonActions.getText(this.title);
  }
}

module.exports = Board;
