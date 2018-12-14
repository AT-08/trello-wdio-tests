'use strict';

const CommonActions = require('../core/ui/commonActions');
const Dashboard = require('../pages/dashboard.po.js');

class BoardForm {

  constructor() {
    this.titleBoard = 'input[class="subtle-input"]';
    this.visibilityButton = 'button[class="subtle-chooser-trigger unstyled-button vis-chooser-trigger"]';
    this.publicButton = 'span[class="icon-sm icon-public"]';
    this.confirmPublicButton = 'input[class="js-confirm full primary"]';
    this.color = '';
    this.background = 'button[title=' + this.color + ']';
    this.submit = 'button[type="submit"]';
  }

  createBoard(valuesBoard) {
    const fillValues = {
      'Title': () => this.setTitleBoard(valuesBoard.Title),
      'Privacy': () => this.setAccessBoard(valuesBoard.Privacy),
      'Background': () => this.setBackgroundBoard(valuesBoard.Background)
    };

    Object.keys(valuesBoard).forEach(key => {
      fillValues[key].call();
    });

    CommonActions.click(this.submit);
    return new Dashboard();
  }

  setTitleBoard(name) {
    CommonActions.setValue(this.titleBoard, name);
  }

  setBackgroundBoard(background) {
    this.background = 'button[title=' + background + ']';
    CommonActions.click(this.background);
  }

  setAccessBoard(accessAttribute) {
    if (accessAttribute === 'Public') {
      CommonActions.click(this.visibilityButton);
      CommonActions.click(this.publicButton);
      CommonActions.click(this.confirmPublicButton);
    }
  }

  searchBoard(title) {
    browser.waitForVisible(`div[title="${title}"]`);
    return browser.element(`div[title="${title}"]`);
  }
}

module.exports = BoardForm;
