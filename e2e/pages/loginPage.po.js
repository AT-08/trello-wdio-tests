'use strict';

const CommonActions = require('../core/ui/commonActions');
const MainPage = require('../pages/mainPage.js');

/**
 * This is the page for login to trello.
 */
class LoginPage {

  constructor() {
    this.userNameTextfield = '#user';
    this.passwordTextField = '#password';
    this.loginButton = '#login';
  }

  /**
   * This method log-in to trello with a specified user.
   * @param user Input name.
   * @returns {MainPage} The PO of MainPage.
   */
  loginToTrello(user) {
    CommonActions.setValue(this.userNameTextfield, user.username);
    CommonActions.setValue(this.passwordTextField, user.password);
    CommonActions.operate(this.loginButton);
    return new MainPage();
  }
}

module.exports = LoginPage;
