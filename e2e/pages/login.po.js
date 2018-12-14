'use strict';

const CommonActions = require('../core/ui/commonActions');
const boardContainer = require('../pages/mainPage.js');

/**
 * This is the page for login to trello.
 */
class LoginPage {

  constructor(site) {
    browser.url(site);
    this.userNameTextfield = '#user';
    this.passwordTextField = '#password';
    this.loginButton = '#login';
  }

  /**
   * This method log-in to trello with a specified user.
   * @param userKeys Input name.
   * @returns {boardContainer} The PO of boardContainer.
   */
  loginToTrello(userKeys) {
    let user = CommonActions.getUserFromKey(userKeys);
    CommonActions.setValue(this.userNameTextfield, user.username);
    CommonActions.setValue(this.passwordTextField, user.password);
    CommonActions.operate(this.loginButton);
    return new boardContainer();
  }
}

module.exports = LoginPage;
