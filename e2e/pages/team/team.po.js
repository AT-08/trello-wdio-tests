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
   * This method delete a member to the team.
   */
  newMember() {
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
    let memberName = commonActions.getUserFromKey(member.user);
    commonActions.pause();
    return browser.isExisting(`//*[contains(text(),"${memberName.username}")]`);
  }


  isNameTeam(nameTeam) {
    commonActions.waitVisibility(`//h1[contains(text(),"${nameTeam}")]`);
    return browser.isExisting(`//h1[contains(text(),"${nameTeam}")]`);
  }

  /**
   * this method remove member.
   */
  removeMember() {
    commonActions.click('a[class="option button-link remove-button"]');
    commonActions.click('.js-soft-remove');
  }


  /**
   * Method for click to Setting item list.
   */
  goToSettingTab() {
    commonActions.waitVisibility(this.settingTabPane);
    commonActions.click(this.settingTabPane);
    return new teamSetting();
  }


  clickSettings() {
    commonActions.click('.tabbed-pane-nav-item-button.js-org-account');
    return new teamSetting();
  }
}

module.exports = team;
