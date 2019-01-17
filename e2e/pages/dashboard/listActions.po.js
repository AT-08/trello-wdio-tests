'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * PageObject for a list in the dashboard.
 */
class listActions {
  /**
   * Constructor to set the locators.
   */
  constructor() {
    this.archiveListButtom = 'a[class="js-close-list"]';
    this.moveListButton = 'a[class="js-move-list"]';
    this.moveButon = 'input.primary.wide.js-commit-position';
    this.btnSelectBoard = 'select[class="js-select-board"]';
    this.btnSelectPosition = 'select[class="js-select-list-pos"]';
  }

  /**
   * This method create a card in a list.
   */
  archiveList() {
    commonActions.click(this.archiveListButtom);
  }

  /**
   * This method to move a list to another board or position.
   */
  moveList(board) {
    commonActions.click(this.moveListButton);
    this.setMoveList(board);
    commonActions.click(this.moveButon);
  }

  /**
   * This method move the list.
   */
  setMoveList(data2change) {
    commonActions.pause();
    const move = {
      'BoardTitle': () => this.changeBoard(data2change.BoardTitle),
      'Position': () => this.setPosition(data2change.Position) };
    Object.keys(data2change).forEach(key => {
      move[key].call();
    });
  }

  /**
   * This method gives the board new  to the list.
   */
  changeBoard(nameBoard) {
    commonActions.pause();
    const sb = $(this.btnSelectBoard);
    sb.selectByVisibleText(`${nameBoard}`);
  }

  /**
   * This method gives the position new to the list.
   */
  setPosition(position) {
    const sb = $(this.btnSelectPosition);
    sb.selectByVisibleText(`${position}`);
  }
}

module.exports = listActions;

