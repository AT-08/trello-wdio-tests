'use strict';

const CommonActions = require('../core/ui/commonActions');

class ClosedBoardPage {

  constructor() {
    this.deleteBoardPermanentlyLink = 'a[class="quiet js-delete"]';
    this.confirmDeleteButton = 'input[class="js-confirm full negate"]';
  }

  deletePermanently() {
    CommonActions.operate(this.deleteBoardPermanentlyLink);
    CommonActions.operate(this.confirmDeleteButton);
  }
}

module.exports = ClosedBoardPage;
