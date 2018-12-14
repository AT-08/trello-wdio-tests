'use strict';

const commonActions = require('../core/ui/commonActions');

class sideBar {

  constructor() {
    this.selectors = {
      'createTeamButton': 'button[class="tab__tabButton__37WIj tab__quiet__ed4jD"]',
      'selectedBoardButton': 'a[class="tab__tab__15G2j"]',
      'selectedHomeButton': 'a[class="tab__tabLink__3C9rw"]',


    };
  }
  createTeam(data) {



    return new teamForm();
  }

  selectBoardsContainer() {
    return new boardContainer();
  }

  selectHomeContainer() {
    return new homeContainer();
  }

  selectTeam(title) {
    return new teamContainer();
  }

}

module.exports = sideBar;
