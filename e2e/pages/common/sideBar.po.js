'use strict';

const commonActions = require('../../core/ui/commonActions');
const teamForm = require('../team/teamForm.po');
const boardContainer = require('../container/boardContainer.po');
const homeContainer = require('../container/homeContainer.po');
const teamContainer = require('../container/teamContainer.po');

/**
 * PageObject of the sideBar.
 */
class sideBar {
  /**
   * Constructor of set the elements to be used.
   */
  constructor() {
    this.createTeamButton = 'button[class="tab__tabButton__37WIj tab__quiet__ed4jD"]';
    this.selectedBoardButton = '[href*="/boards"]';
    this.selectedHomeButton = '.tab__tabLink__3C9rw.tab__selected__1gsiC"]';

  }

  /**
   * This method as create team.
   * @returns {teamForm} .
   */
  createTeam() {
    commonActions.waitVisibility(this.createTeamButton);
    commonActions.click(this.createTeamButton);
    return new teamForm();
  }

  /**
   * This method selected board container.
   * @returns {boardContainer} .
   */
  selectBoardsContainer() {
    commonActions.waitVisibility(this.selectedBoardButton);
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
    commonActions.pause();
    var teamNameTab = `//*[contains(text(),"${title}")]/ancestor::a[contains(@class,'tab__tabLink__3C9rw')]`;
    commonActions.click(teamNameTab);
    return new teamContainer();
  }

  existingTeam(name) {
    commonActions.pause();
    return browser.isExisting(`//*[contains(text(),"${name}")]/ancestor::a[contains(@class,'tab__tabLink__3C9rw')]`);
  }
}

module.exports = sideBar;
