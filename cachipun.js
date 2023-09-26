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

function game() {
  let computerSelection;
  let playerSelection;
  let validSelections = ['rock', 'paper', 'scissors'];
  let inputIsValid = false;
  let computerScore = 0;
  let playerScore = 0;

  for (let i = 0; i < 5; i++) {
    let round = i+1
    computerSelection = getComputerChoice();
    do {
      playerSelection = prompt(`ROUND ${ round } !  Plase write your selection (Rock, Paper or Scissors) `)
      if (validSelections.includes(playerSelection)) {
        inputIsValid = true;
        break;
      }
      alert("Invalid input try again...")
    } while (!inputIsValid);

    result = playRound(playerSelection,computerSelection);
    console.log(result);

    if (result.substring(0,6) === 'You Won') {
      playerScore += 1;
    } else if (result.substring(0,6) === 'You Lose') {
      computerScore += 1;
    }
  }
}

game()

module.exports = {
  playRound,
  capitalize
}