// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');

const choices = document.querySelectorAll('.game-choice'),
      playerChoice = document.querySelector('.fa-male'),
      computerChoice = document.querySelector('.fa-desktop');                  

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


