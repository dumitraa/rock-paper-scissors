function getComputerChoice() {
    var choice2 = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * ['rock', 'paper', 'scissors'].length)];
    return choice2; // working
}
function getPlayerChoice() {
    var choice1 = prompt(`What will u choose bruh?`);
    if (choice1.toLowerCase() === 'rock') {
        alert(`You chose rock! HAHA!! Hard and sturdy like my--`)
        return choice1
    } else if (choice1.toLowerCase() === 'paper') {
        alert(`You chose paper! Quite lame in my opinion but anyway..`)
        return choice1
    } else if (choice1.toLowerCase() === 'scissors') {
        alert(`You chose scissors! Careful with those!! They're sharp!!`)
        return choice1
    } else {
        alert(`Naur!! What even is that??`)
        getPlayerChoice();
}
}

function game() {
    for (i = 0; i < 5; i++)
    playRound();
}


function playRound() {
    alert(`Alright!! Our dear robot chose ${choice2}!`)

    }
    
// determine winner/tie
// create variables for playerScore and computerScore
    let playerScore = 0
    let computerScore = 0
    // increase score by 1 for each won round
    playerScore = playerScore + 1
    computerScore = computerScore + 1
// declare final winner
    





