'use strict';

const commonActions = require('../core/ui/commonActions');

class sideBar {

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
