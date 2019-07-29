// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');
  
const choices = document.querySelectorAll('.game-choice'),
      choices_1 = document.querySelectorAll('.choice .fas'),
      modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal-content');

// Play game 
function playGame () {
  makeChoice();
  compRandomChoice();
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
    modalContent.innerHTML = `
      <h1>Developing game...</h1>
      <i class="${player_choice.target.classList}"></i>
    `;
  }
}

// computer random choice
choices_1.forEach(choice => {
  choice.addEventListener('click', compRandomChoice);
})

function compRandomChoice(e){
  let randomNum =  Number(Math.floor(Math.random() * 3));
  let randomChoice = e.target;
  if(randomChoice && randomNum === 0){
    console.log(`You lost ${randomNum}`)
  } else if (randomChoice && randomNum  === 1) {
    console.log(`You win ${randomNum}`)
  } else if(randomChoice && randomNum === 2) {
    console.log(`You drew ${randomNum}`)
  } 
}



// random number
// function randomSelection(){
//   return Math.floor(Math.random() * 3);
// }


// close modal 
modal.addEventListener('click', e => {
  if(e.target.className === 'modal'){
    modal.style.display = 'none';
  }
})

