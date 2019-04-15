class Phrase {
  constructor(phrase){
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Function to take random phrase and print it to the screen
   * with appropriate classes.
   */
  addPhraseToDisplay(){
		this.phrase.split('').forEach(phraseLetter => {
			const li = document.createElement('li');
			document.querySelector("#phrase ul").appendChild(li);
			li.textContent = phraseLetter;
			if (phraseLetter !== ' ') {
        li.classList.add('letter', 'hide', phraseLetter)
      } else {
        li.classList.add('space');
      }
		})
  }

  /**
   * Checking if a letter is in the phrase
   */
  checkLetter(target){
    if (this.phrase.includes(target)) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Shows matched letter
   */
  showMatchedLetter(target){
    let letterFound = null;
    let letter = document.getElementsByClassName('letter');
    for (let i = 0; i < letter.length; i++) {
      if (letter[i].textContent.toLowerCase() == target) {
        letter[i].classList.add('show');
        letter[i].classList.remove('hide');
        letterFound = letter[i].textContent;
      }
    }
  };
}
