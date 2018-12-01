const CommonActions = require('../core/ui/CommonActions');

class SignIn {
    constructor() {
        this.userNameTextField = '#credentials_username';
    }

    setUserNameTextField(username) {
        CommonActions.setValue(this.userNameTextField, username);
    }
}

module.exports = SignIn;
