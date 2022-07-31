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
        return "Tie!";
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
            var playerSelection = prompt("Rock, Paper, or Scissors?")
        } while (inputValidation(playerSelection) === false);
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        if (results.slice(4,3) === "Win") {
            playerPoints++;
            console.log(results);
        } else if (results.slice(4,4) === "Lose") {
            computerPoints++;
            console.log(results);
        }
    }
    if (playerPoints > computerPoints) {
        console.log("You Win!");
    } else if (computerPoints > playerPoints) {
        console.log("You Lose!");
    } else {
        console.log("It's a Tie!");
    }
}

game();