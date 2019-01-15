'use strict';

const commonActions = require('../../core/ui/commonActions');

const card = require('../card/card.po');
const listActions = require('../dashboard/listActions.po');
const Header = require('../common/header.po');

const DEFAULT_PAUSE = 2000;

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
    commonActions.waitVisibility(this.addAnotherCardButton);
    commonActions.click(this.addAnotherCardButton);
    commonActions.waitVisibility(this.cardTitleTextAreaInput);
    commonActions.setValue(this.cardTitleTextAreaInput, cardName);
    commonActions.waitVisibility(this.addCardButton);
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
    browser.pause(DEFAULT_PAUSE);
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

  verifyMoveCard(moveSet, card) {
    let rightBoard = true;
    let rightList = true;
    let rightPosition = true;
    const move = {
      'BoardTitle': () => rightBoard = this.verifyBoard(card, moveSet.BoardTitle),
      'ListTitle': () => rightList = this.verifyList(card, moveSet.ListTitle),
      'Position': () => rightPosition = this.verifyPosition(moveSet.Position)
    };
    Object.keys(moveSet).forEach(key => {
      move[key].call();
    });
    return rightList && rightBoard && rightPosition;
  }

  verifyBoard(nameCard, BoardTitle) {
    Header.clickTrelloIcon();
    let board = `[class="board-tile-details-name"][title="${BoardTitle}"]`;
    commonActions.click(board);
    return browser.isExisting(`=${nameCard}`);
  }

  verifyList(nameCard, nameList) {
    let cardOfList = `//textarea[@aria-label="${nameList}"]
                      /ancestor::div[contains(@class, 'js-list-content')]
                      /descendant::span[contains(text(), "${nameCard}")]`;
    return browser.isExisting(cardOfList);
  }

  verifyPosition(position) {
    return position;
  }
}

module.exports = list;
