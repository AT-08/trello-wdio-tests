'use strict';

const commonActions = require('../../core/ui/commonActions');
const DEFAULT_PAUSE = 1000;
class memberCard {

  constructor() {
    this.findMemberInputText = '.js-search-mem';
  }

  isMember(data) {
    browser.pause(DEFAULT_PAUSE);
    let member = commonActions.getUserFromKey(data);
    this.userMemberIcon = `.card-detail-data.u-gutter [title*="${member.username}"]`;
    commonActions.pause();
    return browser.isExisting(this.userMemberIcon);
  }

  /**
   * This method add/invite a member.
   * @param data .
   */
  addMember(data) {
    this.fillDataMember(data);
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
    var memberContainer = `[class*="js-select-member"][title*="${user.username}"]`;
    commonActions.waitVisibility(memberContainer);
    commonActions.click(memberContainer);
  }
}

module.exports = memberCard;
