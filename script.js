

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

console.log(getComputerChoice())

// Create if statements evaluating value and returning "Rock", "Paper" or "Scissors" depending on the value
// Create stringVar containing the result