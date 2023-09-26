const { playRound , capitalize } = require("./cachipun");

describe(playRound, () => {
  test('Player ties with rock', () => {
    expect(playRound('rock','rock')).toEqual("It's a tie!");
  });
  test('Player ties with paper', () => {
    expect(playRound('paper','paper')).toEqual("It's a tie!");
  });
  test('Player ties with scissors', () => {
    expect(playRound('scissors','scissors')).toEqual("It's a tie!");
  });

  test('Player win with rock', () => {
    expect(playRound('rock','scissors')).toEqual("You Won! Rock beats Scissors!");
  });
  test('Player win with paper', () => {
    expect(playRound('paper','rock')).toEqual("You Won! Paper beats Rock!");
  });
  test('Player win with scissors', () => {
    expect(playRound('scissors','paper')).toEqual("You Won! Scissors beats Paper!");
  });

  test('Player loses with rock', () => {
    expect(playRound('rock', 'paper')).toEqual("You Lose! Paper beats Rock :c");
  });
  test('Player loses with scissors', () => {
    expect(playRound('scissors','rock')).toEqual("You Lose! Rock beats Scissors :c");
  });
  test('Player loses with paper', () => {
    expect(playRound('paper', 'scissors')).toEqual("You Lose! Scissors beats Paper :c");
  });

  test('Input Case Insensitive', () => {
    expect(playRound('ROck', 'rock')).toEqual("It's a tie!")
  });
  test('Input Case Insensitive', () => {
    expect(playRound('rOck', 'rock')).toEqual("It's a tie!")
  });
  test('Input Case Insensitive', () => {
    expect(playRound('ROCK', 'rock')).toEqual("It's a tie!")
  });
});