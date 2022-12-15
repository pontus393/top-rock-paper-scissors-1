

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

// FUNCTION FOR GAME ROUND WITH PLAYER AND COMPUTER CHOICE
function playRound(player, comp) {

    let playerChoice = player;
    let computerChoice = comp;

    return player + " " + comp;
}

console.log(playRound("Paper", getComputerChoice()));

// Create stringVar containing player choice (to be updated with input at later stage)

// Create switch statements for all possible combinations

