let playerScore = 0
let computerScore = 0

let draw = "Omg!! E egalitate!!"
let playerWin = "Wowow! Ai castigat!!!!"
let computerWin = "Nuuu!! A castigat prostu!!"

function game(choice1, choice2) {
    while (playerScore < 5 && computerScore < 5)
    playRound()
    if (playerScore === 5) {
        endGame()
        alert(`Omg!! AI castigat!! Bvvv!!!!`)
        if (confirm(`Ce zici de o alta runda, eroule?`) == true) {
            game();
        }
    } else if (computerScore === 5) {
        endGame()
        alert(`O nu... a castigat computeru!!! NUUUUU!!`)
        if (confirm(`Vrei sa te razbuni, luptatorule?`) == true) {
            game();
        }
    } else if (playerScore === 0 && computerScore === 5) {
        alert(`Mama da' ce ti-ai luat-o bo$$.. scz`)
        if (confirm(`Vrei sa te razbuni, luptatorule?`) == true) {
            game();
        }
    } else if (playerScore === 5 && computerScore === 0) {
        alert(`Moamaaa ce i-ai dat-o frt!!!!!!`)
        if (confirm(`Ce zici de o alta runda, eroule?`) == true) {
            game();
        }
    }
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
}

function playRound() {
    getComputerChoice();
    getPlayerChoice();
    alert(`oK!! Frumosul nostru robot a ales ${choice2}!`)
    alert(`${choice1} vs ${choice2}!!!`)
    if (choice1 === choice2) {
        alert (draw)
        alert(`Scorul este ${playerScore}:${computerScore}`)
    } else if (choice1 === 'piatra' && choice2 === 'foarfeca' || choice1 === 'hartie' && choice2 === 'piatra') {
        alert(playerWin)
        alert(`Scorul este ${++playerScore}:${computerScore}`)
    } else if (choice1 === 'piatra' && choice2 === 'hartie' || choice1 === 'hartie' && choice2 === 'foarfeca') {
        alert (computerWin)
        alert(`Scorul este ${playerScore}:${++computerScore}`)
    }  else if (choice1 === 'foarfeca' && choice2 === 'hartie') {
        alert(playerWin)
        alert(`Scorul este ${++playerScore}:${computerScore}`)
    } else if (choice1 === 'foarfeca' && choice2 === 'piatra') {
        alert (computerWin)
        alert(`Scorul este ${playerScore}:${++computerScore}`)
    }
}

function getComputerChoice() {
    return choice2 = ['piatra', 'hartie', 'foarfeca'][Math.floor(Math.random() * ['piatra', 'hartie', 'foarfeca'].length)];
    // working
}

function getPlayerChoice() {
    let answer = prompt(`Ce vei alege bo$$? (P, H sau F trg ca n-avem timp de prostii)`);
    if (answer.toLowerCase() === 'p') {
        alert(`Ai ales piatra!!! Mistoker rau!!`)
        return choice1 = 'piatra'
    } else if (answer.toLowerCase() === 'h') {
        alert(`Ai ales hartie!! E cam de pampalai da' ma rog..`)
        return choice1 = 'hartie'
    } else if (answer.toLowerCase() === 'f') {
        alert(`Ai ales foarfeca!! Ai grija cu ea.. e ascutita!!`)
        return choice1 = 'foarfeca'
    } else {
        alert(`Ciue zici u acolo bo$$? Nu inteleg smr`)
        getPlayerChoice();
}
}
    
game();