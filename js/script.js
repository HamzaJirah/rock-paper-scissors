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
      <h1>Lost</h1>
      <p>Your Choice ⬇️</p>
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
        <h1>Won</h1>
        <p>Your Choice ⬇️</p>
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
        <h1>Drew</h1>
        <p>Your Choice ⬇️</p>
        <i class="${randomChoice.classList}"></i>
      `;
      playerScore.style.display = 'block';
      computerScore.style.display = 'block';
      parseInt(playerScore.textContent --);
      parseInt(computerScore.textContent --);
      console.log(`You drew ${randomNum}`)
  } 
    
  // add reset button 
  resetButton();
}

// reset game 
function resetButton(){
  // create reset button
  let button = document.createElement('button');
  // add css class
  button.className = 'button-style';
  // create text node 
  let textNode = document.createTextNode('Reset Game')
  button.appendChild(textNode);
  // append button to modal content 
  modalContent.appendChild(button);

  // reset game 
  button.addEventListener('click', resetGame)
}

// reset game 
function resetGame(e){
  if(e.target.className = 'button-style'){
    modal.style.display = 'none';
    playerScore.style.display = 'none';
    computerScore.style.display = 'none';
    window.location.reload();
  }
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
    // modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
    // modalContent.style.color = '#fff';
    modalContent.innerHTML = `
      <h1>Possibilities</h1>
      <p>Win 😄</p>
      <p>Loose 😠</p>
      <p>Draw 😒</p>
    `;
  } else if(e.target.classList.contains('fa-home')){
      modal.style.display = 'block';
      // modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
      // modalContent.style.color = '#fff';
      modalContent.innerHTML = `
        <h1>Welcome to ⬇️</h1>
        <p>Rock ➡️<i class="fas fa-hand-rock" style="font-size: 1.8rem"></i></p>
        <p>Paper ➡️<i class="fas fa-hand-paper" style="font-size: 1.8rem"></i></p>
        <p>Scissors ➡️<i class="fas fa-hand-scissors" style="font-size: 1.8rem"></i></p>
      `;
  } else if(e.target.classList.contains('fa-info')){
      // modalContent.style.backgroundColor = 'rgb(57, 57, 248)';
      // modalContent.style.color = '#fff';
      modal.style.display = 'block';
      modalContent.innerHTML = `
        <h1>Rules</h1>
        <p>Same choice ➡️ draw</p>
        <p>Rock & Scissors ➡️ Rock wins</p>
        <p>Scissors & Paper ➡️ Scissors wins</p>
        <p>Paper & Rock ➡️ Paper wins</p>
      `;
  }
}


