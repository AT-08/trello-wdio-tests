'use strict';

const list = require('./list.po');
const member = require('../common/members.po');
const dashboardMenu = require('./dashboardMenu.po');

/**
 * This is the PO of a selected dashboard.
 */
class dashboard {
  /**
   * This method create a list in the current board.
   * @returns {list} Class boardForm.
   */
  createList() {
    return new list();
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