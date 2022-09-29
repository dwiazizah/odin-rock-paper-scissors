function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Paper" || 
        playerSelection == "Paper" && computerSelection == "Scissors" || 
        playerSelection == "Scissors" && computerSelection == "Rock") {
            return result = "You lose! " + computerSelection + " beats " + playerSelection + ".";
    }  else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissors" && computerSelection == "Paper") {
                    return result = "You win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return result = "You tied! Play again."
    }
}

let playerChoice = prompt("Let's play rock paper scissors! Type your choice.", "");

function playerCaseInsensitive() {
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
}

const playerSelection = playerCaseInsensitive();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection,computerSelection));