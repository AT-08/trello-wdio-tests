'use strict';

const commonActions = require('../core/ui/commonActions');

const card = require('../pages/card.po');

/**
 * PageObject for a list in the dashboard.
 */
class list {
  /**
   * Constructor to set the locators.
   */
  constructor() {
    this.cardTitleTextAreaInput = '.list-card-composer-textarea.js-card-title';
    this.addCardButton = '.js-add-card';
  }

  /**
   * This method create a card in a list.
   */
  createCard(cardName) {
    commonActions.setValue(this.cardTitleTextAreaInput, cardName);
    commonActions.click(this.addCardButton);
  }

  /**
   * This method select a specific card.
   *
   * @param title
   */
  selectCard(title) {
    this.cardBox = `.list-card-details.js-card-details ${title}`;
    commonActions.click(this.cardBox);
    return new card();
  }
}

module.exports = list;
