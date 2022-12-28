let choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}
let resultPlayer = 0,
  resultComp = 0;

function playRound(playerSelection, computerSelection) {
  updateComputerChoice();
  if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "scissors" && computerSelection === "paper") ||
    (playerSelection == "paper" && computerSelection === "rock")
  ) {
    if (resultPlayer === 4) {
      resultPlayer++;
      resultsDiv.textContent = `You win this round! ${playerSelection} beats ${computerSelection}! Good fight! Score: ${resultPlayer}:${resultComp}`;
      finalResultDiv.textContent = "You're the winner of this game!";
    } else {
      resultPlayer++;
      resultsDiv.textContent = `You win this round! ${playerSelection} beats ${computerSelection}! Good fight! Score: ${resultPlayer}:${resultComp}`;
      return resultsDiv;
    }
  } else if (
    (playerSelection == "scissors" && computerSelection === "rock") ||
    (playerSelection == "paper" && computerSelection === "scissors") ||
    (playerSelection == "rock" && computerSelection === "paper")
  ) {
    if (resultComp === 4) {
      resultComp++;
      resultsDiv.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}! Fight harder! Score: ${resultPlayer}:${resultComp}`;
      finalResultDiv.textContent = "The computer wins the game!";
    } else {
      resultComp++;
      resultsDiv.textContent = `You lost this round! ${computerSelection} beats ${playerSelection}! Fight harder! Score: ${resultPlayer}:${resultComp}`;
      return resultsDiv;
    }
  } else if (playerSelection === computerSelection) {
    resultsDiv.textContent = `Tie. You both picked ${computerSelection}. Score: ${resultPlayer}:${resultComp}`;
    return resultsDiv;
  }
}

let playerSelection;
let computerSelection = getComputerChoice();

function updateComputerChoice() {
  computerSelection = getComputerChoice();
  return computerSelection;
}

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  console.log(computerSelection);
  playRound(playerSelection, computerSelection);
});

const resultsDiv = document.querySelector("#results");

const finalResultDiv = document.querySelector("#finalResult");

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  resultPlayer = 0;
  resultComp = 0;
  resultsDiv.textContent = "";
  finalResultDiv.textContent = "";
});
