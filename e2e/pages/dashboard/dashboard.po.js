'use strict';

const commonActions = require('../../core/ui/commonActions');

const list = require('../../pages/dashboard/list.po');
const member = require('../../pages/common/members.po');
const dashboardMenu = require('../../pages/dashboard/dashboardMenu.po');
const card = require('../../pages/card/card.po');

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

  /**
   * Method for select a card of a specified List.
   *
   * @param cardName Name of the card.
   * @param listTitle Title of the list.
   * @returns {card} Page Object.
   */
  selectCard(cardName, listTitle) {
    let cardOfList = `//textarea[@aria-label="${listTitle}"]
                      /ancestor::div[contains(@class, 'js-list-content')]
                      /descendant::span[contains(text(), "${cardName}")]`;
    commonActions.click(cardOfList);
    return new card();
  }
}

module.exports = dashboard;
