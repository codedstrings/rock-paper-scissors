function getComputerChoice(){
    let min=0,max=3;
    const ran = Math.floor(min + Math.random() * (max - min)); //generate random number from min=0 upto max=3(exclusive)
    // return ran;
    // console.log(ran);
    const arr=["rock","paper", "scissor"];
    return arr[ran];
}
// console.log(getComputerChoice());
function playRound(playerSelection, computerSelection) {
    // your code here!
    switch (playerSelection) {
        case "rock":
            if(computerSelection=="scissor"){
                return "You win! " +playerSelection +" beats "+computerSelection;
            }
            else if(computerSelection=="paper"){
                return "You lose. "+computerSelection+" beats "+playerSelection;
            }
            else return "its a tie!";
            // break;
        case "paper":
            if(computerSelection=="rock"){
                return "You win! " +playerSelection +" beats "+computerSelection;
            }
            else if(computerSelection=="scissor"){
                return "You lose. "+computerSelection+" beats "+playerSelection;
            }
            else return "its a tie!";
            break;
        case "scissor":
            if(computerSelection=="paper"){
                return "You win! " +playerSelection +" beats "+computerSelection;
            }
            else if(computerSelection=="rock"){
                return "You lose. "+computerSelection+" beats "+playerSelection;
            }
            else return "its a tie!";
            break;
        default:
            break;
    }
    // else if(playerSelection==sci){}
  }

  const playerSelection = prompt("rock, paper, or scissor?").toLowerCase();
  const computerSelection = getComputerChoice();
//   const computerSelection="scissor"
  console.log("You: "+playerSelection+", computer: "+computerSelection);
  console.log(playRound(playerSelection, computerSelection));