function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];

    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    let playerSelection = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    let computerSelection = computer;
    
    if (playerSelection == "Rock" && computerSelection == "Paper" || 
            playerSelection == "Paper" && computerSelection == "Scissors" || 
            playerSelection == "Scissors" && computerSelection == "Rock") {
                console.log("You lose! " + computerSelection + " beats " + playerSelection + ".");
                computerScore++;
    }  else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
                playerSelection == "Paper" && computerSelection == "Rock" ||
                playerSelection == "Scissors" && computerSelection == "Paper") {
                    console.log("You win! " + playerSelection + " beats " + computerSelection + ".");
                    playerScore++;
    } else {
            console.log("It's a tie! Play again.");
    }
}

function game() {
    for (i = 0; i < 5; i++) {
        let playerSelection = prompt()
        playRound(playerSelection, getComputerChoice())
    }
    if (playerScore === computerScore) {
        console.log("It's a tie! Let's play again!")
    }
    else if (playerScore > computerScore) {
        console.log("Congrats! You are the winner. Total score is " + playerScore + " vs " + computerScore + " for the player.") 
    } else {
        console.log("Booo! You are the loser. Total score is " + computerScore + " vs " + playerScore + " for the computer.")
    }
}

game()