const playerSelection = getUserChoice();
const computerSelection = getComputerChoice();
let playerScore = 0;
let computerScore = 0;
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

function getUserChoice(userInput) {
    let userChoice = userInput;
      if(userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        return userChoice;
      }
      else {
        return "That didn't quite work.";
    }
  }

  function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
        if(computerChoice === 0){
        return "rock";
    }
        else if(computerChoice === 1)  {
        return "scissors";
    }
        else if(computerChoice === 2) { 
        return "paper";
    }
        else {
            return "Input not valid.";
        }
  }


function determineWinner() {
    if (userChoice === getComputerChoice) {
        return "Tie!";
    }
    else if (userChoice === 'scissors' && getComputerChoice === 'paper') {
        return ('Scissors cut paper.' + playerWinRound);
    }
        else if (getComputerChoice === 'rock') {
            return ('Rock breaks scissors.' + computerWinRound) ;
        }
    else if (userChoice === 'paper' && getComputerChoice === 'rock') {
        return ('Paper covers Rock.' + playerWinRound); 
    }
        else if (getComputerChoice === 'scissors') {
            return ('Scissors cut paper.'  + computerWinRound);
        }
    else if (userChoice === 'rock' && getComputerChoice === 'scissors') {
        return ('Rock breaks scissors.' + playerWinRound);
        }
        else if (getComputerChoice === 'paper') {
            return ('Paper covers rock.'  + computerWinRound);
        }
            else {
                return "That's not right!"
            }
}



