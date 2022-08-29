let rock = "rock";
let paper = "paper";
let scissors = "scissors";

function getComputerChoice() {
  const answer = Math.floor(Math.random() * 3 + 1);
  if (answer === 3) {
    return rock;
  } else if (answer === 2) {
    return paper;
  } else {
    return scissors;
  }
}

function getUserChoice() {
  let answer = prompt("Please enter choice");

  let answerLowerCase = answer.toLowerCase();
  return answerLowerCase.charAt(0).toUpperCase() +answerLowerCase.slice(1);
}

console.log(getUserChoice());
// rock paper scissor Game
// !create function user will enter input value of rock, paper or scissors (prompt)
// create function input value will be case sensitive string.toUpperCase
// create function computer random values Math.floor(Math.random)
// create function comparing user/computer value and evaluating winner
// Have game loop until someone achieves 5 wins (while loop)
// while (i < 10) {
// text += "The number is " + i;
// i++
