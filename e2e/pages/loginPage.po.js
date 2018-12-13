'use strict';

const CommonActions = require('../core/ui/commonActions');
const MainPage = require('../../pages/mainAccountPage.po.js');

class LoginPage {

    constructor() {
        this.userNameTextfield = '#user';
        this.passwordTextField = '#password';
        this.loginButton = '#login';
    }

    loginToTrello(username) {
        CommonActions.setValue(this.userNameTextfield, usrname);
        CommonActions.setValue(this.passwordTextField, pass);
        CommonActions.operate(this.loginButton);
        return new MainPage();
    }
}

module.exports = LoginPage;
