//Take player selection
function getPlayerChoice() {
    let playerChoice = prompt('Rock, paper, or scissors?');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
    } else {
        prompt('Please make a valid selection!');
    }
}


//Generate computer choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * 3) + 1;
    if (randomChoice === 1) {
        return 'rock';
    } else if (randomChoice === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//determine who wins
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Draw!';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Player wins!';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        return 'Player wins!';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        return 'Player wins!';
    } else {
        return 'Computer wins!';
    }
}


//single round of the game
function gameRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${playerChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);

    console.log(determineWinner(playerChoice, computerChoice));
}

//Play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        return gameRound();
    }
}