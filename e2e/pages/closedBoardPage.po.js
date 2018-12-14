'use strict';

const CommonActions = require('../core/ui/commonActions');

class ClosedBoardPage {

  constructor() {
    this.deleteBoardPermanentlyLink = 'a[class="quiet js-delete"]';
    this.confirmDeleteButton = 'input[class="js-confirm full negate"]';
  }

  deletePermanently() {
    CommonActions.click(this.deleteBoardPermanentlyLink);
    CommonActions.click(this.confirmDeleteButton);
  }
}

module.exports = ClosedBoardPage;
