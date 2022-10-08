// create variables for player and computer selection, score, choices
// start round
// ask for player's choice
// get computer's choice
// declare winner/tie
// repeat until one score reaches 5
// declare final winner


const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
let score = 0

function getPlayerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let getPlayerChoice = prompt(`What will u choose bruh?`);
    for (let i = 0; i < choices.length; i++) {
        if (getPlayerChoice.toLowerCase() === choices[i])
            result = true
    } 
    if (result) {
        alert(`Great choice!`)
    } else {
    alert(`NO! THIS IS NOT SOMETHING U USE FOR ROCK PAPER SCISSORS!!`)
    getPlayerChoice();
    }
}

function getComputerChoice() {
    const random = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)];
    return random; // working
}

function playRound(playerSelection, computerSelection) {
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }};




