'use strict';

const commonActions = require('../../core/ui/commonActions');
const BoardsDrawerContainer = require('../../pages/container/boardsDrawerContainer.po');
const CreatePlus = require('../../pages/common/createPlus.po');

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
    commonActions.click(this.trelloIcon);
  }

  /**
   * Method for open PO Boards Drawer container.
   */
  clickBoardsDrawerButtom() {
    commonActions.click(this.boardsDrawerButton);
    return new BoardsDrawerContainer();
  }

  /**
   * Method for open PO
   */
  static clickPlusButton() {
    commonActions.click('span[class="header-btn-icon icon-lg icon-add light"]');
    return new CreatePlus();
  }
}

module.exports = header;
