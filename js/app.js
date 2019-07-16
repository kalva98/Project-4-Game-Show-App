/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const phrase = new Phrase();


//const game = new Game();



// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
// };

//const game = new Game();

// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());
// logPhrase(game.getRandomPhrase());

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();



let game;

$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
});