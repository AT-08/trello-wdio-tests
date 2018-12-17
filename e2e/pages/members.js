'use strict';

const commonActions = require('../core/ui/commonActions');

class members {


  constructor() {


    this.findMemberInputText = 'input[class="autocomplete-input"]';
    this.invitationMessageInput = 'textarea[class="js-invitation-message]';
    this.sendInvitationButton = 'button[class="autocomplete-btn.primary"]';
  }

  /**
   * This method add/invite a member.
   * @param data .
   */
  addMember(any) {
    this.fillDataMember(any);
    commonActions.click(this.sendInvitationButton);
  }

  /**
   * This method fills the members form with the available data.
   * @param data Input project data.
   */
  fillDataMember(data) {
    const fillProjectInformation = {
      user: () => this.selectUser(data.user),
      description: () => this.setDescription(data.description),
    };
    Object.keys(data).forEach(key => {
      fillProjectInformation[key].call();
    });
  }

  /**
   * This method selects a user from the search list.
   * @param user Specific user.
   */
  selectUser(user) {
    commonActions.setValue(this.findMemberInputText, user);
    var memberContainer = `//*[contains(text(),"${user}")]/ancestor::a[contains(@class,'.full-name')]`;
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
