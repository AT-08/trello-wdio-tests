'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboard = require('./dashboard.po.js');

/**
 * Page Object of the form for create a dashboard.
 */
class dashboardForm {

  constructor() {
    this.titleBoard = 'input[class="subtle-input"]';
    this.visibilityButton = 'span[class="icon-sm icon-private"]';
    this.publicButton = 'span[class="icon-sm icon-public"]';
    this.confirmPublicButton = 'input[class="js-confirm full primary"]';
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

    commonActions.click(this.submit);
    commonActions.waitInvisibility(this.submit);
    return new dashboard();
  }

  setTitleBoard(name) {
    commonActions.setValue(this.titleBoard, name);
  }

  setBackgroundBoard(background) {
    this.background = `button[title="${background}"]`;
    commonActions.click(this.background);
  }

  setAccessBoard(accessAttribute) {
    if (accessAttribute === 'Public') {
      commonActions.click(this.visibilityButton);
      commonActions.click(this.publicButton);
      commonActions.click(this.confirmPublicButton);
    }
  }

  searchBoard(title) {
    browser.waitForVisible(`div[title="${title}"]`);
    return browser.element(`div[title="${title}"]`);
  }
}

module.exports = dashboardForm;
