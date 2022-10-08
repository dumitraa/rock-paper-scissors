// create variables for player and computer selection, score, choices
// start round
// ask for player's choice
// get computer's choice
// declare winner/tie
// repeat until one score reaches 5
// declare final winner

function getPlayerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let answer = prompt(`What will u choose bruh?`);
    if (answer.toLowerCase() === "rock") {
        alert(`Great choice!`)
        alert(`Waiting for computer's choice...`)
        game();
    } else if (answer.toLowerCase() === "paper") {
        alert(`Great choice!`)
        alert(`Waiting for computer's choice...`)
        game();
    } else if (answer.toLowerCase() === "scissors") {
        alert(`Great choice!`)
        alert(`Waiting for computer's choice...`)
        game();
    } else {
        alert(`NO! THIS IS NOT SOMETHING U USE FOR ROCK PAPER SCISSORS!!`)
        getPlayerChoice();
    }
}

function getComputerChoice() {
    const random = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)];
    return random; // working
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    let yourScore = 0
    let computerScore = 0
    alert (`Okay! The computer chose ${getComputerChoice()}!`)
    if (getPlayerChoice() === getComputerChoice()) {
        alert (`It's a tie!! The score is ${yourScore}:${computerScore}`)
    } else if ('rock', 'paper') {
        alert (`Naur!! The computer won!! The score is ${yourScore}:${computerScore++}`)
    } else if ('rock', 'scissors') {
        alert (`Ye boii!! You won!! The score is ${yourScore++}:${computerScore}`)
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }};




