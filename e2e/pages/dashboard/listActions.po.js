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
    this.moveButon = 'input[class="primary wide js-commit-position"]';
      this.btnChangeBoard = '.js-select-board';
      this.btnSelectBoard = 'select[class="js-select-board"]';
      this.btnSetPosition = '.js-select-list-pos';
      this.btnSelectPosition = 'select[class="js-select-list-pos"]';

  }

  /**
   * This method create a card in a list.
   */
  archiveList() {
    commonActions.click(this.archiveListButtom);
  }

  /**
   * This method create a card in a list.
   */
  moveList(board) {
      commonActions.click(this.moveListButton);
      this.setMoveCard(board);

  }

  setMoveCard(data2change) {
      const move = {
         'BoardTitle': () => this.changeBoard(data2change.BoardTitle),
          'Position': () => this.setPosition(data2change.Position)
      };
      Object.keys(data2change).forEach(key => {
          move[key].call();
      });
  }

  changeBoard(nameBoard) {
      commonActions.click(this.btnChangeBoard);
      const sb = $(this.btnSelectBoard);
      sb.selectByVisibleText(`${nameBoard}`);
      commonActions.click(this.btnChangeBoard);
  }

  setPosition(position) {
      commonActions.click(this.btnSetPosition);
      const sb = $(this.btnSelectPosition);
      sb.selectByVisibleText(`${position}`);
      commonActions.click(this.btnSetPosition);
  }
}

module.exports = listActions;

