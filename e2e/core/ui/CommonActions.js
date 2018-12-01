'use strict';
const TIME_TO_WAIT = 30000;

/**
 * CommonActions class with CommonActions Methods.
 */
class CommonActions {

    /**
     * Method to click on element.
     *
     * @param element
     * @param value
     */
    static setValue(element, value) {
        browser.waitForVisible(element, TIME_TO_WAIT);
        browser.element(element).setValue(value);
    }
}

module.exports = CommonActions;
