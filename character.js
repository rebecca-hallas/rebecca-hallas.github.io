document.addEventListener('keydown', changePlayer, false); 
document.addEventListener('keydown', enter, false)

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

function enter(e) {
  var player = document.getElementById("player")
  player.src = "./images/player" + playerIndex + ".png"

  if (playerIndex == 1 && e.keyCode == '13')
  location.replace("https://rebecca-hallas.github.io/homePink.html")

  if (playerIndex == 2 && e.keyCode == '13')
  location.replace("https://rebecca-hallas.github.io/homeGreen.html")
}
