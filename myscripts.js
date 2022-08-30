function getUserChoice(userInput) {
    let userChoice = userInput;
      if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors") {
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
            return "Input not valid.";}
  }

  