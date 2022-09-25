//Global for scoring
let playerScore = 0;
let computerScore = 0;
// let playerChoice = '';
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const outcome = document.querySelector('.outcome');
const score = document.querySelector('.score');

//Gets player selection
document.getElementById('rock').addEventListener('click', getPlayerChoice);
document.getElementById('paper').addEventListener('click', getPlayerChoice);
document.getElementById('scissors').addEventListener('click', getPlayerChoice);

function getPlayerChoice() {
    const playerChoice = this.value;
    const computerChoice = getComputerChoice();

    console.log(`You chose ${playerChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);

    determineWinner(playerChoice, computerChoice);
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
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.innerText = 'Draw!';
        outcome.appendChild(p1);
        p2.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        score.appendChild(p2);
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        playerScore++;
        p1.innerText = 'Player wins!';
        outcome.appendChild(p1);
        p2.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        score.appendChild(p2);
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        playerScore++;
        p1.innerText = 'Player wins!';
        outcome.appendChild(p1);
        p2.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        score.appendChild(p2);
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        playerScore++;
        p1.innerText = 'Player wins!';
        outcome.appendChild(p1);
        p2.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        score.appendChild(p2);
    } else {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        computerScore++;
        p1.innerText = 'Computer wins!';
        outcome.appendChild(p1);
        p2.innerText = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        score.appendChild(p2);
    }
}

//single round of the game
function gameRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`You chose ${this.playerChoice}!`);
    console.log(`The computer chose ${computerChoice}!`);

    determineWinner(playerChoice, computerChoice);
}

//Play 5 rounds
// function game() {
//     for (let i = 0; i < 5; i++) {
//         gameRound();
//         console.log(`Player's score: ${playerScore}`);
//         console.log(`Computer's score: ${computerScore}`);
//     }
//     if (playerScore > computerScore) {
//         console.log('Player won the match!');
//     } else {
//         console.log('The computer won the match');
//     }

// }