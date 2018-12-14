'use strict';

const commonActions = require('../core/ui/commonActions');

/**
 * This is the PO of the card page
 */
class card {
    constructor() {
        this.addCardButton = 'js-add-another-card';

        this.txtCardTitle = 'js-card-title';

        this.btnAddCard = 'js-add-card';

        this.optionsCard = 'active-card';

        this.btnDeleteCard = 'js-archive';
    }

    /**
     * This method delete the current card.
     */
    deleteCard() {
        commonActions.click(this.optionsCard);
        return commonActions.click(this.btnDeleteCard);
    }
}

module.exports = card;
