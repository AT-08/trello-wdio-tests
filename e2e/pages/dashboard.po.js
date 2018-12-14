'use strict';

const list = require('../pages/boardForm.po.js');
const member = require('../pages/boardForm.po.js');
const dashboardMenu = require('../pages/boardForm.po.js');

/**
 * This is the PO of a selected dashboard.
 */
class Dashboard {
  /**
   * This method create a list in the current board.
   * @returns {BoardForm} Class boardForm.
   */
  createList() {
    return new list();
  }

  /**
   * This method invite a member to the current dashboard.
   * @returns {BoardForm} Class member.
   */
  inviteMember() {
    return new member();
  }

  /**
   * This method shows the menu option.
   * @returns {BoardForm} Class dashboardMenu.
   */
  showMenu() {
    return new dashboardMenu();
  }
}

module.exports = Dashboard;
