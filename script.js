let playerPoints = 0;
let computerPoints = 0;

let rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    showResults("Rock");
    showPoints();
    checkPoints();
});

let paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    showResults("Paper");
    showPoints();
    checkPoints();
});

let scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    showResults("Scissors");
    showPoints();
    checkPoints();
});

const showResults = (choice) => {
    let message = document.querySelector(".message");
    let computerSign = document.querySelector(".computer");
    let results;
    let computerChoice;
    computerChoice = getComputerChoice();
    results = playRound(choice, computerChoice);
    computerSign.textContent = `The computer picked ${computerChoice}!`;
    message.textContent = results;
    pickWinner(results);
}

const showPoints = () => {
    let playerDisplay = document.querySelector(".player-points");
    let computerDisplay = document.querySelector(".computer-points");
    if (playerPoints === 1) {
        playerDisplay.textContent = `You currently have 1 point.`;
    } else {
        playerDisplay.textContent = `You currently have ${playerPoints} points.`;
    }
    if (computerPoints === 1) {
        computerDisplay.textContent = `The computer currently has 1 point.`;
    } else {
        computerDisplay.textContent = `The computer currently has ${computerPoints} points.`;
    }
}

const checkPoints = () => {
    if (playerPoints === 5 || computerPoints === 5) {
        let gameOver = document.querySelector(".game-over");
        if (playerPoints === 5) {
            gameOver.textContent = "Congratulations, you won!";
            playAgain();
            disableButtons();
        } else if (computerPoints === 5) {
            gameOver.textContent = "You lose, try again!";
            playAgain();
            disableButtons();
        }
    }
}

const getComputerChoice = () => {
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

const playRound = (playerSelection, computerSelection) => {
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

const pickWinner = (message) => {
    if (message.substring(4,7) === "Win") {
        playerPoints++;
    } else if (message.substring(4,8) === "Lose") {
        computerPoints++;
    }
}

const playAgain = () => {
    let playAgain = document.createElement("input");
    let body = document.querySelector("body");
    playAgain.setAttribute("type", "button");
    playAgain.setAttribute("value", "Play Again");
    playAgain.setAttribute("id", "play-again");
    playAgain.addEventListener("click", () => {
        resetGame();
    })
    body.append(playAgain);
}

const disableButtons = () => {
    let buttons = document.querySelectorAll(".option");
    buttons.forEach((button) => {
        button.disabled = true;
    })
}

const resetGame = () => {
    playerPoints = 0;
    computerPoints = 0;
    let playAgain = document.querySelector("#play-again");
    playAgain.remove();
    removeText();
    enableButtons();
}

const removeText = () => {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => {
        div.textContent = "";
    })
}

const enableButtons = () => {
    let buttons = document.querySelectorAll(".option");
    buttons.forEach((button) => {
        button.disabled = false;
    })
}
