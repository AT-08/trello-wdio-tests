'use strict';

const commonActions = require('../core/ui/commonActions');

class Team {
  constructor() {
    this.selectors = {
      'addTeamButton': 'a[class="header-btn js-open-add-menu"]'
    };
  }

  onClickAddTeam() {
    commonActions.operate(this.selectors.addTeamButton);
  }
}

module.exports = Team;
