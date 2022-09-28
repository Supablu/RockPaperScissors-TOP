//Global for scoring
let playerScore = 0;
let computerScore = 0;
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
let outcome = document.querySelector('.outcome');
let score = document.querySelector('.score');
let gameOver = document.querySelector('#gameOver');
let button = document.querySelector('.reset');

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
        document.getElementById('outcome').textContent = 'Draw!';
        document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        document.getElementById('outcome').textContent = 'Player wins!';
        playerScore++;
        document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        document.getElementById('outcome').textContent = 'Player wins!';
        playerScore++;
        document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        document.getElementById('outcome').textContent = 'Player wins!';
        playerScore++;
        document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    } else {
        document.getElementById('outcome').textContent = 'Computer wins!';
        computerScore++;
        document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    }
    //Once player or computer reacher a score of 5 overall winner is displayed 
    if (playerScore === 5) {
        document.getElementById('gameOver').textContent = 'Player has won the game!';
    } else if (computerScore === 5) {
        document.getElementById('gameOver').textContent = 'Computer has won the game!';
    }
    gameEnd();
}

//Restart game after either player reaches a score of 5
function gameEnd() {
    if (playerScore === 5 || computerScore === 5) {
        let btn = document.createElement('button');
        btn.id = 'reset';
        btn.type = 'button';
        btn.innerHTML = 'Play again?';
        document.body.appendChild(btn);

        btn.addEventListener('click', function (event) {
            event.target.remove();
            playerScore = 0;
            computerScore = 0;
            document.getElementById('gameOver').textContent = '';
            document.getElementById('outcome').textContent = '';
            document.getElementById('score').textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
        });
    }
}



// function gameEnd() {
//     if (playerScore === 5 || computerScore === 5) {
//         let btn = document.createElement('button');
//         btn.id = 'reset';
//         btn.type = 'button';
//         btn.innerHTML = 'Play again?';
//         document.body.appendChild(btn);

//         btn.addEventListener('click', function (event) {
//             event.target.remove();
//             playerScore = 0;
//             computerScore = 0;
//         });
//     }
// }

//single round of the game
// function gameRound() {
//     const playerChoice = getPlayerChoice();
//     const computerChoice = getComputerChoice();
//     console.log(`You chose ${this.playerChoice}!`);
//     console.log(`The computer chose ${computerChoice}!`);

//     determineWinner(playerChoice, computerChoice);
// }

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