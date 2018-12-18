'use strict';

const commonActions = require('../core/ui/commonActions');
const team = require('../');

/**
 * PageObject of the Form to create a team.
 */
class teamForm {

  /**
   * Constructor for set the locators.
   */
  constructor() {
    this.createTeamTab = '.tab__quiet__ed4jD';
    this.teamNameInputText = '.js-autofocus.js-display-name';
    this.descriptionOfTeamTextArea = 'org-desc';
    this.createTeamButton = '.js-save';
  }

  /**
   * Method for create a team with title and description.
   * @param data Input info.
   */
  createTeam(data) {
    commonActions.click(this.createTeamTab);
    commonActions.setValue(this.teamNameInputText, data.title);
    commonActions.setValue(this.descriptionOfTeamTextArea, data.description);
    commonActions.click(this.createTeamButton);
    return new team();
  }
}

module.exports = teamForm;
