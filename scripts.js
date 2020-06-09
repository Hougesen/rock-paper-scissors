//Function that randomly decides what the computer picks
function computerPlay() {
    let computerPlayPick = Math.floor(Math.random() * 3)

    if (computerPlayPick == 0) {
        console.log("Robot picked rock")
        return "rock"

    } else if (computerPlayPick == 1) {
        console.log("Robot picked paper")
        return "paper"

    } else {
        console.log("Robot picked scissors")
        return "scissors"
    }

}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Pick one: Rock, paper or scissors").toLowerCase()
    computerSelection = computerPlay()

    if (playerSelection == "rock") {
        console.log("Player picked rock")

        if (computerSelection == "scissors") {
            return "You won - Rock beats scissors"

        } else if (computerSelection == "paper") {
            return "You lost - Paper beats rock"

        } else {
            return "Tie - You both picked rock"
        }


    } else if (playerSelection == "paper") {
        console.log("Player picked paper")

        if (computerSelection == "rock") {
            return "You won - Paper beats rock"

        } else if (computerSelection == "scissors") {
            return "You lost - Scissors beats paper"

        } else {
            return "Tie - You both picked paper"
        }

    } else if (playerSelection == "scissors") {
        console.log("Player picked scissors")

        if (computerSelection == "paper") {
            return "You won - Scissors beats paper"

        } else if (computerSelection == "rock") {
            return "You lost - Rock beats scissors"

        } else {
            return "Tie - You both picked scissors"
        }

    } else {
        console.log("Please make a valid play")
    }



}


function game(playerSelection, computerSelection) {
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))
    console.log(playRound(playerSelection, computerSelection))

}