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
}

module.exports = team;
