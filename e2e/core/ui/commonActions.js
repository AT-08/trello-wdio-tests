'use strict';

const config = require('../../../environment.json');

const EXPLICIT_TIMEOUT = 240000;
const DEFAULT_PAUSE = 1000;

/**
 * CommonActions class with common actions methods.
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
   * Method for wait invisibility of an object.
   *
   * @param element Input object.
   */
  static waitInvisibility(element) {
    browser.waitForVisible(element, EXPLICIT_TIMEOUT, true);
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
   * Method of a tiny pause.
   */
  static pause(tinySleep = DEFAULT_PAUSE) {
    browser.pause(tinySleep);
  }

  /**
   * This method extract the user credential from a json file using their respective key.
   * @param textInBrackets Input keys.
   * @returns {*} A user with their username and password.
   */
  static getUserFromKey(textInBrackets) {
    try {
      var keys = textInBrackets.match(/{([^)]+)}/)[1].split('.');
      let credentials = config[keys[0]];
      return credentials[keys[1]];
    } catch (e) {
      throw `Isnt a key="${textInBrackets}"`;
    }
  }
}

module.exports = CommonActions;
