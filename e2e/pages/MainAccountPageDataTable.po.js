'use strict';

const CommonActions = require('../core/ui/CommonActions');

const WAIT_EXIST = 30000;

class account {

    constructor() {
        this.titleBoard = 'input[class="subtle-input"]';
        this.submit = 'button[type="submit"]';
        this.createBoard = 'a[class="board-tile mod-add"]';
        this.colorcito = '';
        this.background = 'button[title='+this.colorcito+']';
    }

    clickCreateBoard() {
        browser.waitForExist('a[class="tab__tabLink__3C9rw tab__selected__1gsiC"]', WAIT_EXIST);
        CommonActions.operate(this.createBoard);
    }

    createNewBoard(name, bg) {
        this.background = 'button[title='+bg+']';
        browser.waitForExist('div[class="board-tile create-board-tile has-photo-background"]', WAIT_EXIST);
        CommonActions.setValue(this.titleBoard, name);
        CommonActions.operate(this.background);
        CommonActions.operate(this.submit);
    }
}

module.exports = account;
