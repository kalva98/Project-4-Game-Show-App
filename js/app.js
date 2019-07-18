/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



let game;

//Listener that listens for click on screen keyboard button
$('#qwerty .key').on('click', function (e) {
    game.handleInteraction(e)
})

//Listener to start the game and resets when the game is over
$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
    game.reset();
});

// Listener for keyboardgfht
document.addEventListener('keydown', function (event) {
    const pressedKey = event.key.toLowerCase();
    const alphabet = /[a-z]/;
    const keyClass = document.getElementsByClassName("key");
    if (alphabet.test(pressedKey)) {
        for (let key of keyClass) {
            if (key.innerText == pressedKey) {
                key.click();
            }
        }
    }
});