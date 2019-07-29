// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');

const choices = document.querySelectorAll('.game-choice');

// Play game 
const playGame = () => {
  
}

// loop through the choices
choices.forEach(choice => {
  choice.addEventListener('click', makeChoice)
})
