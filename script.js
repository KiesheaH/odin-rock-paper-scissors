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
let playerSelection = document.querySelector(".player_selection");
let computerSelection = document.querySelector(".computer_selection");

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
let results = document.querySelector(".results").textContent;

// Add eventListeners to buttons
rock.addEventListener("click", playRound);
paper.addEventListener("click", playRound);
scissors.addEventListener("click", playRound);

// Reset game
reset.addEventListener("click", resetGame);

// Play rounds
function playRound(e) {
  if (playerScore !== 5 || computerScore != 5) {
    let player = e.target.textContent.toLowerCase();
    let computer = getComputerChoice();

    // display selections
    playerSelection.textContent = icons[player];
    computerSelection.textContent = icons[computer];

    // updated UI based on selections
    if (player === computer) {
      displayPlayerScore.textContent = playerScore;
      displayComputerScore.textContent = computerScore;
    } else if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      playerScore++;
    } else {
      computerScore++;
    }
    displayPlayerScore.textContent = playerScore;
    displayComputerScore.textContent = computerScore;
    round++;
  }

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      body.css.backgroundColor = "green";
      results = "Winner 🎉";
    } else {
      body.css.backgroundColor = "red";
      results = "Try Again!";
    }
  }
}

// reset UI
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  displayPlayerScore.textContent = playerScore;
  displayComputerScore.textContent = computerScore;
  playerSelection.textContent = "";
  computerSelection.textContent = "";
  body.css.backgroundColor = "black";
}

// determines computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// // global variable to store scores
// let humanScore = 0;
// let computerScore = 0;

// // function to get computer's choice
// function getComputerChoice() {
//   const choices = ["rock", "paper", "scissors"];
//   const randomIndex = Math.floor(Math.random() * 3);
//   return choices[randomIndex];
// }

// // function to get the user's choice
// function getHumanChoice() {
//   const input = prompt("Enter rock, paper, or scissors:");
//   return input.trim().toLowerCase();
// }

// // function to play a round based on human and computer choice
// function playRound(humanChoice, computerChoice) {
//   // check whether computer or player wins
//   if (humanChoice === computerChoice) {
//     console.log(`It's a tie! You both chose ${humanChoice}`);
//     return;
//   }
//   if (
//     (humanChoice === "rock" && computerChoice === "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock")
//   ) {
//     humanScore++;
//     console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
//   } else {
//     computerScore++;
//     console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
//   }
// }

// // function to play rock paper scissors
// function playGame() {
//   for (let round = 1; round < 6; round++) {
//     // assign user and computer choices
//     const humanSelection = getHumanChoice();
//     const computerSelection = getComputerChoice();

//     // play one round with user and computer choices
//     playRound(humanSelection, computerSelection);
//     console.log(
//       `Score after round ${round}: You ${humanScore} - Computer ${computerScore}`
//     );
//   }

//   // prints results to the screen
//   console.log("Final Score:");
//   console.log(`You: ${humanScore} | Computer: ${computerScore}`);

//   if (humanScore > computerScore) {
//     console.log("🎉 You win the game!");
//   } else if (computerScore > humanScore) {
//     console.log("😟 You lose the game.");
//   } else {
//     console.log("🤝 It's a draw!");
//   }
// }
