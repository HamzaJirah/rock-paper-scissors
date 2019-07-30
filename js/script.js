// get reference to DOM elements
let playerScore = document.querySelector('[data-player]'),
    computerScore = document.querySelector('[data-computer]');

// set the values of player and computer score to 0

  
const choices = document.querySelectorAll('.game-choice'),
      modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal-content');

// Play game 
function playGame () {
  // play game
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
    parseInt(playerScore.textContent --);
    parseInt(computerScore.textContent ++);
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
      parseInt(playerScore.textContent ++);
      parseInt(computerScore.textContent --);
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
      parseInt(playerScore.textContent --);
      parseInt(computerScore.textContent --);
      console.log(`You drew ${randomNum}`)
  } 
    
  // add reset button 
  resetGame();
}

// reset game 
function resetGame(){
  // create reset button
  let button = document.createElement('button');
  // create text node 
  let textNode = document.createTextNode('Reset Game')
  button.appendChild(textNode);
  // append button to modal content 
  modalContent.appendChild(button);
}

// close modal 
modal.addEventListener('click', e => {
  if(e.target.className === 'modal'){
    modal.style.display = 'none';
  }
})

// menu icons reference
const menu = document.querySelectorAll('ul li i');
// loop through menu icons
menu.forEach(button => {
  button.addEventListener('click', menuIcons);
})


// menu icons
function menuIcons(e){
  if(e.target.classList.contains('fa-play')){
    modal.style.display = 'block';
    modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
    modalContent.style.color = '#fff';
    modalContent.innerHTML = `
      <h1>Possibilities</h1>
      <p>Win 😄</p>
      <p>Loose 😠</p>
      <p>Draw 😒</p>
    `;
  } else if(e.target.classList.contains('fa-home')){
      modal.style.display = 'block';
      modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
      modalContent.style.color = '#fff';
      modalContent.innerHTML = `
        <h1>Possibilities</h1>
        <p>Win 😄</p>
        <p>Loose 😠</p>
        <p>Draw 😒</p>
      `;
  } else if(e.target.classList.contains('fa-cog')){
      modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
      modalContent.style.color = '#fff';
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <h1>Possibilities</h1>
        <p>Win 😄</p>
        <p>Loose 😠</p>
        <p>Draw 😒</p>
      `;
  }
}


