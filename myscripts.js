function getUserChoice(userInput) {
     let userChoice = userInput.toLowerCase();
      if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userInput;
      }
  }

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
        if (computerChoice === 0) {
        return "rock";
        }
        else if (computerChoice === 1) {
        return "paper";
        }
        else if(computerChoice === 2) {
        return "scissors";
        }
}

const playerSelection = getUserChoice 
const computerSelection = getComputerChoice

function playRound(playerSelection, computerSelection){
    if (userChoice === computerChoice) {
        return ('Draw');
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return ('Scissors cut paper.' + playerWinRound);
    }
        else if (computerChoice === 'rock') {
            return ('Rock breaks scissors.' + computerWinRound) ;
        }
    else if (userChoice === 'paper' && computerChoice === 'rock') {
        return ('Paper covers Rock.' + playerWinRound); 
    }
        else if (computerChoice === 'scissors') {
            return ('Scissors cut paper.'  + computerWinRound);
        }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return ('Rock breaks scissors.' + playerWinRound);
    }
        else if (computerChoice === 'paper') {
            return ('Paper covers rock.'  + computerWinRound);
        }
}


 function game() {
  let (round = playRound);
  for (let i = 0; i < 5; i++) ; {
    if ((i > 0) && (i != 0) && (i <= 5));
    return ("Round" + i)
  }
}



