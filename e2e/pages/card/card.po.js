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
    this.addMemberButton = 'button-link js-change-card-members';
    commonActions.click(this.addMemberButton);
    return new members();
  }
}

module.exports = card;
