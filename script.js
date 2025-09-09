"use strict";
// global variable to store scores
let humanScore = 0;
let computerScore = 0;

// function to get computer's choice
function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const number = Math.floor(Math.random() * 3);
  return computerOptions[number];
}

// function to get the user's choice
function getHumanChoice() {
  const userChoice = prompt("Enter rock, paper, or scissors:");
  return userChoice.toLowerCase();
}

// function to play a round based on human and computer choice
function playRound(humanChoice, computerChoice) {
  // check whether computer or player wins
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    ++humanScore;
    console.log(
      `You win! ${humanChoice[0].toUpperCase()}${humanChoice.slice(
        1
      )} beats ${computerChoice[0].toUpperCase()}${computerChoice.slice(1)}.`
    );
    return humanScore;
  } else if (humanChoice === computerChoice) {
    console.log(`It's a tie!`);
  } else {
    ++computerScore;
    console.log(
      `You lose! ${computerChoice[0].toUpperCase()}${computerChoice.slice(
        1
      )} beats ${humanChoice[0].toUpperCase()}${humanChoice.slice(1)}.`
    );
    return computerScore;
  }
}

// assign human and computer choices to variables
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// plays a round of rock paper scissors
playRound(humanSelection, computerSelection);
console.log(computerSelection);
