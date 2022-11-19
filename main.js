let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}
let playerWinner = 0,
  compWinner = 0,
  resultPlayer = 0,
  resultComp = 0;

let output;
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
      resultPlayer = playerWinner + 1;
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
      resultComp = compWinner + 1;
      output = alert(
        `You lost this one! ${computerSelection} beats ${playerSelection}! Fight harder! Score: ${resultPlayer}:${resultComp}`
      );
      return output;
    } else if (
      playerSelection.toLowerCase() === computerSelection.toLowerCase()
    ) {
      output = alert("Tie");
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
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playerSelection);
console.log(playRound(playerSelection, computerSelection));




