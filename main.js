let computerSelection;
let humanSelection;
let humanScore=0;
let computerScore=0;


function getComputerChoice(){
   let random = Math.floor(Math.random() * 3);

   if (random == 0) {
    computerSelection = "ROCK";
   }

   else if  (random == 1) {
    computerSelection = "PAPER";
    
   }
   else if  (random == 2) {
    computerSelection = "SCISSOR";
    }
   return computerSelection;
}

function getHumanChoice(){
    humanSelection = prompt("Rock, Paper, Scissor", "Rock").toUpperCase();
    return humanSelection
}

 function playRound(humanChoice,computerChoice) {
    getComputerChoice();
    getHumanChoice();

 if (computerSelection == "ROCK" && humanSelection == "ROCK") {
    alert("It's a Tie, You are both rock!");
 }

 }

 
console.log(humanSelection);
console.log(computerSelection);