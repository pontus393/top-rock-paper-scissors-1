

// FUNCTION TO GENERATE COMPUTER CHOICE
function getComputerChoice() {

    // Create intVar containing a random value between 0 - 2
    let randInt = Math.floor(Math.random() * 3);

    // Assign computer choice depending on value of randInt
    let computerChoice = "";

    if (randInt === 0) {
        computerChoice = "rock";
    } else if (randInt === 1) {
        computerChoice = "paper";
    } else if (randInt === 2) {
        computerChoice = "scissors"
    } else {
        console.log("Somethings wrong");
    }

    return computerChoice;
}

// FUNCTION FOR GAME ROUND WITH PLAYER AND COMPUTER CHOICE
function playRound(player, comp) {

    let playerChoice = player.toLowerCase();
    let computerChoice = comp;

    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                console.log("Nobody wins");
                break;
            case "paper":
                console.log("You loose: Paper beats rocks");
                break;
            case "scissors":
                console.log("You win, rock beats scissors")
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                console.log("You win, paper beats rock");
                break;
            case "paper":
                console.log("Nobody wins");
                break;
            case "scissors":
                console.log("You loose, scissors beat paper")
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                console.log("You lose, rock beats paper");
                break;
            case "paper":
                console.log("You win, scissors beat paper");
                break;
            case "scisscors":
                console.log("Nobody wins");
                break;
        }
    }
    else {
        console.log("Something's wrong");
    }
}

console.log(playRound("Paper", getComputerChoice()));

// Create stringVar containing player choice (to be updated with input at later stage)

// Create switch statements for all possible combinations

