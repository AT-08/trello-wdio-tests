'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * PageObject for a list in the dashboard.
 */
class listActions {
  /**
   * Constructor to set the locators.
   */
  constructor() {
    this.archiveListButtom = 'a[class="js-close-list"]';
  }

  /**
   * This method create a card in a list.
   */
  archiveList() {
    commonActions.click(this.archiveListButtom);
  }
}

module.exports = listActions;

