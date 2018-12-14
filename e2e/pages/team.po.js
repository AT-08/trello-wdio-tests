'use strict';

const member = require('../pages/member.po.js');
const teamSetting = require('../pages/teamSetting.po.js');

/**
 * This is the PO of the team page.
 */
class team {
  /**
   * This method invite a member to the team.
   * @param memberName Input member name.
   */
  inviteMember() {
    return new member();
  }

  /**
   * This method edit the current team.
   */
  editTeam() {
    return new teamSetting();
  }
}

module.exports = team;
