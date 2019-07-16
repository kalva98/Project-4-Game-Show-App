/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('eleven'),
            new Phrase('dustin'),
            new Phrase('demigorgan'),
            new Phrase('mike'),
            new Phrase('the upside down')
        ];

        this.activePhrase = null;
    }
    startGame() {
        //hiding the overlay
        $('#overlay').hide();

        //setting the active phrase to equal to the random phrase that was chosen
        this.activePhrase = this.getRandomPhrase();

        //calling the addPhraseToDisplay method which displays phrase to the board
        this.activePhrase.addPhraseToDisplay();


    }
    getRandomPhrase() {

        let num = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[num];
        return randomPhrase;
    }

    handleInteraction() {

    }
    removeLife() {

    }
    checkForWin() {
        let $hiddenLetter = ('phrase.ul .hide');
        
    }
    gameOver() {

    }
}