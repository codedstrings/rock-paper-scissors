let round = 0;
let playerscore = 0;
let computerscore = 0;

function getComputerChoice() {
    let min = 0,
        max = 3
    const ran = Math.floor(min + Math.random() * (max - min)) //generate random number from min=0 upto max=3(exclusive)
    const arr = ['rock', 'paper', 'scissor']
    return arr[ran]
}


function playRound(playerSelection) {
    console.log('Round' + (round + 1));
    let computerSelection = getComputerChoice()
    console.log(
        'you selected: ' +
        playerSelection +
        ' and computer selected: ' +
        computerSelection
    )
    let winner = 0 //0 equals tie,
    //1 equals player won
    //2 equals computer won.
    switch (playerSelection) {
        case 'rock':
            if (computerSelection == 'scissor') {
                console.log(
                    'You win! ' + playerSelection + ' beats ' + computerSelection
                )
                winner = 1
            } else if (computerSelection == 'paper') {
                console.log(
                    'You lose. ' + computerSelection + ' beats ' + playerSelection
                )
                winner = 2
            } else console.log('its a tie!')
            break
        case 'paper':
            if (computerSelection == 'rock') {
                console.log(
                    'You win! ' + playerSelection + ' beats ' + computerSelection
                )
                winner = 1
            } else if (computerSelection == 'scissor') {
                console.log(
                    'You lose. ' + computerSelection + ' beats ' + playerSelection
                )
                winner = 2
            } else console.log('its a tie!')
            break

        case 'scissor':
            if (computerSelection == 'paper') {
                console.log(
                    'You win! ' + playerSelection + ' beats ' + computerSelection
                )
                winner = 1
            } else if (computerSelection == 'rock') {
                console.log(
                    'You lose. ' + computerSelection + ' beats ' + playerSelection
                )
                winner = 2
            } else console.log('its a tie!')
            break

        default:
            break
    }
    return winner
}

function scoreboard(winner) {
    //best of 5
    // console.log('Round' + (round + 1))
    if (round < 5) {
        //update scoreboard and round based on the winner.
        if (winner == 1) {
            playerscore++
            // round++;
        } else if (winner == 2) {
            computerscore++
            // round++;
        }
        //nothing is done for a tie. ie winner==0;
        console.log(
            'scoreboard: you-' + playerscore + ', computer-' + computerscore
        )
        round++;
    }
    if (round >= 5) { 
        rockBtn.removeEventListener('click', chooseRock)
        paperBtn.removeEventListener('click', choosePaper)
        scissorBtn.removeEventListener('click', chooseScissor)

        // printing the winner to the console.
        if (playerscore == computerscore) console.log("It's a tie, play again")
        else if (playerscore > computerscore) console.log('You win the game!')
        else console.log('You lost to a computer!')
    }
}
// function scoreboard2(winner) {

//     if (round < 5) {
//         //update scoreboard and round based on the winner.
//         if (winner == 1) {
//             playerscore++
//             // round++;
//         } else if (winner == 2) {
//             computerscore++
//             // round++;
//         }
//         //nothing is done for a tie. ie winner==0;
//         console.log(
//             'scoreboard: you-' + playerscore + ', computer-' + computerscore
//         )
//         round++;
//     }
//     if (round >= 5) { 
//         rockBtn.removeEventListener('click', chooseRock)
//         paperBtn.removeEventListener('click', choosePaper)
//         scissorBtn.removeEventListener('click', chooseScissor)

//         // printing the winner to the console.
//         if (playerscore == computerscore) console.log("It's a tie, play again")
//         else if (playerscore > computerscore) console.log('You win the game!')
//         else console.log('You lost to a computer!')
//     }
// }

// function game(playerSelection) {
//     if (round < 5) {
//         computerSelection = getComputerChoice()
//         let winner = playRound(playerSelection)
//         scoreboard(winner)
//     }

//     if (round >= 5) {
//         rockBtn.removeEventListener('click', chooseRock)
//         paperBtn.removeEventListener('click', choosePaper)
//         scissorBtn.removeEventListener('click', chooseScissor)

//         // printing the winner to the console.
//         if (playerscore == computerscore) console.log("It's a tie, play again")
//         else if (playerscore > computerscore) console.log('You win the game!')
//         else console.log('You lost to a computer!')
//     }
// }
function game(playerSelection) {
    computerSelection = getComputerChoice();
    let winner = playRound(playerSelection);
    scoreboard(winner);
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

let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let scissorBtn = document.querySelector('.scissors')

rockBtn.addEventListener('click', chooseRock)
paperBtn.addEventListener('click', choosePaper)
scissorBtn.addEventListener('click', chooseScissor)

//   game() is not required and can be removed
