'use strict';

const EXPLICIT_TIMEOUT = 30000;
const config = require('../../core/ui/environment.config.json');

/**
 * CommonActionsRep class with CommonActionsRep Methods.
 */
class CommonActions {


  /**
   * Method to click a element.
   *
   * @param element Input object
   */
  static click(element) {
    browser.waitForVisible(element, EXPLICIT_TIMEOUT);
    browser.click(element);
  }

  /**
   * Method to set a value on text element.
   *
   * @param element Input object.
   * @param value Input value to set.
   */
  static setValue(element, value) {
    browser.waitForVisible(element, EXPLICIT_TIMEOUT);
    browser.setValue(element, value);
  }

  /**
   * Method for wait visibility of an object.
   *
   * @param element Input object.
   */
  static waitVisibility(element) {
    browser.waitForVisible(element, EXPLICIT_TIMEOUT);
  }

  /**
   * Method for submit a form.
   *
   * @param element Input object
   */
  static submitForm(element) {
    browser.waitForVisible(element);
    browser.submit(element);
  }

  /**
   * Method for get the text of an element.
   *
   * @param element Input object.
   * @returns {String|String[]} The text of the element.
   */
  static getText(element) {
    browser.waitForVisible(element, EXPLICIT_TIMEOUT);
    return browser.getText(element);
  }

  /**
   * Method of a tiny sleep.
   */
  static sleep() {
    const tinySleep = 500;
    browser.pause(tinySleep);
  }

  /**
   * This method extract the user credential from a json file using their respective key.
   * @param textInBrackets Input keys.
   * @returns {*} A user with their username and password.
   */
  static getUserFromKey(textInBrackets) {
    var keys = textInBrackets.match(/{([^)]+)}/)[1].split('.');
    let credentials = config[keys[0]];
    return credentials[keys[1]];
  }
}

module.exports = CommonActions;
