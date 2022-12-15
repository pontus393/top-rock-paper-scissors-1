// FUNCTION TO GENERATE COMPUTER CHOICE
function getComputerChoice() {

    // Create intVar containing a random value between 0 - 2
    let randInt = Math.floor(Math.random() * 3);

    // Assign computer choice depending on value of randInt
    let computerChoice = "";

    if (randInt === 0) {
        computerChoice = "Rock";
    } else if (randInt === 1) {
        computerChoice = "Paper";
    } else if (randInt === 2) {
        computerChoice = "Scissors"
    } else {
        console.log("Somethings wrong");
    }

    return computerChoice;
}

// FUNCTION FOR GAME ROUND USING PLAYER'S AND COMPUTER'S CHOICES
function playRound(player, comp) {

    // Get choices and convert to lowercase
    let playerChoice = player.toLowerCase();
    let computerChoice = comp.toLowerCase();

    // Initialize intVar for winner (Player win = 1; Computer win = 0; Tie = null;)
    let playerWins = 0;

    // Evaluate winner based on playerChoice
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

    // Initiate intVars for player and computer scores
    playerScore = 0;
    compScore = 0;

    // Loop five rounds
    for (let i = 0; i < 5; i++) {

        // Get choices
        let compSelection = getComputerChoice()
        let playerSelection = prompt("Please enter Paper, Rock or Scissors")

        // Start round
        let result = playRound(playerSelection, compSelection);
        
        // Add score and send round message
        if (result === 1) {
            playerScore += 1;
            console.log(`You win! ${playerSelection} beats ${compSelection}`);
        } else if (result === 0) {
            compScore += 1;
            console.log(`You loose! ${compSelection} beats ${playerSelection}`);
        } else {
            console.log(`Nobody wins, both chose ${compSelection}`)
        }
     }

     // Game over - present the game winner
     if (playerScore > compScore) {
        console.log(`Congratulations! You beat the computer with ${playerScore} - ${compScore}`);
     } else if (playerScore < compScore) {
        console.log(`Too bad! You lost against the computer with ${playerScore} - ${compScore}`);
     } else {
        console.log(`It's a tie! Score is ${playerScore} - ${compScore}`)
     }

}

game()





