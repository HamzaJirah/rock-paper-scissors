// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');

const choices = document.querySelectorAll('.game-choice'),
      


// Play game 
function playGame () {
  makeChoice();
}

// loop through the choices
choices.forEach(choice => {
  choice.addEventListener('click', makeChoice)
})

function makeChoice (choose) {
  
}

