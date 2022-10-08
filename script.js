let playerScore = 0
let computerScore = 0

function game(choice1, choice2) {
    for (i = 0; i < 5; i++)
    playRound();
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    alert(`Alright!! Our dear robot chose ${choice2}!`)
    alert(`${choice1} vs ${choice2}!!!`)
    if (choice1 === choice2) {
        alert(`Omg!! It's a tie!!`)
        alert(`The score is ${playerScore}:${computerScore}`)
    } else if (choice1 === 'rock' && choice2 === 'scissors' || choice1 === 'paper' && choice2 === 'rock') {
        alert(`Wowow!! Ya won!!`)
        alert(`The score is ${playerScore++}:${computerScore}`)
    } else if (choice1 === 'rock' && choice2 === 'paper' || choice1 === 'paper' && choice2 === 'scissors') {
        alert (`Naurr!! The damn computah won!!`)
        alert(`The score is ${playerScore}:${computerScore++}`)
    }  else if (choice1 === 'scissors' && choice2 === 'paper') {
        alert(`Wowow!! Ya won!!`)
        alert(`The score is ${playerScore++}:${computerScore}`)
    } else if (choice1 === 'scissors' && choice2 === 'rock') {
        alert (`Naurr!! The damn computah won!!`)
        alert(`The score is ${playerScore}:${computerScore++}`)
    }

function getComputerChoice() {
    return choice2 = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)];
    // working
}

function getPlayerChoice() {
    let answer = prompt(`What will u choose bruh?`);
    if (answer.toLowerCase() === 'rock') {
        alert(`You chose rock! HAHA!! Hard and sturdy like my--`)
        return choice1 = 'rock'
    } else if (answer.toLowerCase() === 'paper') {
        alert(`You chose paper! Quite lame in my opinion but anyway..`)
        return choice1 = 'paper'
    } else if (answer.toLowerCase() === 'scissors') {
        alert(`You chose scissors! Careful with those!! They're sharp!!`)
        return choice1 = 'scissors'
    } else {
        alert(`Naur!! What even is that??`)
        getPlayerChoice();
}
}}

// determine winner/tie
// create variables for playerScore and computerScore
    // increase score by 1 for each won round
// declare final winner
    