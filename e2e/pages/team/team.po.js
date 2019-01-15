'use strict';

const commonActions = require('../../core/ui/commonActions');
const member = require('../common/members.po');
const teamSetting = require('./teamSettings.po');
const teamBoard = require('./teamBoard.po');
const dashboardForm = require('../dashboard/dashboardForm.po');

/**
 * This is the PO of the team page.
 */
class team {
  constructor() {
    this.boardsTabPane = '[data-tab="boards"]';
    this.membersTabPane = '[data-tab="members"]';
    this.settingTabPane = '[data-tab="settings"]';
    this.sendInvitationButton = '.autocomplete-btn.primary';
    this.createNewBoardButton = '//div[contains(@class,"tabbed-pane-main-col")]/descendant::*[@class="board-tile mod-add"]';
  }

  /**
   * This method invite a member to the team.
   */
  inviteMember() {
    commonActions.click(this.membersTabPane);
    return new member();
  }

  /**
   * This method edit the current team.
   */
  editTeam() {
    commonActions.click(this.settingTabPane);
    return new teamSetting();
  }

  /**
   * This method verifies if exists a member in the team.
   *
   * @param member To verify.
   */
  isMember(member) {
    commonActions.click(this.membersTabPane);
    let memberName = commonActions.getUserFromKey(member);
    commonActions.pause();
    return browser.isExisting(`//div[@class="member-list-item-detail"]
            /descendant::span[contains(@title,"${memberName.username}")]`);
  }

  /**
   *
   */
  removeMember() {
    commonActions.click('a[class="option button-link remove-button"]');
    commonActions.click('.js-soft-remove');
  }

  /**
   * This Method create a board in the team container PO.
   */
  goToTeamBoard() {
    commonActions.click(this.boardsTabPane);
    return new teamBoard();
  }

}

module.exports = team;
