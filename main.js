let choice = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}
let resultPlayer = 0,
  resultComp = 0;

function playRound(playerSelection, computerSelection) {
  updateComputerChoice();
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Rock")
  ) {
    if (resultPlayer === 4) {
      resultPlayer++;
      resultsDiv.textContent = `You win this round! ${playerSelection} beats ${computerSelection.toLowerCase()}! Good fight! Score: ${resultPlayer}:${resultComp}`;
      finalResultDiv.textContent = "You're the winner of this game!";
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      finalResultDiv.style.display = "flex";
    } else {
      resultPlayer++;
      resultsDiv.textContent = `You win this round! ${playerSelection} beats ${computerSelection.toLowerCase()}! Good fight! Score: ${resultPlayer}:${resultComp}`;
      return resultsDiv;
    }
  } else if (
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Rock" && computerSelection === "Paper")
  ) {
    if (resultComp === 4) {
      resultComp++;
      resultsDiv.textContent = `You lost this round! ${computerSelection} beats ${playerSelection.toLowerCase()}! Fight harder! Score: ${resultPlayer}:${resultComp}`;
      finalResultDiv.textContent = "The computer wins the game!";
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
      finalResultDiv.style.display = "flex";
    } else {
      resultComp++;
      resultsDiv.textContent = `You lost this round! ${computerSelection} beats ${playerSelection.toLowerCase()}! Fight harder! Score: ${resultPlayer}:${resultComp}`;
      return resultsDiv;
    }
  } else if (playerSelection === computerSelection) {
    resultsDiv.textContent = `Tie. You both picked ${computerSelection.toLowerCase()}. Score: ${resultPlayer}:${resultComp}`;
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
  playerSelection = "Rock";
  playRound(playerSelection, computerSelection);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playerSelection = "Paper";
  playRound(playerSelection, computerSelection);
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playerSelection = "Scissors";
  playRound(playerSelection, computerSelection);
});

const resultsDiv = document.querySelector("#results");

const finalResultDiv = document.querySelector("#finalResult");
finalResultDiv.style.display = "none";

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
  resultPlayer = 0;
  resultComp = 0;
  resultsDiv.textContent = "";
  finalResultDiv.textContent = "";
  rockBtn.disabled = false;
  paperBtn.disabled = false;
  scissorsBtn.disabled = false;
  finalResultDiv.style.display = "none";
});

