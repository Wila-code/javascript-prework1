function playGame(playerInput){
/*  function clearMessages(){*/
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
      } else return 'Nieznany ruch! Wybierz ponownie!';
  }

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

console.log('Gracz wpisał: ' + playerInput);
let playerMove = getMoveName(playerInput)

printMessage(displayResult(computerMove, playerMove));
}

document.getElementById('play-rock').addEventListener('click', function(){
  printMessage(playGame(1));
});
document.getElementById('play-paper').addEventListener('click', function(){
  printMessage(playGame(2));
});
document.getElementById('play-scissors').addEventListener('click', function(){
  printMessage(playGame(3));
});
