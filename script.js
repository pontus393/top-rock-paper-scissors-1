

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
                return "Nobody wins";
                break;
            case "paper":
                return "You loose: Paper beats rocks";
                break;
            case "scissors":
                return "You win, rock beats scissors";
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                return "You win, paper beats rock";
                break;
            case "paper":
                return "Nobody wins";
                break;
            case "scissors":
                return "You loose, scissors beat paper";
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                return "You lose, rock beats paper";
                break;
            case "paper":
                return "You win, scissors beat paper";
                break;
            case "scisscors":
                return "Nobody wins";
                break;
        }
    }
    else {
        return "Something's wrong";
    }
}

console.log(playRound("Paper", getComputerChoice()));

// Create stringVar containing player choice (to be updated with input at later stage)

// Create switch statements for all possible combinations

