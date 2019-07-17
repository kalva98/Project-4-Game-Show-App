/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase('spiderman'),
            new Phrase('mike morales'),
            new Phrase('dimensions'),
            new Phrase('peter parker'),
            new Phrase('with great power comes great responsibility')
        ];

        this.activePhrase = null;
    }

    startGame() {
        $('#phrase ul').empty()
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

    handleInteraction(e) {
        let letter = $(e.target).text();
        $(e.target).prop('disabled', true)

        if (game.activePhrase.checkLetter(letter)) {
            game.activePhrase.showMatchedLetter(letter)
            $(e.target).addClass('chosen');

            if (this.checkForWin()) {
                this.gameOver()
            }
        } else {
            this.removeLife()
            $(e.target).addClass('wrong')
        }
    }

    removeLife() {
        // let lives = $('#scoreboard li');
        let hearts = (document.querySelectorAll('img'));
        let gray = 'images/lostHeart.png';
        hearts[this.missed].src = gray
        this.missed++;
        if (this.missed === 5) {
            this.gameOver()
        }
    }

    checkForWin() {
        //returns false if there are any hidden letter, returns true if there are none
        return ($('#phrase ul .hide').length === 0);
    }

    gameOver() {
        //leaves game screen and returns to overlay
        $("#overlay").show();
        if (this.missed === 5) {
            overlay.className = "lose"
            $(".title").text("Game Over!");
        } else {
            overlay.className = "win"
            $(".title").text("You Win!");
        }

    }

    reset() {
        $('#overlay').className = "start";
        document.querySelectorAll(`img[src*=lost]`).forEach(hearts => hearts.src = 'images/liveHeart.png');
        $('#qwerty .key').prop('disabled', false);
        $('#qwerty .key').removeClass('chosen');
        $('#qwerty .key').removeClass('wrong');
    }
}