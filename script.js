function getComputerChoice() {
    let choice;
    let randomValue = Math.floor((Math.random() * 3) + 1);
    if (randomValue === 1) {
        choice = "Rock";
    } else if (randomValue === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors"
    }
    console.log(choice)
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "You Lose! Paper Beats Rock!";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win! Rock Beats Scissors!";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You Win! Paper Beats Rock!";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "You Lose! Scissors Beat Paper!";
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return "You Lose! Rock Beats Scissors!";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You Win! Scissors Beat Paper!";
    } else {
        return "Tie!"
    }
}

function inputValidation(playerInput) {
    let firstLetterUpper = playerInput.slice(0,1).toUpperCase();
    let restOfWordLower = playerInput.slice(1, playerInput.length).toLowerCase();
    playerInput = firstLetterUpper + restOfWordLower;
    if (playerInput != "Rock" || playerInput != "Paper" || playerInput != "Scissors") {
        return false;
    }
    return true;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        do {
            let playerSelection = prompt("Rock, Paper, or Scissors?")
        } 

    }
}