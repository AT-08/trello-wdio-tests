'use strict';

const commonActions = require('../core/ui/commonActions');

class Board {
  constructor() {
    this.selectors = {
      'addIcon': 'a[class="header-btn js-open-add-menu"]',
      'addContainer': 'div[class="pop-over is-shown"]',
      'createTeam': 'a[class="js-new-org"]',
      'newTeamName': 'input[id="org-display-name"]',
      'createButton': 'input[class="primary wide js-save"]',
      'newTeam': 'h3[class="boards-page-board-section-header-name"]'
    };
  }

  onClickAddIcon() {
    commonActions.click(this.selectors.addIcon);
    commonActions.isElementVisible(this.selectors.addContainer);
    commonActions.click(this.selectors.createTeam);
  }

  setNewTeamName(name) {
    commonActions.setValue(this.selectors.newTeamName, name);
  }

  onClickCreate() {
    commonActions.click(this.selectors.createButton);
  }

  isNewTeamCreated() {
    return commonActions.isElementVisible(this.selectors.newTeam);
  }

}

module.exports = Board;
