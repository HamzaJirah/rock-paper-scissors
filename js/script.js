// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]'),
    player = playerChoice();
    computer = computerChoice();

const choices = document.querySelectorAll('.game-choice'),
      modal = document.querySelector('.modal');

// Create an empty object 
const gameChoice = {

}
// Play game 
function playGame () {
  makeChoice();
}

// loop through the choices
choices.forEach(choice => {
  choice.addEventListener('click', makeChoice)
})

// make choice
function makeChoice (choose) {
  
}


