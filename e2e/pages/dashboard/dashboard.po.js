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
    this.addLitButtomGreen = '.primary.mod-list-add-button.js-save-edit';
    this.listNameInput = '.list-name-input';
    this.saveListNameButton = '//input[@class="primary mod-list-add-button js-save-edit"]';
    this.inviteMemberButton = 'a[title="Invite To Board"]';
  }

  /**
   *  this method create list
   * @param title parameter of input.
   */
  createList(title) {
    if (browser.isVisible(this.addListBoton)) {
      commonActions.click(this.addListBoton);
    } else {
      commonActions.click(this.addLitButtomGreen);
    }
    commonActions.setValue(this.listNameInput, title);
    commonActions.click(this.saveListNameButton);
    return new dashboard();
  }

  /**
   * This method invite a member to the current dashboard.
   * @returns {member} Class member.
   */
  inviteMember() {
    commonActions.click(this.inviteMemberButton);
    return new member();
  }

  /**
   * This method shows the menu option.
   * @returns {dashboardMenu} Class dashboardMenu.
   */
  showMenu() {
    return new dashboardMenu();
  }

  /**
   * Method verify if exist list
   * @param list name.
   */
  isCreatedList(title) {
    var list = `//textarea[contains(@aria-label,"${title}")]`;
    commonActions.waitVisibility(list);
    return browser.isExisting(list);
  }

  /**
   * Method to select a list
   * @param list name of the list to select.
   */
  selectList(list) {
    commonActions.click(`//textarea[@aria-label="${list}"]
                      /ancestor::div[contains(@class, 'list js-list-content')]
                      /descendant::a[contains(@class, '.list-header-extras-menu')]`);
  }

  verifyMoveList(moveSet) {
    let rightList = true;
    let rightPosition = true;
    const move = {
      'ListTitle': () => rightList = this.verifyList(moveSet.ListTitle),
      'Position': () => rightPosition = this.verifyPosition(moveSet.Position)
    };
    Object.keys(moveSet).forEach(key => {
      move[key].call();
    });
    return rightList && rightPosition;
  }

  verifyList(nameList) {
    let cardOfList = `//textarea[@aria-label="${nameList}"]
                      /ancestor::div[contains(@class, 'js-list-content')]`;
    return browser.isExisting(cardOfList);
  }

  verifyPosition(position) {
    return position;
  }
}

module.exports = dashboard;
