//Global for scoring
let playerScore = 0;
let computerScore = 0;

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
        console.log('Draw!');
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        console.log('Player wins!');
        playerScore++;
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        console.log('Player wins!');
        playerScore++;
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        console.log('Player wins!');
        playerScore++;
    } else {
        console.log('Computer wins!');
        computerScore++;
    }
}


//single round of the game
function gameRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${playerChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);

    determineWinner(playerChoice, computerChoice);
}

//Play 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        gameRound();
        console.log(`Player's score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log('Player won the match!');
    } else {
        console.log('The computer won the match');
    }

}