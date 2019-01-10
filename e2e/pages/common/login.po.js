'use strict';

const commonActions = require('../../core/ui/commonActions');
const boardContainer = require('../container/boardContainer.po');

/**
 * This is the page for login to trello.
 */
class login {

  static isLoggedIn(site) {
    browser.url(site);
    if (browser.isExisting('#header')) {
      console.log('Logged');
    } else {
      this.userNameTextfield = '#user';
      this.passwordTextField = '#password';
      this.loginButton = '#login';
    }
  }

  /**
   * This method log-in to trello with a specified user.
   * @param userKeys Input name.
   * @returns {boardContainer} The PO of boardContainer.
   */
  static loginAs(userKeys) {
    let user = commonActions.getUserFromKey(userKeys);
    commonActions.setValue(this.userNameTextfield, user.username);
    commonActions.setValue(this.passwordTextField, user.password);
    commonActions.click(this.loginButton);
    return new boardContainer();
  }
}

module.exports = login;
