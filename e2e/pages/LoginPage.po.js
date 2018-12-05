'use strict';

const CommonActions = require('../core/ui/CommonActions');

class LoginPage {

    constructor() {
        this.userNameTextfield = '#user';
        this.passwordTextField = '#password';
        this.loginButton = '#login';
    }

    setEmailTextField(usrname) {
        CommonActions.setValue(this.userNameTextfield, usrname);
    }

    writePassword(pass) {
        CommonActions.setValue(this.passwordTextField, pass);
    }

    clickLoginAccount() {
        CommonActions.click(this.loginButton);
    }
}

module.exports = LoginPage;
