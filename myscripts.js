let winners = [];
const choices = ["rock", "paper", "scissors"];

function gameOver() {
	winners = [];
	document.querySelector(".playerScore").textContent = "Score: 0";
	document.querySelector(".computerScore").textContent = "Score: 0";
	document.querySelector(".ties").textContent = "Ties: 0";
	document.querySelector(".winner").textContent = "";
	document.querySelector(".playerChoice").textContent = "";
	document.querySelector(".computerChoice").textContent = "";
	document.querySelector(".reset").style.display = "none";
}

function gameStart() {
	let imgs = document.querySelectorAll("img");
	imgs.forEach((img) => 
		img.addEventListener("click", () => {
			if (img.id) {
			playRound(img.id);
			}
		})
	);
}

function playRound(playerChoice) {
	let wins = checkWins();
	if (wins >= 5) {
		return
	} 
	const computerChoice = getComputerChoice();
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner);
	winTotal();
	roundNumber(playerChoice, computerChoice, winner);
	wins = checkWins();
	if (wins ==5) {
		gameEnd();
	}
}

function gameEnd() {
	let playerWins = winners.filter((item) => item = "Player").length;
	if(playerWins == 5) {
		document.querySelector(".winner").textContent = "You won the Game, Congrats!!"
	} else {
		document.querySelector(".winner").textContent = "Sorry, the computer won this time."
	}
	document.querySelector(".reset")
}

function roundNumber(playerChoice, computerChoice, winner) {
	document.querySelector(".playerChoice").textContent = `You chose: ${
		playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
	}`;
	document.querySelector(
		".computerChoice"
		).textContent = `The Computer chose: ${
		computerChoice.charAt(0).toUpperCase() + playerChoice.slice(1)
	}`;
	document.querySelector(".winner").textContent = `Round Winner! ${winner}`;
}

function roundWinner(winner) {
	if (winner == "Player") {
	  document.querySelector(".winner").textContent = "You won the Round!";
	} else if (winner == "Computer") {
	  document.querySelector(".winner").textContent =
	    "The Computer won the Round";
	} else {
	  document.querySelector(".winner").textContent = "The Round was a tie";
	}
}

function nuumberOfWins() {
	const playerWins = winners.filter((item) => item == "Player").length;
	const computerWins = winners.filter((item) => item == "Computer").length;
	const ties = winners.filter((item) => item == "Ties").length;
	document.querySelector(".playerScore").textContent = `Score: ${playerWins}`;
	document.querySelector(".computerScore").textContent = `Score: ${computerWins}`;
	document.querySelector(".ties").textContent = `Ties: ${ties}`;
}

function getComputerChoice() {
	const choice = choices[Math.floor(Math.random() * choices.length)];
      
	document.querySelector(`.${choice}`).classList.add("active");
      
	setTimeout(() => {
	  document.querySelector(`.${choice}`).classList.remove("active");
	}, 700);
      
	return choice;
      }

function checkWins() {
	const playerWins = winners.filter((item) => item == "Player").length;
	const computerWins = winners.filter((item) => item == "Computer").length;
	return Math.max(playerWins, computerWins);
}

function checkWinner(choice1, choice2) {
	if (
	  (choice1 == "rock" && choice2 == "scissors") ||
	  (choice1 == "scissors" && choice2 == "paper") ||
	  (choice1 == "paper" && choice2 == "rock")
	) {
	  return "Player";
	} else if (choice1 == choice2) {
	  return "Tie";
	} else {
	  return "Computer";
	}
      }

function checkWins() {
	const playerWins = winners.filter((item) => item == "Player").length;
	const computerWins = winners.filter((item) => item == "Computer").length;
	const ties = winners.filter((item) => item == "Tie").length;
}

gameStart();




