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

let humanScore = 0;
let computerScore = 0;

function playGame(playerMove) {

    

    let humanChoice = playerMove.toLowerCase();
    let computerChoice = getComputerChoice();

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
        
        document.querySelector('.player-score').innerHTML = `Player Score: ${humanScore}`;
        document.querySelector('.computer-score').innerHTML = `Computer Score: ${computerScore}`;

    }

    playRound(humanChoice, computerChoice);

}