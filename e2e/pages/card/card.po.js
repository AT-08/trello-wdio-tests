'use strict';

const commonActions = require('../../core/ui/commonActions');

const members = require('../../pages/common/members.po');

/**
 * This is the PO of the card page
 */
class card {

  constructor() {
    this.cardName = '.js-card-name';
    this.addChecklist = '.js-add-checklist-menu';
    this.checklistTitle = '.js-checklist-title';
    this.btnAddChecklist = '.js-add-checklist';
    this.newChecklistItem = '.js-new-checklist-item-input';
    this.checklistNewItemText = '.checklist-new-item-text';
    this.btnConfirmDeleteChecklist = '.js-confirm';
    this.btnChangeList = 'div[class="button-link setting form-grid-child form-grid-child-threequarters"]';
    this.btnChangeBoard = 'div[class="button-link setting form-grid-child form-grid-child-full"]';
    this.btnSetPosition = 'div[class="button-link setting form-grid-child form-grid-child-quarter"]';
    this.submit = 'input.primary.wide.js-submit';
    this.closePage = '.icon-lg.icon-close.dialog-close-button.js-close-window';
    this.btnSelectList = 'select[class="js-select-list"]';
    this.btnSelectBoard = 'select[class="js-select-board"]';
    this.btnSelectPosition = 'select[class="js-select-position"]';
  }

  /**
   * This method create a new list.
   */
  addCheckList(nameChecklist) {
    commonActions.click(this.cardName);
    commonActions.click(this.addChecklist);
    commonActions.setValue(this.checklistTitle, nameChecklist);
    commonActions.click(this.btnAddChecklist);
  }

  /**
   * This method add item to checklist
   */
  addItemCheckList(description) {
    commonActions.click(this.newChecklistItem);
    commonActions.setValue(this.checklistNewItemText, description);
    commonActions.click(this.checklistNewItemText);
  }

  /**
   * This method delete check list
   */
  deleteCheckList() {
    commonActions.click(this.confirmDelete);
    commonActions.click(this.btnConfirmDeleteChecklist);
  }

  clickAddMember() {
    this.addMemberButton = '.button-link.js-change-card-members';
    commonActions.click(this.addMemberButton);
    return new members();
  }

  moveCard(data2change) {
    this.moveButton = '.button-link.js-move-card';
    commonActions.click(this.moveButton);
    this.setMoveCard(data2change);
    commonActions.click(this.submit);
    commonActions.click(this.closePage);
  }

  setMoveCard(data2change) {
    const move = {
      'BoardTitle': () => this.changeBoard(data2change.BoardTitle),
      'ListTitle': () => this.changeList(data2change.ListTitle),
      'Position': () => this.setPosition(data2change.Position)
    };
    Object.keys(data2change).forEach(key => {
      move[key].call();
    });
  }

  changeList(nameList) {
    commonActions.click(this.btnChangeList);
    const sb = $(this.btnSelectList);
    sb.selectByVisibleText(`${nameList}`);
    commonActions.click(this.btnChangeList);
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

module.exports = card;
