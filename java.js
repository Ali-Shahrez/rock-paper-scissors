console.log('Welcome!');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}
// function getHumanChoice() {
//     let userChoice = prompt('Choose: Rock, Paper or Scissors');
//     return userChoice.trim().toLowerCase();
// }

let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Tie! You both chose the same.');
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors.');
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock.');
        humanScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beat Paper.');
        humanScore++;
    }
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose! Rock beats Scissors.');
        computerScore++;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose! Paper beats Rock.');
        computerScore++;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose! Scissors beat Paper.');
        computerScore++;
    }
    
    console.log("Your Score: " + humanScore);
    console.log("Computer's Score: " + computerScore);
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener('click', getHumanChoice)
});

function getHumanChoice(event) {
    const choice = event.target.id
    playGame(choice)
};

function playGame(humanChoice) {
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
}