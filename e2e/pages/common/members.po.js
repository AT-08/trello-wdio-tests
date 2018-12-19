'use strict';

const commonActions = require('../../core/ui/commonActions');

class members {

  constructor() {
    this.findMemberInputText = 'input[class="autocomplete-input"]';
    this.invitationMessageInput = 'textarea[class="js-invitation-message]';
    this.sendInvitationButton = 'button[class="autocomplete-btn primary"]';
  }

  /**
   * This method add/invite a member.
   * @param data .
   */
  addMember(data) {
    this.fillDataMember(data);
    commonActions.click(this.sendInvitationButton);
    commonActions.waitInvisibility(this.sendInvitationButton);
  }

  /**
   * This method fills the members form with the available data.
   * @param data Input project data.
   */
  fillDataMember(data) {
    const fillProjectInformation = {
      user: () => this.selectUser(data),
      description: () => this.setDescription(data.description),
    };
    Object.keys(data).forEach(key => {
      fillProjectInformation[key].call();
    });
  }

  /**
   * This method selects a data from the search list.
   * @param data Specific data.
   */
  selectUser(data) {
    let user = commonActions.getUserFromKey(data.user);
    commonActions.setValue(this.findMemberInputText, user.username);
    var memberContainer = `[title*="${user.username}"]`;
    commonActions.waitVisibility(memberContainer);
    commonActions.click(memberContainer);
  }

  /**
   * This method set a optional description when a owner tries to invite a member to a team.
   * @param description Input description.
   */
  setDescription(description) {
    commonActions.setValue(this.invitationMessageInput, description);
  }
}

module.exports = members;
