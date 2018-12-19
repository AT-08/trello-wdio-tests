'use strict';

const commonActions = require('../../core/ui/commonActions');

/**
 * PageObject of the header of Trello.
 */
class header {
  /**
   * Method for navigate to trello link.
   */
  static clickTrelloIcon() {
    this.trelloIcon = '.header-logo-default';
    commonActions.sleep();
    commonActions.click(this.trelloIcon);
  }
}

module.exports = header;
