/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

$('#qwerty .key').on('click', function (e) {
    game.handleInteraction(e)
})

$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
    game.reset();
});