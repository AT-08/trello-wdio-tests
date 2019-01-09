'use strict';

const commonActions = require('../../core/ui/commonActions');
const BoardsDrawerContainer = require('../../pages/container/boardsDrawerContainer.po');

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
   * Method for open PO Boards Drawer container.
   */
  clickBoardsDrawerButtom() {
    commonActions.pause();
    commonActions.click(this.boardsDrawerButton);
    return new BoardsDrawerContainer();
  }
}

module.exports = header;
