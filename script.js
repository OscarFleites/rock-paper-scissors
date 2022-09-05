function getComputerChoice() {
  let randomGenerator = Math.floor(Math.random() * 3 + 1);

  if (randomGenerator === 3) {
    return "Rock";
  } else if (randomGenerator === 2) {
    return "Paper";
  } else if (randomGenerator === 1) {
    return "Scissors";
  }
}

function getUserChoice() {
  let userChoice = prompt("Please input your answer nerd!");

  let answerSyntaxLowerCase = userChoice.toLowerCase();
  let answerSyntaxFirstCharUpperCase = answerSyntaxLowerCase
    .charAt(0)
    .toUpperCase();
  let answerSyntaxFinal =
    answerSyntaxFirstCharUpperCase + answerSyntaxLowerCase.slice(1);

  return answerSyntaxFinal;
}

function compareChoices(playerSelection, computerSelection) {
  playerSelection = getUserChoice();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "We have a tie!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Human wins! Rock beats Scissors";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "Human wins! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Human wins! Scissors beats Paper";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "Computer wins! Rock loses to Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    return "Computer wins! Paper loses to Scissors";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "Computer wins! Scissors beats Rock";
  }
}

function playRound() {
  for(round; round < 10; round++){
  console.log(compareChoices());

  }
}


let round = 0;
playRound();

// function that takes computer input randomly
// function that takes human user input
// function that compares computer/human input

// rock paper scissors returns
// human vs pc
// rock, paper, scissors, tie
