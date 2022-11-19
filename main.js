let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}
let resultPlayer = 0,
  resultComp = 0,
  output;
function playRound(playerSelection, computerSelection) {
  playerSelection = prompt("Rock, paper or scissors?");
  if (
    playerSelection.toLowerCase() === "rock" ||
    playerSelection.toLowerCase() === "paper" ||
    playerSelection.toLowerCase() === "scissors"
  ) {
    if (
      (playerSelection.toLowerCase() == "rock" &&
        computerSelection === "Scissors") ||
      (playerSelection.toLowerCase() == "scissors" &&
        computerSelection === "Paper") ||
      (playerSelection.toLowerCase() == "paper" && computerSelection === "Rock")
    ) {
      resultPlayer++;
      output = alert(
        `You win this one! ${playerSelection} beats ${computerSelection}! Good fight! Score: ${resultPlayer}:${resultComp}`
      );
      return output;
    } else if (
      (playerSelection.toLowerCase() == "scissors" &&
        computerSelection === "Rock") ||
      (playerSelection.toLowerCase() == "paper" &&
        computerSelection === "Scissors") ||
      (playerSelection.toLowerCase() == "rock" && computerSelection === "Paper")
    ) {
      resultComp++;
      output = alert(
        `You lost this one! ${computerSelection} beats ${playerSelection}! Fight harder! Score: ${resultPlayer}:${resultComp}`
      );
      return output;
    } else if (
      playerSelection.toLowerCase() === computerSelection.toLowerCase()
    ) {
      output = alert(
        `Tie. You both picked ${computerSelection}. Score: ${resultPlayer}:${resultComp}`
      );
      return output;
    } else {
      output = alert("Wrong input!");
      return output;
    }
  } else {
    output = alert("Wrong input!");
    return output;
  }
}

const playerSelection = "rock";
let computerSelection = getComputerChoice();

function updateComputerChoice() {
  computerSelection = getComputerChoice();
  return computerSelection;
}

function game() {
  for (let i = 0; i < 5; i++) {
    updateComputerChoice();
    playRound(playerSelection, computerSelection);
  }
  if (resultComp > resultPlayer) {
    output = alert("The computer wins the game!");
    return output;
  } else if (resultComp < resultPlayer) {
    output = alert("You're the winner of this game!");
    return output;
  } else {
    output = alert("Wow! You're as smart as a computer! Tie.");
  }
}

console.log(game());
