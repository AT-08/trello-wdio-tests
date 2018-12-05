'use strict';

const CommonActions = require('../core/ui/CommonActions');

const WAIT_FOR_CLICK = 10000;
const WAIT_FOR_CREATE = 30000;

class account {

    constructor() {
        this.titleBoard = 'input[class="subtle-input"]';
        this.submit = 'button[type="submit"]';
        this.createBoard = 'a[class="board-tile mod-add"]';
    }

    clickCreateBoard() {
        browser.waitForExist('a[class="tab__tabLink__3C9rw tab__selected__1gsiC"]', WAIT_FOR_CLICK);
        CommonActions.click(this.createBoard);
    }

    createNewBoard() {
        browser.waitForExist('div[class="board-tile create-board-tile has-photo-background"]', WAIT_FOR_CREATE);
        CommonActions.setValue(this.titleBoard, 'DanteBoard');
        CommonActions.click(this.submit);
    }
}

module.exports = account;
