'use strict';

const WAIT_TIME = 30000;

class Board {

    constructor() {
        this.board = '#board';
    }

    isDashboardCreated() {
        browser.waitForExist(this.board, WAIT_TIME);
    }

    pageTitle() {
        return browser.getTitle();
    }
}

module.exports = Board;