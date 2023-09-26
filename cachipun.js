function getComputerChoice(){
  let choices = ['Rock','Paper','Scissors'];
  let choice = Math.floor(Math.random() * 3);
  return choices[choice];
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

module.exports = {
  playRound,
  capitalize
}