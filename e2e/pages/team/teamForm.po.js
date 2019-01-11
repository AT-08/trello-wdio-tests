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
    this.teamNameInputText = 'input[class="js-autofocus js-display-name"]';
    this.descriptionOfTeamTextArea = 'textArea[id="org-desc"]';
    this.createTeamButton = 'input[class="primary wide js-save"]';
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
   * @param teamName Input.
   */
  setTeamName(teamName) {
    commonActions.setValue(this.teamNameInputText, teamName);
  }

  /**
   * Method for set the background.
   * @param background Input.
   */
  setDescriptionTeam(background) {
    commonActions.setValue(this.descriptionOfTeamTextArea, background);
  }
}

module.exports = teamForm;
