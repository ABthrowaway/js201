/*jshint esversion: 6 */
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(player1, player2) {
  if (player1 == "rock" && player2 == "rock") {
    return "draw";
  } else if (player1 == "rock" && player2 == "paper") {
    return "player2";
  } else if (player1 == "rock" && player2 == "scissors") {
    return "player1";
  } else if (player1 == "paper" && player2 == "paper") {
    return "draw";
  } else if (player1 == "paper" && player2 == "rock") {
    return "player1";
  } else if (player1 == "paper" && player2 == "scissors") {
    return "player2";
  } else if (player1 == "scissors" && player2 == "scissors") {
    return "draw";
  } else if (player1 == "scissors" && player2 == "rock") {
    return "player2";
  } else if (player1 == "scissors" && player2 == "paper") {
    return "player1";
  } else {
    return "invalid inputs, try again";
  }
}

console.log(rockPaperScissors("rock", "scissors"));
