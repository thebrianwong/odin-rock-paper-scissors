function getComputerChoice() {
    let choice;
    let randomValue = Math.floor((Math.random() * 3) + 1);
    if (randomValue === 1) {
        choice = "Rock";
    } else if (randomValue === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
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

// Checks if player input is a valid option in the game. If not, the player will be prompted again until they enter a valid option. 
function inputValidation(playerInput) {
    if (playerInput === "Rock" || playerInput === "Paper" || playerInput === "Scissors") {
        return true;
    }
    return false;
}

// Alters input so that the first letter is uppercase and the rest of the word is lowercase.
function fixCaseSensitivity(string) {
    let firstLetterUpper = string.slice(0,1).toUpperCase();
    let restOfWordLower = string.slice(1, string.length).toLowerCase();
    string = firstLetterUpper + restOfWordLower;
    return string;
}

function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    // i starts at 1 so that the displayed Round Number starts at 1, not 0.
   // for (let i = 1; i < 6; i++) {
       // console.log(`Round ${i}`);
        // Do while loop that asks player for input until they enter a valid option.
        do {
            var playerSelection = prompt("Rock, Paper, or Scissors?");
            playerSelection = fixCaseSensitivity(playerSelection);
        } while (inputValidation(playerSelection) === false);
        let computerSelection = getComputerChoice();
        let results = playRound(playerSelection, computerSelection);
        console.log(`You picked ${playerSelection}!`);
        console.log(results);
        // Looks at the results message to see if the player or the computer won and gives a point accordingly.
        /* If I had to make any further changes, I would change this logic so that it isn't so weirdly reliant on looking for a specific word in a specific range of 
        characters specific string. Instead, I would change playRound() to return "Win", "Lose", or "Tie" instead of full strings. To mimic the announcement messages 
        of round results that currently exist, I would use the new return values of playRound() and the playerSelection and the computerSelection in an if statement 
        to print the announcement messages. An issue there is that "Scissors" is plural whereas "Rock" and "Paper" are singular, so there is some grammar issues 
        there. */
        if (results.substring(4,7) === "Win") {
            playerPoints++;
        } else if (results.substring(4,8) === "Lose") {
            computerPoints++;
        }
  //  }
    console.log("Final Results");
    if (playerPoints > computerPoints) {
        console.log("You Win!");
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
    } else if (computerPoints > playerPoints) {
        console.log("You Lose!");
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
    } else {
        console.log("It's a Tie!");
        console.log(`Player Points: ${playerPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
    }
}

//game();

let message = document.querySelector(".message");
let computerSign = document.querySelector(".computer");
let computerChoice;
let results;

const showResults = (choice) => {
    computerChoice = getComputerChoice();
    results = playRound(choice, computerChoice);
    computerSign.textContent = `The computer picked ${computerChoice}!`;
    message.textContent = results;
}

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    showResults("Rock");
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    showResults("Paper");
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    showResults("Scissors");
});