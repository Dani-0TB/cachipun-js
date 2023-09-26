// game functions

function initGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  maxRounds = 5;
  let game = document.querySelector('.game');
  game.classList.toggle('hide');
  start.classList.toggle('hide');
  updateUi()
}

function playRound(playerSelection, computerSelection){
  let rules = [ ['rock','scissors'],
                ['paper','rock'],
                ['scissors','paper'] ]

  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return "It's a tie!"
  }

  for (let i = 0; i < 3; i++) {
    if (rules[i].includes(playerSelection) && rules[i].includes(computerSelection)) {
      if (rules[i][0] === playerSelection) {
        return `You Won! ${ capitalize(playerSelection) } beats ${ capitalize(computerSelection) }!`;
      } else {
        return `You Lose! ${ capitalize(computerSelection) } beats ${ capitalize(playerSelection) } :c`;
      }
    }
  }
}

function getComputerChoice(){
  let choices = ['Rock','Paper','Scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

// helper functions

function updateUi() {
  playerScoreElement.textContent = `${ playerScore }`;
  computerScoreElement.textContent = `${ computerScore }`;
  currentRoundElement.textContent = `${ currentRound }/${ maxRounds }`;
}

function outputText(string) {
  let output = document.querySelector('.output')

  let text = document.createElement('p');
  text.textContent = string;
  text.classList.add('out-txt');

  output.appendChild(text);
  output.scrollTop = output.scrollHeight;
}

function capitalize(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function printWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return `Player wins with a score of ${ playerScore }`;
  } else if (computerScore > playerScore) {
    return `Computer wins with a socre of ${ computerScore }`;
  } else {
    return `Player and computer tied with a score of ${ playerScore }`;
  }
}

// Program Code
let playerScore;
let playerScoreElement = document.querySelector('#player-score');
let computerScore;
let computerScoreElement = document.querySelector('#computer-score');
let currentRound;
let currentRoundElement = document.querySelector('#current-round');
let maxRounds;

let start = document.querySelector('.start-btn');
start.addEventListener('click', () => {
  initGame()
});

let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    outputText(playRound(button.id, getComputerChoice()));
  });
});

// autostart game
initGame()

// module.exports = {
//   playRound,
//   capitalize
// }