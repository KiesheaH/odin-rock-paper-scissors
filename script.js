"use strict";
// global variable to store scores
let humanScore = 0;
let computerScore = 0;

// function to get computer's choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// function to get the user's choice
function getHumanChoice() {
  const input = prompt("Enter rock, paper, or scissors:");
  return input.trim().toLowerCase();
}

// function to play a round based on human and computer choice
function playRound(humanChoice, computerChoice) {
  // check whether computer or player wins
  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
    return;
  }
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    console.log(`You win this round! ${humanChoice} beats ${computerChoice}`);
  } else {
    computerScore++;
    console.log(`You lose this round! ${computerChoice} beats ${humanChoice}`);
  }
}

// function to play rock paper scissors
function playGame() {
  for (let round = 1; round < 6; round++) {
    // assign user and computer choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    // play one round with user and computer choices
    playRound(humanSelection, computerSelection);
    console.log(
      `Score after round ${round}: You ${humanScore} - Computer ${computerScore}`
    );
  }

  // prints results to the screen
  console.log("Final Score:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("🎉 You win the game!");
  } else if (computerScore > humanScore) {
    console.log("😟 You lose the game.");
  } else {
    console.log("🤝 It's a draw!");
  }
}
