console.log('Hello World')
function getComputerChoice() {
    const randomNumber=Math.floor(Math.random()*3)  //generates 0,1 or 2
    if (randomNumber===0) {
        return 'Rock';
    }
    else if (randomNumber===1) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

function getHumanChoice() {
    let userChoice=prompt('Choose: Rock, Paper or Scissors');
    return userChoice.trim().toLowerCase()
}
