'use strict';

const TIME_PAUSE = 2000;
const WAIT_FOR_CLICK = 60000;
const WAIT_FOR_SET = 30000;

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
}
module.exports = CommonActions;
