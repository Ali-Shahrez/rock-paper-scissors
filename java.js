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
let roundCount = 0;
let maxRounds = 5;

function playRound(humanChoice, computerChoice) {
    let message = '';

    if (humanChoice === computerChoice) {
        message = `Tie! You both chose ${humanChoice}.`;
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        message = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        message = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }
    roundCount++
    resultDiv.textContent=message;
    scoreDiv.textContent = `Round ${roundCount} — Your Score: ${humanScore} | Computer Score: ${computerScore}`;

    if (roundCount === maxRounds) {
        endGame()
    }
}
function endGame() {
    let finalMsg = '';
    if (humanScore > computerScore) {
        finalMsg = '🎉 You win the game!';
    } else if (computerScore > humanScore) {
        finalMsg = '😢 You lose the game!';
    } else {
        finalMsg = "🤝 It's a tie!";
    }

    finalResultDiv.textContent = finalMsg;
    resetBtn.style.display = 'block';

        // 🔒 Disable all game buttons
    buttons.forEach(button => {
    button.disabled = true;
    });

        
}

const resetBtn = document.getElementById('reset');

resetBtn.addEventListener('click', ()=> {
    humanScore=0;
    computerScore=0;
    roundCount=0;
    resultDiv.textContent=''
    scoreDiv.textContent=''
    finalResultDiv.textContent=''
    resetBtn.style.display='none'

        // 🔓 Re-enable all game buttons
    buttons.forEach(button => {
        button.disabled = false;
    });
})


const buttons = document.querySelectorAll(".game-btn");
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

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const finalResultDiv = document.getElementById('final-result');

