// Variables / RESET
let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

//DOM Variables
const score = document.getElementById("liveScore");
const test = document.getElementById("test");
const results = document.getElementById("results");
const playerImg = document.getElementById("playerImg");
const floatThisHm = document.getElementById("floatThisHm");
const floatThisPc = document.getElementById("floatThisPc");

// Computer Player - Random Selector
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return computerChoice = choices[Math.floor(Math.random() * choices.length)];
}

computerSelection = getComputerChoice();

// Event Listener
// Rock
let rock = document.getElementById("rock");
rock.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    update();
})
// Paper
let paper = document.getElementById("paper");
paper.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    update();
})
// Scissors
let scissors = document.getElementById("scissors");
scissors.addEventListener('click', function() {
    computerSelection = getComputerChoice();
    playerSelection = "scissors";
    playRound(playerSelection, computerSelection);
    update();
})

// Update score + result
function update() {
    score.textContent = `| ${playerScore} : ${computerScore} |`;
    floatThisHm.style.visibility = 'visible';
    floatThisPc.style.visibility = 'visible';

    if (playerSelection === 'rock') {
        playerImg.src = "imgs/rock.jpg"
    } else if (playerSelection === 'paper') {
        playerImg.src = "imgs/paper.jpg"
    } else if (playerSelection === 'scissors') {
        playerImg.src = 'imgs/scissor.jpg'
    } if (computerSelection === 'rock') {
        computerImg.src = "imgs/rock.jpg"
    } else if (computerSelection === 'paper') {
        computerImg.src = "imgs/paper.jpg"
    } else if (computerSelection === 'scissors') {
        computerImg.src = 'imgs/scissor.jpg'
    }
}

// Round play
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "paper" || 
            playerSelection == "paper" && computerSelection == "scissors" || 
            playerSelection == "scissors" && computerSelection == "rock") {
                results.innerText = `You lose the round!\n${computerSelection} beats ${playerSelection}`;
                computerScore++;
                checkWinner();
    }  else if (playerSelection == "rock" && computerSelection == "scissors" ||
                playerSelection == "paper" && computerSelection == "rock" ||
                playerSelection == "scissors" && computerSelection == "paper") {
                    results.innerText = `You win the round!\n${playerSelection} beats ${computerSelection}`;
                    playerScore++;
                    checkWinner();
    } else if (playerSelection === computerSelection) {
            results.innerText = `It's a tie!\nYou both picked ${playerSelection}`;
            results.style.textAlign= "center";
            checkWinner();
    }
}

// Winner check + declare
function checkWinner() {
    if (playerScore < 5 && computerScore << 5) {
        results.style.textAlign = 'center';
        if (playerScore === 1 || computerScore === 1) {
        results.style.color = '#1c3144'
        }
    } else {
        declareWinner();
        playerScore = 0;
        computerScore = 0;
    }
}

function declareWinner() {
    if (playerScore === 5) {
        results.style.textAlign = 'center';
        results.innerText = "You won the game!!!\nPlay another?";
        results.style.color = '#83d081';
    } else if (computerScore === 5) {
        results.style.textAlign = 'center';
        results.innerText = "You lost the game...\nPlay another?";
        results.style.color = '#fb6376';
    }
}