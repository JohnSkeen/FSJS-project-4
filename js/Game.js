class Game {
  constructor(){
    this.missed = 0;
    this.phrases = [
      'Close Encounters of the Third Kind',
      'Elvis Has Left The Building',
      'Lions and Tigers and Bears oh my',
      'Along came a spider and sat down beside her',
      'A Song of Ice and Fire'
    ];
    this.activePhrase = null;
  }

  startGame(){
    this.resetTheGame();
    document.getElementById('overlay').style.display = 'none';
    this.activePhrase = new Phrase(this.getRandomPhrase());
    this.activePhrase.addPhraseToDisplay();
  }

  resetTheGame() {
    document.getElementById('btn__reset').addEventListener('click', () => {
      window.location.reload();
    });
  }

  getRandomPhrase(){
    let phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
    return phrase;
  }

  handleInteraction(button){
    let letter = button.textContent;
    if (this.activePhrase.checkLetter(letter)) {
      this.activePhrase.showMatchedLetter(letter);
      button.classList.add('chosen');
      button.disabled = true;
      this.checkForWin();
    } else {
      button.classList.add('wrong');
      button.disabled = true;
      this.removeLife();
    }
  }

  removeLife(){
    let health = document.getElementsByTagName('img');
    this.missed++;
    if (health[this.missed]) {
      health[5 - this.missed].src = 'images/lostHeart.png';
    }
    this.gameOver();
  }

  checkForWin(){
    console.log("checking game")
    let overlay = document.getElementById('overlay');
    let show = document.getElementsByClassName('show');
    let letter = document.getElementsByClassName('letter');
    let title = document.getElementById('game-over-message');
    let buttonText = document.getElementById('btn__reset');
    if (show.length === letter.length) {
      document.getElementById('overlay').style.display = 'flex';
      overlay.classList.add('win');
      overlay.classList.remove('start');
      overlay.classList.remove('lose');
      title.textContent = 'You Win!';
      buttonText.textContent = 'Try again?';
    }
  }

  gameOver(){
    console.log("checking game over")
    let overlay = document.getElementById('overlay');
    let title = document.getElementById('game-over-message');
    let buttonText = document.getElementById('btn__reset');
    if (this.missed === 5)
    document.getElementById('overlay').style.display = 'flex';
    overlay.classList.add('lose');
    overlay.classList.remove('start');
    overlay.classList.remove('win');
    title.textContent = 'Uh Oh, You Lost!';
    buttonText.textContent = 'Try again?';
  }
};
