'use strict';

const commonActions = require('../core/ui/commonActions');
const teamForm = require('../core/ui/commonActions');
const boardContainer = require('../');
const homeContainer = require('../');
const teamContainer = require('../');


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
  createTeam() {
    commonActions.click(this.createTeamButton);
    return new teamForm();
  }

  /**
   * This method selected board container.
   * @returns {boardContainer} .
   */
  selectBoardsContainer() {
    commonActions.click(this.selectedBoardButton);
    return new boardContainer();
  }

  /**
   * This method selected home container.
   * @returns {homeContainer}
   */
  selectHomeContainer() {
    commonActions.click(this.selectedHomeButton);
    return new homeContainer();
  }

  /**
   *This method selected a one team by title.
   * @param title input.
   * @returns {teamContainer} .
   */
  selectTeam(title) {
    var teamNameTab = `//*[contains(text(),"${title}")]/ancestor::a[contains(@class,'tab__tabLink__3C9rw')]`;
    commonActions.click(teamNameTab);
    return new teamContainer();
  }
}

module.exports = sideBar;
