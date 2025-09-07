"use strict";
// global variable to store scores
let humanScore = 0;
let computerScore = 0;
// function to get computer's choice
function getComputerChoice() {
  let computerChoice = ["rock", "paper", "scissors"];
  let number = Math.floor(Math.random() * 3);
  return computerChoice[number];
}
console.log(getComputerChoice());

// function to get the user's choice
function getHumanChoice() {
  let userChoice = prompt("Enter rock, paper, or scissors:");
  return userChoice;
}
// console.log(getHumanChoice());
