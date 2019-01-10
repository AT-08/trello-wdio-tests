'use strict';

const commonActions = require('../../core/ui/commonActions');

const card = require('../card/card.po');
const listActions = require('../dashboard/listActions.po');

/**
 * PageObject for a list in the dashboard.
 */
class list {
  /**
   * Constructor to set the locators.
   */
  constructor() {
    this.addAnotherCardButton = '.js-open-card-composer';
    this.cardTitleTextAreaInput = '.list-card-composer-textarea.js-card-title';
    this.addCardButton = '.js-add-card';
    this.listActionButton = '.list-header-extras-menu.dark-hover.js-open-list-menu.icon-lg.icon-overflow-menu-horizontal';
  }

  /**
   * This method create a card in a list.
   */
  createCard(cardName) {
    commonActions.click(this.addAnotherCardButton);
    commonActions.setValue(this.cardTitleTextAreaInput, cardName);
    commonActions.click(this.addCardButton);
  }

  /**
   * Method for select a card of a specified List.
   *
   * @param cardName Name of the card.
   * @param listTitle Title of the list.
   * @returns {card} Page Object.
   */
  selectCard(cardName, listTitle) {
    let cardOfList = `//textarea[@aria-label="${listTitle}"]
                      /ancestor::div[contains(@class, 'js-list-content')]
                      /descendant::span[contains(text(), "${cardName}")]`;
    commonActions.click(cardOfList);
    return new card();
  }

  /**
   *
   * @param nameCard to search.
   * @returns {boolean} does exist the card?
   */
  isThereCard(nameCard) {
    let text = browser.getText(`=${nameCard}`);
    return text === nameCard;
  }

  /**
   * This method archive a list.
   */
  clickListAction() {
    commonActions.click(this.listActionButton);
    return new listActions();
  }
}

module.exports = list;
