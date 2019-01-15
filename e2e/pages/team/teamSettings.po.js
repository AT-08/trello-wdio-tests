'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * This is the PO of a create a team setting.
 */
class teamSettings {

  constructor() {
    this.settingTabPane = '[href*="/teamtestcreation/account"]';
    this.changeVisibilityButton = 'a[class="button-link u-text-align-center"]';
    this.confirmDeleteTeamButton = '.js-confirm';
    this.deleteButton = 'a[class="quiet-button"]';
  }

  /**
   * This method change the visibility of team.
   */
  changeVisibility(privacy) {
    commonActions.click(this.settingTabPane);
    commonActions.click(this.changeVisibilityButton);
    const privacyLocator = `//span[@class="icon-sm icon-${privacy}"]/parent::a`;
    commonActions.click(privacyLocator);
  }

  /**
   * This method delete the team.
   */
  deleteTeam() {
    commonActions.click(this.deleteButton);
    commonActions.click(this.confirmDeleteTeamButton);
  }
}

module.exports = teamSettings;


