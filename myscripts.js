const playerWinRound = ("Player wins!");
const computerWinRound= ("Computer wins!");
let playerChoice ;
let computerChoice ;
let winners = [];

function gameOver() {
	//promts button to restart game.
	playRound();

	roundWins();
}

function gameStart() {
	//plays rps until player or computer wins 5 rounds.
	let imgs = document.querySelectorAll("img");
	imgs.forEach((img) => 
		img.addEventListener("click" , () => {
			if(img.id) {
			playRound(img.id);
			}
		})
	);
}

function playRound(playerChoice); {
	let wins = checkWins();
	if(wins >= 5) {
		return
	}
	const computerSelection = getComputerChoice();
	const winner = checkWinner(playerSelection, computerSelection);
	winners.push(winner);
	winTotal();
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

function checkWins() {
	const playerWins = winners.filter((item) => item == "Player").length;
	const computerWins = winners.filter((item) => item == "Computer").length;
	return Math.max(playerWins, computerWins);
}

function checkWinner(playerChoice, computerChoice){
	if (
		(playerChoice == "rock" && computerChoice == "scissors") || 
		(playerChoice == "paper" && computerChoice == "rock") || 
		(playerChoice == "scissors" && computerChoice == "paper") 
	) {
		return "Player";
	}	else if(playerChoice == computerChoice) {
		return "Tie";
	}	else {
		return "Computer";
	}
}





