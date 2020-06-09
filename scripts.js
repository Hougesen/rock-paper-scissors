let playerScore = 0
let computerScore = 0


function computerPlay() {
    let computerPlayPick = Math.floor(Math.random() * 3)

    if (computerPlayPick == 0) {
        return "rock"

    } else if (computerPlayPick == 1) {
        return "paper"

    } else {
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Pick one: Rock, paper or scissors").toLowerCase()
    computerSelection = computerPlay()

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++
        console.log(`You win - ${playerSelection} beats ${computerSelection}. `)
        return `You win - ${playerSelection} beats ${computerSelection}. `
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        computerScore++
        console.log(`You lose - ${computerSelection} beats ${playerSelection}. `)
        return `You lose - ${computerSelection} beats ${playerSelection}. `
    } else {
        console.log(`Tie - You both picked ${playerSelection}. `)
        return `Tie - You both picked ${playerSelection}. `
    }


}


function game(playerSelection, computerSelection) {
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    playRound(playerSelection, computerSelection)
    console.log("Player Score: " + playerScore + ", Computer Score: " + computerScore);


}