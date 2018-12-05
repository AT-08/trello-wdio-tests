'use strict';

class MainPage {

    constructor() {
        this.IdontKnow = '';
    }

    goUrl(site) {
        browser.url(site);
    }
}

module.exports = MainPage;
