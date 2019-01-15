'use strict';

const commonActions = require('../../core/ui/commonActions');

const memberCard = require('../../pages/common/memberCard.po');

class members {

  constructor() {
    this.findMemberInputText = 'input[class="autocomplete-input"]';
    this.invitationMessageInput = 'textarea[class="js-invitation-message]';
    this.sendInvitationButton = 'button[class="autocomplete-btn primary"]';
    //this.inviteButton = 'a[title="Invite To Board"]';
  }

  /**
   * This method add/invite a member.
   * @param data .
   */
  addAMember(data) {
    // if (browser.isVisible(this.inviteButton)) {
    //   console.log("there will be a click");
    //   commonActions.click(this.inviteButton);
    // }
    this.fillDataMember(data);
    commonActions.click(this.sendInvitationButton);
  }

  /**
   * This method add/invite a member to a card.
   */
  addMemberToCardButton() {
    return new memberCard();
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


  isMemberDashboard(member) {
    let memberName = commonActions.getUserFromKey(member);
    commonActions.pause();
    return browser.isExisting(`[title*="${memberName.username}"]`);
  }
}

module.exports = members;
