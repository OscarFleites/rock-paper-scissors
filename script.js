function getComputerChoice() {
  const logic = Math.floor(Math.random() * 3 + 1);
  if (logic === 3) {
    return "rock";
  } else if (logic === 2) {
    return "paper";
  } else if (logic === 1) {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let answer = prompt("Please enter choice");

  playerSelection = answer.toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "We have a tie";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Player wins: Rock beats scissors";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins: Paper beats rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Player wins: scissors beats paper";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins: paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Computer wins:scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Computer wins: rock beats scissors";
  }
}

function game() {
  let i = 0;
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}

game();
