'use strict';

const commonActions = require('../core/ui/commonActions');

/**
 * PageObject of the sideBar.
 */
class sideBar {
  /**
   * Constructor of set the elements to be used.
   */
  constructor() {
    this.createTeamButton = 'button[class="tab__tabButton__37WIj.tab__quiet__ed4jD"]';
    this.selectedBoardButton = 'a[class="tab__tab__15G2j"]';
    this.selectedHomeButton = 'a[class="tab__tabLink__3C9rw"]';

  }

  /**
   * This method as create team.
   * @param data data table input.
   * @returns {teamForm} .
   */
  createTeam(data) {
    CommonActions.click(this.createTeamButton);
    return new teamForm();
  }

  /**
   * This method selected board container.
   * @returns {boardContainer} .
   */
  selectBoardsContainer() {
    CommonActions.click(this.selectedBoardButton);
    return new boardContainer();
  }

  /**
   * This method selected home container.
   * @returns {homeContainer}
   */
  selectHomeContainer() {
    CommonActions.click(this.selectedHomeButton);
    return new homeContainer();
  }

  /**
   *This method selected a one team by title.
   * @param title input.
   * @returns {teamContainer} .
   */
  selectTeam(title) {
    var teamNameTab = by.cssContainingText('.tab__tabText__212hs', title);
    CommonActions.click(teamNameTab);
    return new teamContainer();
  }
}

module.exports = sideBar;
