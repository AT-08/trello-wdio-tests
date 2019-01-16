'use strict';

const commonActions = require('../../core/ui/commonActions');
const dashboard = require('./dashboard.po.js');

/**
 * Page Object of the form for create a dashboard.
 */
class dashboardForm {

  constructor() {
    this.titleBoard = 'input[class="subtle-input"]';
    this.visibilityButton = 'button[class="subtle-chooser-trigger unstyled-button vis-chooser-trigger"]';
    this.publicButton = 'span[class="icon-sm icon-public"]';
    this.confirmPublicButton = 'input[class="js-confirm full primary"]';
    this.submit = 'button.primary';
  }

  createBoard(valuesBoard) {
    const fillValues = {
      'Title': () => this.setTitleBoard(valuesBoard.Title),
      'Privacy': () => this.setAccessBoard(valuesBoard.Privacy),
      'Background': () => this.setBackgroundBoard(valuesBoard.Background)
    };

    browser.call(() => {
      return Promise.all(Object.keys(valuesBoard).map( async key => {
        return fillValues[key].call();
      }));
    });

    commonActions.click(this.submit);
    commonActions.waitInvisibility(this.submit);
    return new dashboard();
  }

  setTitleBoard(name) {
    commonActions.waitVisibility(this.visibilityButton);
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
