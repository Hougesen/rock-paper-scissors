let playerScore = document.querySelector(".playerScore")
let computerScore = document.querySelector(".computerScore")
let tieScore = document.querySelector(".tieScore")


//Function that randomly pick "rock", "paper" or "scissors" (the computer)
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

computerSelection = computerPlay()


//Function that activates when a button is clicked
function buttonGame(playerSelection, computerSelection) {

    if (playerSelection == 1) {
        playerSelection = "rock"
    } else if (playerSelection == 2) {
        playerSelection = "paper"
    } else {
        playerSelection = "scissors"
    }


    computerSelection = computerPlay()

    let history = document.createElement("LI");
    let historyWin = document.createTextNode(`You win - ${playerSelection} beats ${computerSelection}. `)
    let historyLose = document.createTextNode(`You lose - ${computerSelection} beats ${playerSelection}. `)
    let historyTie = document.createTextNode(`Tie - You both picked ${playerSelection}. `)

    if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock") || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore.innerHTML++
        history.appendChild(historyWin);
        document.getElementById("history").appendChild(history);
        console.log(`You win - ${playerSelection} beats ${computerSelection}. `)
        return `You win - ${playerSelection} beats ${computerSelection}. `

    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        computerScore.innerHTML++
        history.appendChild(historyLose);
        document.getElementById("history").appendChild(history);
        console.log(`You lose - ${computerSelection} beats ${playerSelection}. `)
        return `You lose - ${computerSelection} beats ${playerSelection}. `

    } else {
        tieScore.innerHTML++
        history.appendChild(historyTie);
        document.getElementById("history").appendChild(history);
        console.log(`Tie - You both picked ${playerSelection}. `)
        return `Tie - You both picked ${playerSelection}. `
    }
}