'use strict';
const member = require('../common/members.po');
const dashboardMenu = require('./dashboardMenu.po');
const commonActions = require('../../core/ui/commonActions');

/**
 * This is the PO of a selected dashboard.
 */
class dashboard {

  constructor() {
    this.addListBoton = '.placeholder';
    this.listNameInput = '.list-name-input';
    this.saveListNameButton = '//input[@class="primary mod-list-add-button js-save-edit"]';
  }

  /**
   *  this method create list
   * @param title parameter of input.
   */
  createList(title) {
    commonActions.click(this.addListBoton);
    commonActions.setValue(this.listNameInput, title);
    commonActions.click(this.saveListNameButton);
  }

  /**
   * This method invite a member to the current dashboard.
   * @returns {member} Class member.
   */
  inviteMember() {
    return new member();
  }

  /**
   * This method shows the menu option.
   * @returns {dashboardMenu} Class dashboardMenu.
   */
  showMenu() {
    return new dashboardMenu();
  }
}

module.exports = dashboard;
