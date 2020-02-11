
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);
let computerMove = getMoveName(randomNumber);

console.log(
  function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nożyce';
  } else
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
)
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else if (randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
*/
/*
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else if(playerInput == '2') {
  playerMove = 'papier';
}

else if(playerInput == '3'){
  playerMove = 'nożyce';
}
*/
console.log(
function displayResult(argComputerMove, argPlayerMove) {

if(argComputerMove == argPlayerMove) {
    return 'Remis!';
} else if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    return 'Ty wygrywasz!';
} else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    return 'Ty wygrywasz!';
} else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    return 'Ty wygrywasz!';
} else if(argPlayerMove == 'kamień' && argComputerMove == 'papier'){
    return 'Ty przegrywasz!';
} else if(argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
    return 'Ty przegrywasz!';
} else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
    return 'Ty przegrywasz!';
} else if(argPlayerMove == 'nieznany ruch')
    return 'Nieznany ruch! Wybierz ponownie!';

printMessage(displayResult(computerMove, playerMove));

}
