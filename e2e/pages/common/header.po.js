'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * PageObject of the header of Trello.
 */
class header {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.boardsDrawerButton = 'span[class="header-btn-icon icon-lg icon-board light"]';
  }

  /**
   * Method for navigate to trello link.
   */
  static clickTrelloIcon() {
    this.trelloIcon = '.header-logo-default';
    commonActions.pause();
    commonActions.click(this.trelloIcon);
  }

  /**
   *
   */
  clickBoardsDrawerButtom() {
    commonActions.pause();
    commonActions.click(this.boardsDrawerButton);
  }
}

module.exports = header;
