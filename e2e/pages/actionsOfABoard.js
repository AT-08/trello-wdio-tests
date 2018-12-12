'use strict';

const CommonActions = require('../core/ui/commonActions');

class CreationPage {

  constructor() {
    this.titleBoard = 'input[class="subtle-input"]';
    this.visibilityButton = 'button[class="subtle-chooser-trigger unstyled-button vis-chooser-trigger"]';
    this.publicButton = 'span[class="icon-sm icon-public"]';
    this.confirmPublicButton = 'input[class="js-confirm full primary"]';
    this.color = '';
    this.background = 'button[title='+this.color+']';
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

    CommonActions.operate(this.submit);
  }

  setTitleBoard(name) {
    CommonActions.setValue(this.titleBoard, name);
  }

  setBackgroundBoard(background) {
    this.background = 'button[title='+background+']';
    CommonActions.operate(this.background);
  }

  setAccessBoard(accessAttribute) {
    if (accessAttribute === 'Public') {
      CommonActions.operate(this.visibilityButton);
      CommonActions.operate(this.publicButton);
      CommonActions.operate(this.confirmPublicButton);
    }
  }

  searchBoard(title) {
    browser.waitForVisible(`div[title="${title}"]`);
    return browser.element(`div[title="${title}"]`);
  }
}

module.exports = CreationPage;
