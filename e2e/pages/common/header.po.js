'use strict';

const commonActions = require('../../core/ui/commonActions');
const BoardsDrawerContainer = require('../../pages/container/boardsDrawerContainer.po');
const CreatePlus = require('../../pages/common/createPlus.po');
const LeftDrowpDownMenu = require('../../pages/common/sideBar.po');

/**
 * PageObject of the header of Trello.
 */
class header {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.boardsDrawerButton = 'span[class="header-btn-icon icon-lg icon-board light"]';
    this.createPlusButtom = 'span[class="header-btn-icon icon-lg icon-add light"]';
    this.headerPlusButton = '.header-btn.js-open-add-menu';
    this.headerBoardButton = '.header-btn.header-boards.js-boards-menu';
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

  onClickPlusButton() {
    commonActions.pause();
    commonActions.click(this.headerPlusButton);
    return new CreatePlus;
  }

  onClickBoardButton() {
    commonActions.pause();
    commonActions.click(this.headerBoardButton);
    return new LeftDrowpDownMenu;
  }
}

module.exports = header;
