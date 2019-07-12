/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('hello'),
            new Phrase('bye'),
            new Phrase('win'),
            new Phrase('play'),
            new Phrase('game on')
        ];

        this.activePhrase = null;
    }
    startGame() {

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

    }
    gameOver() {

    }
}