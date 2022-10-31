
let playerScoreValue = 0;
let computerScoreValue = 0;
let playerScore = document.querySelector(".player-score");
let computerScore= document.querySelector(".computer-score");


function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}

function chooseRock() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'rock';
    playOneRound(computerSelection,playerSelection);
    if (document.querySelector(".result").textContent.includes('win')) {
        playerScore.textContent = '';
        playerScoreValue+=1;
        playerScore.textContent = `Player score: ${playerScoreValue}`;
    } else if (document.querySelector(".result").textContent.includes('lose')) {
        computerScore.textContent ='';
        computerScoreValue+=1;
        computerScore.textContent = `Computer score: ${computerScoreValue}`;
    }
}
function chooseScissors() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'scissors';
    playOneRound(computerSelection,playerSelection);
    if (document.querySelector(".result").textContent.includes('win')) {
        playerScore.textContent = '';
        playerScoreValue+=1;
        playerScore.textContent =  `Player score: ${playerScoreValue}`;
    } else if (document.querySelector(".result").textContent.includes('lose')) {
        computerScore.textContent='';
        computerScoreValue+=1;
        computerScore.textContent = `Computer Score: ${computerScoreValue}`;
    }
}

function choosePaper() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'paper';
    playOneRound(computerSelection,playerSelection);
    if (document.querySelector(".result").textContent.includes('win')) {
        playerScore.textContent ='';
        playerScoreValue+=1;
        playerScore.textContent = `Player score: ${playerScoreValue}`;
    } else if (document.querySelector(".result").textContent.includes('lose')) {
        computerScore.textContent='';
        computerScoreValue+=1;
        computerScore.textContent = `Computer score: ${computerScoreValue}`;
    }
}
function playOneRound(computerSelection,playerSelection) {
    document.querySelector(".player-move").innerHTML = playerSelection;
    document.querySelector(".computer-move").innerHTML = computerSelection;
    const playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === "rock" && computerSelection === "rock") {
        document.querySelector(".result").textContent =  "It's a tie.";
    } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
        document.querySelector(".result").textContent = "You lose, paper beats rock";
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        document.querySelector(".result").textContent = "You win, rock beats scissors";
    } else if (playerSelectionLower === "scissors" && computerSelection === "scissors") {
        document.querySelector(".result").textContent = "It's a tie.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
        document.querySelector(".result").textContent = "You lose, rock beats scissors.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        document.querySelector(".result").textContent = "You win, scissors beats paper.";
    }  else if (playerSelectionLower === "paper" && computerSelection === "paper") {
        document.querySelector(".result").textContent = "It's a tie.";
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
        document.querySelector(".result").textContent = "You lose, scissors beats paper.";
    } else if (playerSelectionLower === "paper" && computerSelection === "rock"){
        document.querySelector(".result").textContent = "You win, paper beats rock.";
    }
}



if (computerScoreValue === 5){
    alert("Sorry you lost, click ok to try again!")
    document.querySelector('.result').textContent = '';
    document.querySelector('.computer-score').textContent = '';
    document.querySelector('.player-score').textContent = '';
} else if (playerScoreValue === 5){
    alert("Congratulations you won! Click ok to try again")
    document.querySelector('.result').textContent = '';
    document.querySelector('.computer-score').textContent = '';
    document.querySelector('.player-score').textContent = '';
};

//  function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playOneRound();
//         if(result.includes("win")) {
//             playerScore+=1;
//         } else if (result.includes("lose")) {
//             computerScore+=1;
//         };
//         console.log(result);
//         console.log("The player score is " + playerScore + " and the computer score is " +computerScore);
//      }

//     if (playerScore > computerScore) {
//         console.log("Congratulations! You beat the computer!");
//     } else if(playerScore < computerScore) {
//         console.log("Sorry you have lost, please try again");
//     } else {
//         console.log("It's a tie in the end!");
//     };
//  }

 