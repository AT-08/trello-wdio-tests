'use strict';

const commonActions = require('../../core/ui/commonActions');
const BoardForm = require('../../pages/dashboard/dashboardForm.po');
const TeamForm = require('../../pages/team/teamForm.po');

/**
 * PageObject of the header of Trello.
 */
class createPlus {

  /**
   * Constructor for set the elements.
   */
  constructor() {
    this.createBoardOption = '.js-new-board';
    this.createTeamOption = '.js-new-org';
  }

  /**
   * Method for open PO DashboardForm and create a new board.
   */
  openBoardForm() {
    commonActions.pause();
    commonActions.click(this.createBoardOption);
    return new BoardForm();
  }

  /**
   * Method for open PO Team Form and create a new team.
   */
  createTeam() {
    commonActions.pause();
    commonActions.click(this.createTeamOption);
    return new TeamForm();
  }
}

module.exports = createPlus;
