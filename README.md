# Project 4 Game Show App
For this project I created the Spider-Man Phrase Hunter game. The player has five tries to win the game. The player must solve the correct phrase in order to win the game. If the player does not solve the phrase correctly, they will lose hearts which will turn gray. After the player loses or wins, they can restart the game by pressing the button. I am going for "Exceeds Expectations".
 
Phrase Class:
Includes constructor, addPhraseToDisplay() method, checkLetter() method, showMatchedLetter() method. 

Game CLass Constructor:
Includes a constructor. Phrases added to the game only include letters and spaces

Game Class Method:
Includes startGame() method, getRandomPhrase() method, handleInteraction() method, checkForWin() method, removeLife() method, gameOver() method. 

App.js:
Clicking the "Start Game" button creates a new Game object and starts the game. Clicking an onscreen keyboard button results in a call to the handleInteraction() method for the clicked keyboard button. Clicking the spaces between and around the onscreen keyboard buttons does not result in the handleInteraction() method being called. Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results in the handleInteraction() method being called for the associated onscreen keyboard button.

Resetting the Gameboard:
After a game is completed, the gameboard is reset so that clicking the "Start Game" button loads a new game

HTML & CSS:
Provided HTML and CSS is used. App styles have been personalized and changes have been noted in the README.md file and the project submission notes

Changes made:
Added background images to the overlay, winning, and losing screen. Changed the colors of the on screen keyboard buttons. Changed the colors of the fonts. Changed the colors of the on screen button. Changed text on h2 element
 
 
 
  
 
 
