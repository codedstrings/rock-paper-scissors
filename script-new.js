function getComputerChoice () {
  let min = 0,
    max = 3
  const ran = Math.floor(min + Math.random() * (max - min)) //generate random number from min=0 upto max=3(exclusive)
  const arr = ['rock', 'paper', 'scissor']
  return arr[ran]
}

function playRound (playerSelection) {
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
let round = 0
let playerscore = 0
let computerscore = 0

function scoreboard (winner) {
  //best of 5
  console.log('Round' + (round + 1))
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
    round++
  }
}
function game (playerSelection) {
  if (round < 5) {
    computerSelection = getComputerChoice()
    let winner = playRound(playerSelection)
    scoreboard(winner)
  } else {
    rockBtn.removeEventListener('click', () => game('rock'))
    paperBtn.removeEventListener('click', () => game('paper'))
    scissorBtn.removeEventListener('click', () => game('scissor'))
    // printing the winner to the console.
    if (playerscore == computerscore) console.log("It's a tie, play again")
    else if (playerscore > computerscore) console.log('You win the game!')
    else console.log('You lost to a computer!')
  }
}
//chatgpt solution.
// let gameEnded = false;

// function game(playerSelection) {
//   if (!gameEnded && round < 5) {
//     computerSelection = getComputerChoice();
//     let winner = playRound(playerSelection);
//     scoreboard(winner);
//   } else if (!gameEnded) {
//     // Set the flag to indicate that the game has ended
//     gameEnded = true;

//     // Remove event listeners after 5 rounds
//     rockBtn.removeEventListener('click', () => game('rock'));
//     paperBtn.removeEventListener('click', () => game('paper'));
//     scissorBtn.removeEventListener('click', () => game('scissor'));

//     // Print the winner after 5 rounds
//     if (playerscore == computerscore) console.log("It's a tie, play again");
//     else if (playerscore > computerscore) console.log('You win the game!');
//     else console.log('You lost to a computer!');
//   }
// }

let rockBtn = document.querySelector('.rock')
let paperBtn = document.querySelector('.paper')
let scissorBtn = document.querySelector('.scissors')

rockBtn.addEventListener('click', () => game('rock'))
paperBtn.addEventListener('click', () => game('paper'))
scissorBtn.addEventListener('click', () => game('scissor'))



//   game() is not required and can be removed
