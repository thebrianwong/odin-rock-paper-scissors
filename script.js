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
    console.log(`The computer picked ${choice}!`)
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
    if (playerInput === "Rock" || playerInput === "Paper" || playerInput === "Scissors") {
        return true;
    }
    return false;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 1; i < 6; i++) {
        console.log(`Round ${i}`);
        do {
            var playerSelection = prompt("Rock, Paper, or Scissors?");
            let firstLetterUpper = playerSelection.slice(0,1).toUpperCase();
            let restOfWordLower = playerSelection.slice(1, playerSelection.length).toLowerCase();
            playerSelection = firstLetterUpper + restOfWordLower;
        } while (inputValidation(playerSelection) === false);
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        console.log(`You picked ${playerSelection}!`)
        console.log(results);
        if (results.substring(4,7) === "Win") {
            playerPoints++;
        } else if (results.substring(4,8) === "Lose") {
            computerPoints++;
        }
    }
    console.log("Final Results");
    if (playerPoints > computerPoints) {
        console.log("You Win!");
        console.log("Player Points: " + playerPoints);
        console.log("Computer Points: " + computerPoints);
    } else if (computerPoints > playerPoints) {
        console.log("You Lose!");
        console.log("Player Points: " + playerPoints);
        console.log("Computer Points: " + computerPoints);
    } else {
        console.log("It's a Tie!");
        console.log("Player Points: " + playerPoints);
        console.log("Computer Points: " + computerPoints);
    }
}

game();