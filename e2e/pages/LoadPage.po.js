'use strict';

const TIME_PAUSE = 1000;

class MainPage {

    goUrl(site) {
        browser.url(site);
    }

    getTitlePage() {
        browser.pause(TIME_PAUSE);
        return browser.getTitle();
    }
}

module.exports = MainPage;
