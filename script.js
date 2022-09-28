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