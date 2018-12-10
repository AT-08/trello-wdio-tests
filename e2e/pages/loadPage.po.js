'use strict';

const CommonActions = require('../core/ui/commonActions');

class MainPage {

    goUrl(site) {
        CommonActions.openUrl(site);
    }

    getTitlePage() {
        return CommonActions.getTitleOfPage();
    }
}

module.exports = MainPage;
