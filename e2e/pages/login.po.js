'use strict';

const commonActions = require('../core/ui/commonActions');

class Login {
  constructor() {
    this.selectors = {
      'username': '#user',
      'password': '#password',
      'loginButton': '#login'
    };
  }

  setUsername(username) {
    commonActions.setValue(this.selectors.username, username);
  }

  setPassword(password) {
    commonActions.setValue(this.selectors.password, password);
  }

  submit() {
    commonActions.click(this.selectors.loginButton);
  }

  getTitlePage() {
    commonActions.getTitlePage();
  }
}

module.exports = Login;
