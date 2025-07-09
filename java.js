console.log('Welcome!')
function getComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3)  //generates 0,1 or 2
    if (randomNumber===0) {
        return 'rock';
    }
    else if (randomNumber===1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let userChoice=prompt('Choose: Rock, Paper or Scissors');
    return userChoice.trim().toLowerCase()
}


function playGame() {
    function playRound(humanChoice, computerChoice) {
    if (humanChoice===computerChoice) {
        console.log('Tie! You both chose the same.')
    }
    else if (humanChoice==='rock' && computerChoice==='scissors') {
        console.log('You win! Rock beats Scissors.');
        humanScore++;
    }
    else if (humanChoice==='paper' && computerChoice==='rock') {
        console.log('You win! Paper beats Rock.');
        humanScore++;
    }
    else if (humanChoice==='scissors' && computerChoice==='paper') {
        console.log('You win! Scissors beat Paper.')
        humanScore++;
    }
    else if (computerChoice==='rock' && humanChoice==='scissors') {
        console.log('You lose! Rock beats Scissors.');
        computerScore++;
    }
    else if (computerChoice==='paper' && humanChoice==='rock') {
        console.log('You lose! Paper beats Rock.');
        computerScore++;
    }
    else if (computerChoice==='scissors' && humanChoice==='paper') {
        console.log('You lose! Scissors beat Paper.');
        computerScore++;
    }
}
    let humanScore=0;
    let computerScore=0;
    let humanChoice=getHumanChoice();
    let computerChoice=getComputerChoice();
    let round1=playRound(humanChoice, computerChoice);
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    let round2=playRound(humanChoice, computerChoice);
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    let round3=playRound(humanChoice, computerChoice);
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    let round4=playRound(humanChoice, computerChoice);
    humanChoice=getHumanChoice();
    computerChoice=getComputerChoice();
    let round5=playRound(humanChoice, computerChoice);

    if (humanScore>computerScore) {
        console.log("You win!");
        console.log("Your Score: "+humanScore);
        console.log("Computer's Score: "+computerScore);
    }
    else if (computerScore>humanScore) {
        console.log("You lose!")
        console.log("Your Score: "+humanScore);
        console.log("Computer's Score: "+computerScore);
    }
    else {
        console.log("Tie!")
        console.log("Your Score: "+humanScore);
        console.log("Computer's Score: "+computerScore);  
    }
}