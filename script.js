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
    let winner=0; //0 equals tie, 
                  //1 equals player won
                  //2 equals computer won.
    switch (playerSelection) {
        case "rock":
            if(computerSelection=="scissor"){
                console.log("You win! " +playerSelection +" beats "+computerSelection);
                winner=1;
            }
            else if(computerSelection=="paper"){
                console.log("You lose. "+computerSelection+" beats "+playerSelection);
                winner=2;
            }
            else console.log("its a tie!");
            break;
        case "paper":
            if(computerSelection=="rock"){
                console.log("You win! " +playerSelection +" beats "+computerSelection);
                winner=1;
            }
            else if(computerSelection=="scissor"){
                console.log("You lose. "+computerSelection+" beats "+playerSelection);
                winner=2
            }
            else console.log("its a tie!");
            // else return "its a tie!";
            break;
        case "scissor":
            if(computerSelection=="paper"){
                console.log("You win! " +playerSelection +" beats "+computerSelection); 
                winner=1;
            }
            else if(computerSelection=="rock"){
                console.log("You lose. "+computerSelection+" beats "+playerSelection);
                winner=2;
            }
            else console.log("its a tie!");
            // else return "its a tie!";
            break;
        default:
            break;
    }
    return winner;
  }

function game(){
    let round=0;
    let playerscore=0;
    let computerscore=0;

    //game plays till round becomes 5.
    while(round<5){
        console.log("Round"+(round+1));
        //get userinput and convert into lowercase to be caseinsensitve.
        let playerSelection = prompt("rock, paper, or scissor?").toLowerCase();
        const computerSelection = getComputerChoice();
            console.log("You: "+playerSelection+", computer: "+computerSelection);

        //if winner=1 player wins, winner=2 computer wins, and winner=0 is tie
        let winner=playRound(playerSelection,computerSelection);

        //update scoreboard and round based on the winner.
        if(winner==1){
            playerscore++;
            // round++;
        }
        else if(winner==2){
            computerscore++;
            // round++;
        }
        //nothing is done for a tie. ie winner==0;
        console.log("scoreboard: you-"+playerscore+", computer-"+computerscore);
        round++;
    }

    //printing the winner to the console.
    if(playerscore==computerscore) console.log("It's a tie, play again");
    else if(playerscore>computerscore) console.log("You win the game!");
    else console.log("You lost to a computer!")

}

 game();
//   const computerSelection="scissor"

//   console.log(playRound(playerSelection, computerSelection));