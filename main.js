let choice = ["rock", "paper", "scissors"];
function getComputerChoice() {
  let compChoice = choice[Math.floor(Math.random() * choice.length)];
  return compChoice;
}
let resultPlayer = 0,
  resultComp = 0,
  output;
function playRound(playerSelection, computerSelection) {
  /*playerSelection = prompt("Rock, paper or scissors?");
  if (
    playerSelection.toLowerCase() === "rock" ||
    playerSelection.toLowerCase() === "paper" ||
    playerSelection.toLowerCase() === "scissors"
  ) {*/
  if (
    (playerSelection == "rock" && computerSelection === "scissors") ||
    (playerSelection == "scissors" && computerSelection === "paper") ||
    (playerSelection == "paper" && computerSelection === "rock")
  ) {
    resultPlayer++;
    //output = alert(
    resultsDiv.textContent = `You win this one! ${playerSelection} beats ${computerSelection}! Good fight! Score: ${resultPlayer}:${resultComp}`;
    //);
    return resultsDiv;
  } else if (
    (playerSelection == "scissors" && computerSelection === "rock") ||
    (playerSelection == "paper" && computerSelection === "scissors") ||
    (playerSelection == "rock" && computerSelection === "paper")
  ) {
    resultComp++;
    //output = alert(
    resultsDiv.textContent = `You lost this one! ${computerSelection} beats ${playerSelection}! Fight harder! Score: ${resultPlayer}:${resultComp}`;
    //);
    return resultsDiv;
  } else if (playerSelection === computerSelection) {
    //output = alert(
    resultsDiv.textContent = `Tie. You both picked ${computerSelection}. Score: ${resultPlayer}:${resultComp}`;
    //);
    return output;
  } /*else {
      output = alert("Wrong input!");
      return output;
    }
  } else {
    output = alert("Wrong input!");
    return output;
  }*/
}

let playerSelection;
let computerSelection = getComputerChoice();

function updateComputerChoice() {
  computerSelection = getComputerChoice();
  return computerSelection;
}

/*function game() {
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

console.log(game());*/

const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  console.log(computerSelection);
});

const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  console.log(computerSelection);
});

const scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  console.log(computerSelection);
});

const resultsDiv = document.querySelector("#results");
