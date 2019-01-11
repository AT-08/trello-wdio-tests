'use strict';

const commonActions = require('../../core/ui/commonActions');
const member = require('../common/members.po');
const teamSetting = require('./teamSettings.po');

/**
 * This is the PO of the team page.
 */
class team {
  constructor() {
    this.boardsTabPane = '[data-tab="boards"]';
    this.membersTabPane = '[data-tab="members"]';
    this.settingTabPane = '[data-tab="settings"]';
    this.sendInvitationButton = '.autocomplete-btn.primary';
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

  isNameTeam(nameTeam) {
    commonActions.waitVisibility(`//h1[contains(text(),"${nameTeam}")]`);
    return browser.isExisting(`//h1[contains(text(),"${nameTeam}")]`);
  }
}

module.exports = team;
