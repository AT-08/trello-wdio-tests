'use strict';

const CommonActions = require('../core/ui/CommonActions');

class CreationPage {
    
    constructor() {
        this.nameBoard = 'input[class="subtle-input"]';
        this.visibilityButton = 'button[class="subtle-chooser-trigger unstyled-button vis-chooser-trigger"]';
        this.publicButton = 'span[class="icon-sm icon-public"]';
        this.confirmPublicButton = 'input[class="js-confirm full primary"]';
        this.color = '';
        this.background = 'button[title='+this.color+']';
        this.submit = 'button[type="submit"]';
    }

    createBoard(valuesBoard) {
        let fillValues = {
            'Title': () => this.setTitleBoard(valuesBoard.Title),
            'Privacy': () => this.setPrivacyBoard(valuesBoard.Privacy),
            'Background': () => this.setBackgroundBoard(valuesBoard.Background)
        };

        Object.keys(valuesBoard).forEach(key => {
            fillValues[key].call();
        });

        CommonActions.click(this.submit);
    }

    setTitleBoard(name) {
        CommonActions.setValue(this.nameBoard, name);
    }

    setBackgroundBoard(background) {
        this.background = 'button[title='+background+']';
        CommonActions.click(this.background);
    }

    setPrivacyBoard(privacy) {
        if(privacy === 'Public') {
            CommonActions.click(this.visibilityButton);
            CommonActions.click(this.publicButton);
            CommonActions.click(this.confirmPublicButton);
        }
    }
}

module.exports = CreationPage;
