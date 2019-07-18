# Project 4 Game Show App
For this project I created the Spider-Man Phrase Hunter game. The player has five tries to win the game. The player must solve the correct phrase in order to win the game. If the player does not solve the phrase correctly, they will lose hearts which will turn gray. After the player loses or wins, they can restart the game by pressing the button. I am going for "Exceeds Expectations".
 
Phrase Class:

-Includes constructor that receives a phrase parameter and initializes a phrase property set to the phrase
-Includes addPhraseToDisplay() method which adds the phrase to the gameboard
-Includes checkLetter() method which checks if a letter is in the phrase
-Includes showMatchedLetter() method which reveals the letter(s) on the board that matches the player's selection

Game CLass Constructor:

-Includes a constructor that initializes a missed property set to 0, a phrases property set to an array of five Phrase objects, and an     activePhrase property set to null initially
-Phrases added to the game only include letters and spaces

Game Class Method:

-Includes startGame() method that hides the start screen overlay, sets the activePhrase property to a random phrase, and calls the addPhraseToDisplay() method on the active phrase
-Includes getRandomPhrase() method that randomly retrieves one phrase from the phrases array
-Includes handleInteraction() method that:
   i. Disables the selected letter's onscreen keyboard button
  ii. If the phrase does not include the guessed letter, the wrong CSS class is added to the selected letter's keyboard button and the         removeLife() method is called
 iii. If the phrase includes the guessed letter, the chosen CSS class is added to the selected letter's keyboard button, the                   showMatchedLetter() method is called on the phrase, and the checkForWin() method is called. If the player has won the game, the         gameOver() method is called
-Includes checkForWin() method that checks if the player has revealed all of the letters in the active phrase
-Includes a removeLife() method that removes a life from the scoreboard (one of the liveHeart.png images is replaced with a lostHeart.png image), increments the missed property, and if the player has lost the game calls the gameOver() method
-Includes gameOver() method that displays a final "win" or "loss" message by showing the original start screen overlay styled with either the win or lose CSS class

app.js

-Clicking the "Start Game" button creates a new Game object and starts the game
-Clicking an onscreen keyboard button results in a call to the handleInteraction() method for the clicked keyboard button
-Clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called
-Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results in the handleInteraction() method being called for the associated onscreen keyboard button

Resetting the Gameboard:

-After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game

HTML & CSS

-Provided HTML and CSS is used
-App styles have been personalized and changes have been noted in the README.md file and the project submission notes
-Changes made:
    i. Added background images to the overlay, winning, and losing screen. 
   ii. Changed the colors of the on screen keyboard buttons.
  iii. Changed the colors of the fonts
   iv. Changed the colors of the on screen button 
    v. Changed text on h2 element
 
 
 
  
 
 
