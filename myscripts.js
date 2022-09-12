const playerWinRound = ("Player wins!");
const computerWinRound= ("Computer wins!");
let playerChoice ;
let computerChoice ;

function getPlayerChoice(userInput) {
    const playerChoice = prompt(userInput).toLowerCase();
      if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors') {
        return playerChoice;
      }
  }



function getComputerChoice() {
    const computerChoice = Math.floor(Math.random()*3)
        if  (computerChoice === 0) {
        return 'rock';
        }
        if  (computerChoice === 1) {
        return 'paper';
        }
        if (computerChoice === 2) {
        return 'scissors';
        }
    }



function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection) {
        return ('Draw');
    }
    if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('Scissors cut paper. '  + playerWinRound);
    }
    if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('Paper covers Rock. '  + playerWinRound); 
    }
     if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return ('Rock breaks scissors. ' + playerWinRound);
    }
        else {
            return ('You lose! ' + computerSelection + ' beats ' + playerSelection)
        }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();



