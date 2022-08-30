function getUserChoice(userInput){
    let userChoice = userInput;
      if(userChoice === "Rock" || userChoice === "Paper" || userChoice === "Scissors"){
        return userChoice;
      }
      else {
        return "That didn't quite work.";
    }
  }
