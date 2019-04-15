const game = new Game();

/**
 * Listens for click on `btn__reset` and calls startGame() on game object
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
});

/**
 * Listens for click on `qwerty` and calls handlerINteraction() on game object
 */
document.getElementById('qwerty').onclick = function(e) {
  if (e.target.tagName === 'BUTTON') {
    let button = e.target;
    game.handleInteraction(button);
  }
}
