let computerSelection;
let humanSelection;
let humanScore=0;
let computerScore=0;


function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);

   if (random === 0) {
    computerSelection = "ROCK";
   } else if  (random === 1) {
    computerSelection = "PAPER";
   } else if  (random === 2) {
    computerSelection = "SCISSORS";
    } 
     return computerSelection;
}

function getHumanChoice(){
    humanSelection = prompt("Rock, Paper, Scissors", "Rock").toUpperCase();
    return humanSelection
}

 function playRound() {
    getComputerChoice();
    getHumanChoice();

    if (humanSelection === computerSelection) {
      alert(`It's a tie! you both chose  ${humanSelection}`);
    } else if(
      (humanSelection == "ROCK" && computerSelection == "SCISSORS" ) ||
      (humanSelection == "PAPER" && computerSelection == "ROCK" ) ||
      (humanSelection == "SCISSORS" && computerSelection == "PAPER" )
    ) 
    {
      humanScore++;
      alert(`${humanSelection} beats ${computerSelection}, You Win!!!` );
      alert(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    else if(
      (computerSelection == "ROCK" && humanSelection == "SCISSORS" ) ||
      (computerSelection == "PAPER" && humanSelection == "ROCK" ) ||
      (computerSelection == "SCISSORS" && humanSelection == "PAPER" )
    ) 
    {
      computerScore++;
      alert(`${computerSelection} beats ${humanSelection}, Computer Win!!!` );
      alert(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
    }

    else {
      alert("Invalid input!!")
    }
 }



   function playGame(){
      for (let $i=0; $i < 5; $i++ ) {
         playRound();
      }
      if(humanScore > computerScore) {
         alert("You Win!!")
      }

      else if(humanScore < computerScore) {
         alert("You Lose! Computer wins!")
      }

      else {
         alert("It's a Tie!")
      }
   }

   playGame();
