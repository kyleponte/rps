function getComputerChoice() {
    const randNumber = Math.random();
    let ComputerRoll;
    if (randNumber < 0.33) {
        ComputerRoll = 'rock';
    } else if (randNumber < 0.67) {
        ComputerRoll = 'paper';
    } else {
        ComputerRoll = 'scissors';
    }

    return ComputerRoll;
}

function getHumanChoice() {
    let playerRoll = prompt('Rock, Paper, or Scissors?').toLowerCase();
    return playerRoll;
}



function playGame() {

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            console.log('You tied!')
        } else if ((humanChoice == 'rock' && computerChoice == 'paper') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'scissors' && computerChoice == 'paper')) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore += 1;
        } else {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        }
    }

    for (i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    console.log(`The final score was Player: ${humanScore} to Computer: ${computerScore}`);
}

playGame();
