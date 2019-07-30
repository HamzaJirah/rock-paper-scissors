// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');

// set the values of player and computer score to 0

  
const choices = document.querySelectorAll('.game-choice'),
      modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal-content');

// Play game 
function playGame () {
  // makeChoice();
  gameRandomChoice();
}


// computer random choice
choices.forEach(choice => {
  choice.addEventListener('click', gameRandomChoice);
})

function gameRandomChoice(e){
  let randomNum =  Math.floor(Math.random() * 3);
  let randomChoice = e.target;
  if(randomChoice && randomNum === 0){
    modal.style.display = 'block';
    modalContent.innerHTML = `
      <h1>You lost</h1>
      <p>Computer Chose ⬇️</p>
      <i class="${randomChoice.classList}"></i>
    `;
    playerScore.style.display = 'block';
    computerScore.style.display = 'block';
    playerScore--;
    computerScore++;
    console.log(`You lost ${randomNum}`)
  } else if (randomChoice && randomNum  === 1) {
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <h1>You Won</h1>
        <p>Computer Chose ⬇️</p>
        <i class="${randomChoice.classList}"></i>
      `;
      playerScore.style.display = 'block';
      computerScore.style.display = 'block';
      playerScore++;
      computerScore--;
      console.log(`You win ${randomNum}`)
  } else if(randomChoice && randomNum === 2) {
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <h1>You drew</h1>
        <p>Computer Chose ⬇️</p>
        <i class="${randomChoice.classList}"></i>
      `;
      playerScore.style.display = 'block';
      computerScore.style.display = 'block';
      playerScore--;
      computerScore--;
      console.log(`You drew ${randomNum}`)
  } 
}

// close modal 
modal.addEventListener('click', e => {
  if(e.target.className === 'modal'){
    modal.style.display = 'none';
  }
})

