'use strict';

const commonActions = require('../../core/ui/commonActions');
const team = require('./team.po');

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
    this.descriptionOfTeamTextArea = '[id="org-desc"]';
    this.createTeamButton = '.js-save';
  }

  /**
   * Method for create a team with title and description.
   * @param data Input info.
   */
  createTeam(data) {
    const fillValues = {
      'teamName': () => this.setTeamName(data.teamName),
      'description': () => this.setDescriptionTeam(data.description)
    };
    Object.keys(data).forEach(key => {
      fillValues[key].call();
    });

    commonActions.click(this.createTeamButton);
    return new team();
  }

  /**
   * Method for set the team name.
   * @param name Input.
   */
  setTeamName(name) {
    commonActions.setValue(this.teamNameInputText, data.teamName);
  }

  /**
   * Method for set the background.
   * @param background Input.
   */
  setDescriptionTeam(background) {
    commonActions.setValue(this.descriptionOfTeamTextArea, data.description);
  }
}

module.exports = teamForm;
