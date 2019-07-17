/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    addPhraseToDisplay() {

        //create li tags to hold letter and space
        for (let i = 0; i < this.phrase.length; i++) {

            //creates <li> for blank space
            let space = `<li class="space"> </li>`;

            //creates <li> and hides letter
            let hideLetter = `<li class ="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            if (this.phrase[i] === " ") {
                $('#phrase ul').append(space);
            } else {

                $('#phrase ul').append(hideLetter);
            }
        }
    }

    //Checking letter to see if it matches in the phrase
    checkLetter(letter) {
        //Loops thru every letter in phrase
        for (let i = 0; i < this.phrase.length; i++) {
            //storing each letter
            let phraseLetter = this.phrase[i];
            //return true if guess matches letter
            if (letter === phraseLetter) {
                return true;
            }
        } //return false if letter does not match
        return false;
    }

    //Shows the letters on the board that the player guesses correct
    showMatchedLetter(letter) {
        //selects the specific phrase ul of the letter pressed by the player 
        let $letters = $('#phrase ul .' + letter)

        //removes "hides" class of selected letter
        $letters.removeClass('hide');

        //adds "show" class of selected letter
        $letters.addClass('show');
    }
}