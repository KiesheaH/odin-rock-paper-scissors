"use strict";
// Global Variables
let body = document.querySelector("body");

// Button elements
let rock = document.querySelector(".btn-rock");
let paper = document.querySelector(".btn-paper");
let scissors = document.querySelector(".btn-scissors");
let reset = document.querySelector(".btn-reset");

// Round scores
let playerScore = 0;
let computerScore = 0;
let displayPlayerScore = document.querySelector(".player_score");
let displayComputerScore = document.querySelector(".computer_score");

// Round selection elements
let playerSelectionIcon = document.querySelector(".player_selection_icon");
let computerSelectionIcon = document.querySelector(".computer_selection_icon");

// Element icons
let rockIcon = document.querySelector(".rock").textContent;
let paperIcon = document.querySelector(".paper").textContent;
let scissorsIcon = document.querySelector(".scissors").textContent;

// Saves icons in an object for display after evaluation
let icons = {
  rock: rockIcon,
  paper: paperIcon,
  scissors: scissorsIcon,
};

// announce results
let results = document.querySelector(".results_display");

// Add eventListeners to buttons
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// Reset game
reset.addEventListener("click", resetGame);

// Play rounds
function playRound(e) {
  if (playerScore < 5 && computerScore < 5) {
    let player = e.target.textContent.toLowerCase();
    let computer = getComputerChoice();

    // display selections
    playerSelectionIcon.textContent = icons[player];
    computerSelectionIcon.textContent = icons[computer];

    playerSelectionIcon.style.visibility = "visible";
    computerSelectionIcon.style.visibility = "visible";

    // updated UI based on selections
    if (player === computer) {
      updateScores();
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerScore++;
    } else {
      computerScore++;
    }
    updateScores();
  }
  displayResults();
}

// reset UI
function resetGame() {
  playerScore = 0;
  computerScore = 0;

  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;

  playerSelectionIcon.style.visibility = "hidden";
  computerSelectionIcon.style.visibility = "hidden";

  results.textContent = "";
  body.style.backgroundColor = "black";
}

// determines computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// update scores
function updateScores() {
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
}

// display results
function displayResults() {
  if (playerScore === 5 && computerScore < 5) {
    body.style.backgroundColor = "green";
    results.textContent = "Winner 🎉";
  }

  if (computerScore === 5 && playerScore < 5) {
    body.style.backgroundColor = "red";
    results.textContent = "Try Again!";
  }
}
