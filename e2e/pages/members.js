'use strict';

const commonActions = require('../core/ui/commonActions');

class members {


  constructor() {
    this.findMemberInputText = by.css('.autocomplete-input');
    this.invitationMessageInput = by.css('.js-invitation-message');
    this.sendInvitationButton = by.css('.autocomplete-btn.primary');
  }

  /**
   * This method add/invite a member.
   * @param data .
   */
  addMember(any) {
    this.fillDataMember(data);
    CommonActions.click(this.sendInvitationButton);
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
  selectUser(string) {
    CommonActions.setValue(this.findMemberInputText, user);
    var memberContainer = by.cssContainingText('.full-name', user);
    CommonActions.waitVisibility(memberContainer);
    CommonActions.click(memberContainer);
  }

  /**
   * This method set a optional description when a owner tries to invite a member to a team.
   * @param description Input description.
   */
  setDescription(description) {
    CommonActions.setValue(this.invitationMessageInput, description);
  }


}

module.exports = members;
