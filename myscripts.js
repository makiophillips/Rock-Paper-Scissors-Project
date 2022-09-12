const playerWinRound = ("Player wins!");
const computerWinRound= ("Computer wins!");
let playerChoice ;
let computerChoice ;
let winner = [];

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

function playRound();
	

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




