'use strict';

const CommonActions = require('../core/ui/CommonActions');
const WAIT_EXIST = 10000;

class accountPublic {

    constructor() {
        this.titleBoard = 'input[class="subtle-input"]';
        this.submit = 'button[type="submit"]';
        this.createBoard = 'a[class="board-tile mod-add"]';
        this.visibilityButton = 'button[class="subtle-chooser-trigger unstyled-button vis-chooser-trigger"]';
        this.publicButton = 'span[class="icon-sm icon-public"]';
        this.confirmPublicButton = 'input[class="js-confirm full primary"]';
    }

    clickCreateBoard() {
        browser.waitForExist('a[class="tab__tabLink__3C9rw tab__selected__1gsiC"]', WAIT_EXIST);
        CommonActions.click(this.createBoard);
    }

    createNewBoard() {
        browser.waitForExist('div[class="board-tile create-board-tile has-photo-background"]', WAIT_EXIST);
        CommonActions.setValue(this.titleBoard, 'PublicBoard');
        CommonActions.click(this.visibilityButton);
        CommonActions.click(this.publicButton);
        CommonActions.click(this.confirmPublicButton);
        CommonActions.click(this.submit);
    }
}

module.exports = accountPublic;
