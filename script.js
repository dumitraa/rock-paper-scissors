let playerScore = 0
let computerScore = 0

let draw = "Omg!! E egalitate!!"
let playerWin = "Wowow! Ai castigat!!!!"
let computerWin = "Nuuu!! A castigat prostu!!"

function game(choice1, choice2) {
    for (i = 0; i < 5; i++)
    playRound()
    if (playerScore > computerScore) {
        endGame()
        alert(`Omg!! AI castigat!! Bvvv!!!!`)
        if (confirm(`Ce zici de o alta runda, eroule?`) == true) {
            game();
        }
    } else if (computerScore > playerScore) {
        endGame()
        alert(`O nu... a castigat computeru!!! NUUUUU!!`)
        if (confirm(`Vrei sa te razbuni, luptatorule?`) == true) {
            game();
        }
    } else {
        endGame()
        alert(`Ciue?? EGalitate?? Imposibil!!`)
        if (confirm(`VINO AICI INAPOI SI JOACA DIN NOU!!`) == true) {
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
        alert(`Scorul este ${playerScore}:${computerScore++}`)
    }
}

function getComputerChoice() {
    return choice2 = ['piatra', 'hartie', 'foarfeca'][Math.floor(Math.random() * ['piatra', 'hartie', 'foarfeca'].length)];
    // working
}

function getPlayerChoice() {
    let answer = prompt(`Ce vei alege bo$$?`);
    if (answer.toLowerCase() === 'piatra') {
        alert(`Ai ales piatra!!! Mistoker rau!!`)
        return choice1 = 'piatra'
    } else if (answer.toLowerCase() === 'hartie') {
        alert(`Ai ales hartie!! E cam de pampalai da' ma rog..`)
        return choice1 = 'hartie'
    } else if (answer.toLowerCase() === 'foarfeca') {
        alert(`Ai ales foarfeca!! Ai grija cu ea.. e ascutita!!`)
        return choice1 = 'foarfeca'
    } else {
        alert(`Ciue zici u acolo bo$$? Nu inteleg smr`)
        getPlayerChoice();
}
}
    
game();