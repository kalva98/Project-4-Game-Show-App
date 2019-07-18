/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }
    //Add phrases 
    addPhraseToDisplay() {

        //Loop through phrase
        for (let i = 0; i < this.phrase.length; i++) {

            //Creates <li> for blank space
            let space = `<li class="space"> </li>`;

            //Creates <li> and hides letter
            let hideLetter = `<li class ="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
            if (this.phrase[i] === " ") {
                //Appends blank space to phrase ul
                $('#phrase ul').append(space);
            } else {
                //Appends characters to phrase ul
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
            //Return true if guess matches letter
            if (letter === phraseLetter) {
                return true;
            }
        } //Return false if letter does not match
        return false;
    }

    //Shows the letters on the board that the player guesses correct
    showMatchedLetter(letter) {
        //Selects the specific phrase ul of the letter pressed by the player 
        let $letters = $('#phrase ul .' + letter)

        //Removes hides class of selected letter
        $letters.removeClass('hide');

        //Adds show class of selected letter
        $letters.addClass('show');
    }
}