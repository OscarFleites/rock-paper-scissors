function getComputerChoice() {
  let rock, paper, scissors;
  const random = Math.floor(Math.random() * 3 + 1);
  if (random === 3) {
    return (scissors = "Scissors");
  } else if (random === 2) {
    return (paper = "Paper");
  } else random === 1;
  return (rock = "Rock");

  
}
