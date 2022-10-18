
function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random() *3);
    return choices[randomIndex];
}



function getPlayerChoice() {
    return prompt("rock paper or scissors");
}



function playOneRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerChoice();
    const playerSelectionLower = playerSelection.toLowerCase();
    if (playerSelectionLower === "rock" && computerSelection === "rock") {
        return "It's a tie.";
    } else if (playerSelectionLower === "rock" && computerSelection === "paper") {
        return "You lose, paper beats rock";
    } else if (playerSelectionLower === "rock" && computerSelection === "scissors") {
        return "You win, rock beats scissors";
    } else if (playerSelectionLower === "scissors" && computerSelection === "scissors") {
        return "It's a tie.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "rock") {
        return "You lose, rock beats scissors.";
    } else if (playerSelectionLower === "scissors" && computerSelection === "paper") {
        return "You win, scissors beats paper.";
    }  else if (playerSelectionLower === "paper" && computerSelection === "paper") {
        return "It's a tie.";
    } else if (playerSelectionLower === "paper" && computerSelection === "scissors") {
        return "You lose, scissors beats paper.";
    } else if (playerSelectionLower === "paper" && computerSelection === "rock"){
        return "You win, paper beats rock.";
    }
}
 function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result = playOneRound();
        if(result.includes("win")) {
            playerScore+=1;
        } else if (result.includes("lose")) {
            computerScore+=1;
        };
        console.log(result);
        console.log("The player score is " + playerScore + " and the computer score is " +computerScore);
     }

    if (playerScore > computerScore) {
        console.log("Congratulations! You beat the computer!");
    } else if(playerScore < computerScore) {
        console.log("Sorry you have lost, please try again");
    } else {
        console.log("It's a tie in the end!");
    };
 }