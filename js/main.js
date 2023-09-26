// game functions

function initGame() {
  playerScore = 0;
  computerScore = 0;
  currentRound = 1;
  maxRounds = 5;
  game.classList.toggle('hide');
  popup.classList.toggle('hide');
  updateUi()
}

function playRound(playerSelection, computerSelection){
  // rules are formatted such as item[0] beats item[1]
  let rules = [ ['rock','scissors'],
                ['paper','rock'],
                ['scissors','paper'] ];

  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    outputText("It's a tie!");
    return;
  }
  let count = 0;
  rules.forEach((rule) => {
    console.log(count)
    if (rule.includes(playerSelection) && rule.includes(computerSelection)) {
      if (rule[0] === playerSelection) {
        playerScore += 1;
        let message = `You win! `;
        message += `${capitalize(rule[0])} beats ${ capitalize(rule[1]) }!`
        outputText(message);
        return;
      }
      computerScore += 1;
      let message = `You Lose! `;
      message += `${capitalize(rule[0])} beats ${ capitalize(rule[1]) } :c`
      outputText(message);
    }
  });
}

function getComputerChoice(){
  let choices = ['Rock','Paper','Scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
}

function gameOver() {
  let message = "";
  if (playerScore === computerScore) {
    message = `You tied with a score of ${ playerScore }`
  } else if (playerScore > computerScore) {
    message = `You win with a score of ${ playerScore }!`
  }

  message = `Computer wins with a score of ${ computerScore } :c`

  let popupTitle = document.querySelector('.popup-title');
  popupTitle.textContent = "Game Over";
  let popupMessage = document.querySelector('.popup-text');
  popupMessage.textContent = message;
  start.textContent = "Restart Game";
  popup.classList.toggle('hide');
  game.classList.toggle('hide');
  let output = document.querySelector('.output');
  output.replaceChildren();
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
let game = document.querySelector('.game');
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

let popup = document.querySelector('.popup-container');

let buttons = document.querySelectorAll('.btn');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
    if (currentRound < maxRounds) {
      currentRound += 1;
    } else {
      gameOver()
    }
    updateUi()
  });
});
// module.exports = {
//   playRound,
//   capitalize
// }