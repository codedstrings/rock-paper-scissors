let round = 0;
let playerscore = 0;
let computerscore = 0;
let isBestOfFive = true;
const gameTypeDisplay = document.querySelector('.game-type');
gameTypeDisplay.innerText = (isBestOfFive)?'(Best score out of 5 rounds wins)':'(Player who scores 5 points first wins)'

function getComputerChoice() {
    let min = 0,
        max = 3
    const ran = Math.floor(min + Math.random() * (max - min)) //generate random number from min=0 upto max=3(exclusive)
    const arr = ['rock', 'paper', 'scissor']
    return arr[ran]
}


function playRound(playerSelection) {
    //get computer selection
    let computerSelection = getComputerChoice();
    //print both players selection
    let selectionStr= 'You selected: '+playerSelection +' and computer selected: ' + computerSelection;
    console.log(selectionStr);
    document.querySelector('.selection').textContent=selectionStr;

    let winner = 0;
    let roundWinner='';
    //0 equals tie,
    //1 equals player won
    //2 equals computer won.
    if (playerSelection === computerSelection) {
        roundWinner="it's a tie!";
    }
    else if (
        (playerSelection == 'rock' && computerSelection == 'scissor') ||
        (playerSelection == 'scissor' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        roundWinner='You win! ' + playerSelection + ' beats ' + computerSelection;
        winner = 1;
    }
    else {
        roundWinner='You lose. ' + computerSelection + ' beats ' + playerSelection;
        winner = 2;
    }
    console.log(roundWinner);
    document.querySelector('.roundWinner').textContent=roundWinner;
    return winner;
}
function removeListeners(){
    rockBtn.removeEventListener('click', chooseRock);
    paperBtn.removeEventListener('click', choosePaper);
    scissorBtn.removeEventListener('click', chooseScissor);
}
function scoreboard1(winner) {
    //best of 5 
    if (round < 5) {
        //update scoreboard and round based on the winner.
        if (winner == 1) {
            playerscore++
        } else if (winner == 2) {
            computerscore++
        }
        //nothing is done for a tie. ie winner==0;
        console.log(
            'scoreboard: you-' + playerscore + ', computer-' + computerscore
        );
        document.querySelector('.playerscore-span').textContent=playerscore;
        document.querySelector('.computerscore-span').textContent=computerscore;
        round++;
    }
    if (round >= 5) { 
        removeListeners();
        // printing the winner to the console.
        let finalWinnerText=" ";
        if (playerscore == computerscore) {
            finalWinnerText = "It's a tie, play again";
        }
        else if (playerscore > computerscore) {
            finalWinnerText = 'You win the game!';
        }
        else{
            finalWinnerText = 'You lost to a computer!';
        } 
        console.log(finalWinnerText);
        document.querySelector('.finalWinner').textContent=finalWinnerText;
        
    }
}
function scoreboard2(winner) {
    let finalWinnerText='';
    //update scoreboard and round based on the winner who scores 5 first.
    if (winner == 1) {
        playerscore++;
    } else if (winner == 2) {
        computerscore++;
    }
    console.log(
        'scoreboard: you-' + playerscore + ', computer-' + computerscore
    )
    document.querySelector('.playerscore-span').textContent=playerscore;
    document.querySelector('.computerscore-span').textContent=computerscore;
    round++;

    //printing the winner
    if (playerscore === 5) {
        finalWinnerText="You win the game! Reload to play again";
        console.log(finalWinnerText);
        document.querySelector('.finalWinner').textContent=finalWinnerText;

        removeListeners();
    }
    if (computerscore === 5) {
        finalWinnerText="You lost to a computer! Reload to play again";
        console.log(finalWinnerText);
        document.querySelector('.finalWinner').textContent=finalWinnerText;
        removeListeners();
    }
}


function game(playerSelection) {
    let Roundstr='Round ' + (round + 1);
    //to display the rounds
    let roundpara=document.querySelector('.roundpara');
    roundpara.textContent=Roundstr;
    console.log(Roundstr);
    computerSelection = getComputerChoice();
    let winner = playRound(playerSelection);
    if(isBestOfFive){
        scoreboard1(winner);
    }
    else{
        scoreboard2(winner);
    }
}

function chooseRock() {
    game('rock');
}
function choosePaper() {
    game('paper');
}
function chooseScissor() {
    game('scissor');
}

let rockBtn = document.querySelector('.rock');
let paperBtn = document.querySelector('.paper');
let scissorBtn = document.querySelector('.scissors');

rockBtn.addEventListener('click', chooseRock);
paperBtn.addEventListener('click', choosePaper);
scissorBtn.addEventListener('click', chooseScissor);
