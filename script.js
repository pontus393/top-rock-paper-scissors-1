

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

    let playerWins = 0;

    if (playerChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                playerWins = null;
                break;
            case "paper":
                playerWins = 0;
                break;
            case "scissors":
                playerWins = 1;
                break;
        }
    } else if (playerChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                playerWins = 1;
                break;
            case "paper":
                playerWins = null;
                break;
            case "scissors":
                playerWins = 0;
                break;
        }
    } else if (playerChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                playerWins = 0;
                break;
            case "paper":
                playerWins = 1;
                break;
            case "scisscors":
                playerWins = null;
                break;
        }
    }
    else {
        return "Something's wrong";
    }

    return playerWins;
}

function game() {

    playerScore = 0;
    compScore = 0;

    for (let i = 0; i < 5; i++) {

        // Choices
        let comp = getComputerChoice()
        let player = "Paper";

        // Play round
        let result = playRound(player, comp);
        
        // Add score
        if (result === 1) {
            playerScore += 1;
        } else if (result === 0) {
            compScore += 1;
        } else {
            break;
        }
     }

     console.log(`Player's score is: ${playerScore}`);
     console.log(`Computer's score is: ${compScore}`);
}

game()

// Create loop that loops five times
// Within each loop, call playRound
// Within each loop, save the score
// Within each loop, console.log(SCORE)




