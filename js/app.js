const game = new Game();

/**
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('btn__reset').addEventListener('click', () => {
  game.startGame();
});

document.getElementById('qwerty').onclick = function(e) {
  if (e.target.tagName === 'BUTTON') {
    let button = e.target;
    game.handleInteraction(button);
  }
}
