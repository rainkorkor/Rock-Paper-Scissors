
let playerScoreValue = 0;
let computerScoreValue = 0;
let playerScore = document.querySelector(".player-score");
let computerScore= document.querySelector(".computer-score");
let result = document.querySelector('.result');
let rockBtn = document.querySelector('.rock-button');
let paperBtn =document.querySelector('.paper-button');
let scissorsBtn = document.querySelector('.scissors-button');
let playerMove = document.querySelector(".player-move");
let computerMove = document.querySelector(".computer-move");


rockBtn.addEventListener('click', function () {
    playOneRound(getComputerChoice(),'rock');
    checkResult(computerScoreValue,playerScoreValue);
});
paperBtn.addEventListener('click', function(){
    playOneRound(getComputerChoice(),'paper');
    checkResult(computerScoreValue,playerScoreValue);
});
scissorsBtn.addEventListener('click', function (){
    playOneRound(getComputerChoice(),'scissors');
    checkResult(computerScoreValue,playerScoreValue);
});


function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}

function playOneRound(computerSelection,playerSelection) {
    playerMove.textContent = playerSelection;
    computerMove.textContent = computerSelection;
    const playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === "rock" && computerSelection === "rock") {
        result.textContent =  "It's a tie.";
    } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
        result.textContent = "You lose, paper beats rock";
        computerScoreValue+=1;
        computerScore.textContent = `Computer score: ${computerScoreValue}`;
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        result.textContent = "You win, rock beats scissors";
        playerScoreValue+=1;
        playerScore.textContent = `Player score: ${playerScoreValue}`;
    } else if (playerSelectionLower === "scissors" && computerSelection === "scissors") {
        result.textContent = "It's a tie.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
        result.textContent = "You lose, rock beats scissors.";
        computerScoreValue+=1;
        computerScore.textContent = `Computer score: ${computerScoreValue}`;
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        result.textContent = "You win, scissors beats paper.";
        playerScoreValue+=1;
        playerScore.textContent = `Player score: ${playerScoreValue}`;
    }  else if (playerSelectionLower === "paper" && computerSelection === "paper") {
        result.textContent = "It's a tie.";
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
        result.textContent = "You lose, scissors beats paper.";
        computerScoreValue+=1;
        computerScore.textContent = `Computer score: ${computerScoreValue}`;
    } else if (playerSelectionLower === "paper" && computerSelection === "rock"){
        result.textContent = "You win, paper beats rock.";
        playerScoreValue+=1;
        playerScore.textContent = `Player score: ${playerScoreValue}`;
    }
}
let newDiv = document.createElement('div');
newDiv.style.textAlign = 'centre';
let reset = document.createElement('button');
reset.textContent = 'Reset';

reset.addEventListener('click', function () {
    scissorsBtn.disabled = false;
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    result.textContent=''
    playerScoreValue=0;
    computerScoreValue=0;
    playerScore.textContent='Player score: 0';
    computerScore.textContent='Computer score 0';
    playerMove.textContent ='';
    computerMove.textContent='';
    result.removeChild(reset);


})

function checkResult(computerScoreValue,playerScoreValue){
    if (computerScoreValue === 5){
        document.querySelector('.result').textContent = 'Sorry you lost, click on the button below to try again!';
        result.appendChild(reset);
        scissorsBtn.disabled = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;


    } else if (playerScoreValue === 5){
        document.querySelector('.result').textContent = 'Congratulations you won! Click on the button below to play again';
        result.appendChild(reset);
        scissorsBtn.disabled = true;
        rockBtn.disabled = true;
        paperBtn.disabled = true;

    };
}



 