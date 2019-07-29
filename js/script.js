// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]'),
    computer_choice = randomSelection();
  
const choices = document.querySelectorAll('.game-choice'),
      modal = document.querySelector('.modal');

// Play game 
function playGame () {
  makeChoice();
}

// convert nodelist to array
const gameChoice = Array.from(choices);
// loop through the choices
gameChoice.forEach(choice => {
  choice.addEventListener('click', makeChoice)
})

// make choice
function makeChoice (player_choice) {
  if(player_choice.target.classList.contains('fas')){
    modal.style.display = 'block';
  } 
}

// random number
function randomSelection(){
  return Math.floor(Math.random() * 3);
}


// close modal 
modal.addEventListener('click', e => {
  if(e.target.className === 'modal'){
    modal.style.display = 'none';
  }
})

