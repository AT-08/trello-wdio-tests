'use strict';

const commonActions = require('../core/ui/commonActions');

class closedBoardPage {

  constructor() {
    this.deleteBoardPermanentlyLink = 'a[class="quiet js-delete"]';
    this.confirmDeleteButton = 'input[class="js-confirm full negate"]';
  }

  deletePermanently() {
    commonActions.click(this.deleteBoardPermanentlyLink);
    commonActions.click(this.confirmDeleteButton);
  }
}

module.exports = closedBoardPage;
