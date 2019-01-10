'use strict';

const commonActions = require('../../core/ui/commonActions');
const boardContainer = require('../container/boardContainer.po');

/**
 * This is the page for login to trello.
 */
class login {

  constructor(site) {
    browser.url(site);
    browser.waitForVisible('#user');
    this.userNameTextfield = '#user';
    this.passwordTextField = '#password';
    this.loginButton = '#login';
  }

  /**
   * This method log-in to trello with a specified user.
   * @param userKeys Input name.
   * @returns {boardContainer} The PO of boardContainer.
   */
  loginAs(userKeys) {
    let user = commonActions.getUserFromKey(userKeys);
    commonActions.setValue(this.userNameTextfield, user.username);
    commonActions.setValue(this.passwordTextField, user.password);
    commonActions.click(this.loginButton);
    return new boardContainer();
  }
}

module.exports = login;
