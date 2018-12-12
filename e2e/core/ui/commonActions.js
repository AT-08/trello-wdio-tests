'use strict';

const TIME_PAUSE = 2000;
const WAIT_FOR_CLICK = 60000;
const WAIT_FOR_SET = 30000;
// const WAIT_VISIBILITY = 10000;

/**
* CommonActionsRep class with CommonActionsRep Methods.
*/
class CommonActions {

  /**
  * Method to set a value on text element.
  *
  * @param element
  */
  static operate(element) {
    browser.pause(TIME_PAUSE);
    browser.waitForVisible(element, WAIT_FOR_CLICK);
    browser.click(element);
  }

  /**
  * Method to set a value on text element.
  *
  * @param element
  * @param value
  */
  static setValue(element, value) {
    browser.waitForVisible(element, WAIT_FOR_SET);
    browser.setValue(element, value);
  }

  /**
  * Method to open the browser with a URL.
  *
  * @param site is the URL.
  */
  static loadPage(site) {
    browser.url(site);
  }

  static getTitlePage() {
    browser.pause(TIME_PAUSE);
    return browser.getTitle();
  }

  static isElementCreated(element) {
    return browser.waitForExist(element, WAIT_FOR_SET);
  }

  static isElementVisible(element) {
    browser.pause(TIME_PAUSE);
    return browser.waitForVisible(element, WAIT_FOR_SET);
  }

  static getElementValue(element) {
    this.isElementVisible(element);
    return browser.getValue(element);
  }

  /**
  * Method that returns the title of the current web page.
  *
  * @returns {*} title of the current web page.
  */
  static getTitleOfPage() {
    browser.pause(TIME_PAUSE);
    return browser.getTitle();
  }
}
module.exports = CommonActions;
