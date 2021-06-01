document.addEventListener('keydown', changePlayer, false); 

var playerIndex = 1;

function changePlayer(e) {

  var player = document.getElementById("player")
  player.src = "./player" + playerIndex + ".png"

    if (e.keyCode == '39') 
        playerIndex++

    if (playerIndex == 4)
    playerIndex = 1

    if (e.keyCode == '37') 
    playerIndex--
    
    if (playerIndex == 0)
        playerIndex = 3;
  }