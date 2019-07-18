/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        //Set the missed property to 0
        this.missed = 0;
        this.phrases = [
            new Phrase('spiderman'),
            new Phrase('miles morales'),
            new Phrase('dimensions'),
            new Phrase('peter parker'),
            new Phrase('with great power comes great responsibility')
        ];
        //Set a property with a value of null
        this.activePhrase = null;
    }

    //Initializes Game
    startGame() {
        // Empties previous phrase
        $('#phrase ul').empty()
        //Hides the start screen overlay
        $('#overlay').hide();

        //Setting the active phrase to equal to the random phrase that was chosen
        this.activePhrase = this.getRandomPhrase();

        //Calling the addPhraseToDisplay method which displays phrase to the board
        this.activePhrase.addPhraseToDisplay();
    }

    //Selects and returns a random phrase 
    getRandomPhrase() {
        //Generates random number between 0 and this.phrase.length -1   
        let num = Math.floor(Math.random() * this.phrases.length);
        let randomPhrase = this.phrases[num];
        return randomPhrase;
    }

    //Method that controls most of the game logic
    handleInteraction(e) {
        //Store the value of the letter the player pressed
        let letter = $(e.target).text();
        //Disable the letter the player choose so it can’t be chosen again
        $(e.target).prop('disabled', true)

        //If the chosen letter matches the letter in the phrase
        if (game.activePhrase.checkLetter(letter)) {
            //Show the matched letter (unhides)
            game.activePhrase.showMatchedLetter(letter)
            //Give it the chosen class 
            $(e.target).addClass('chosen');

            //If player won
            if (this.checkForWin()) {
                //the game ends
                this.gameOver()
            }
            //If letter does not match
        } else {
            //Remove 1 heart
            this.removeLife()
            //Give it the ‘wrong' class
            $(e.target).addClass('wrong')
        }
    }

    //Removes life from the scoreboard
    removeLife() {
        //Store the value of 'img'
        let hearts = (document.querySelectorAll('img'));
        //Store the value of lost heart
        let gray = 'images/lostHeart.png';
        hearts[this.missed].src = gray
        //Missed guesses increase by 1
        this.missed++;
        //If missed guess is eaquals to 5
        if (this.missed === 5) {
            //Gameover
            this.gameOver()
        }
    }

    //Checks to see if all the letters are revealed
    checkForWin() {
        //Returns false if there are any hidden letter, returns true if there are none
        return ($('#phrase ul .hide').length === 0);
    }

    //Shows message if win or lose
    gameOver() {
        //Leaves game screen and returns to overlay
        $("#overlay").show();
        //If player has 5 misses
        if (this.missed === 5) {
            //Gives overlay lose class name
            overlay.className = "lose"
            //Shows losing message
            $(".title").text("You’re not Superman you know!");
        } else {
            //Gives overlay win class name
            overlay.className = "win"
            //Shows winning message
            $(".title").text("This is my gift , my curse. Who am I? I’m Spiderman.!");
        }

    }

    //Resets the keyboard
    reset() {
        $('#overlay').className = "start";
        document.querySelectorAll(`img[src*=lost]`).forEach(hearts => hearts.src = 'images/liveHeart.png');
        $('#qwerty .key').prop('disabled', false);
        //Remove all the chosen highlighted letters
        $('#qwerty .key').removeClass('chosen');
        //Remove all the wrong highlighted letters
        $('#qwerty .key').removeClass('wrong');
    }
}