document.addEventListener('keydown', changePlayer, false); 
document.addEventListener('keydown', selectPlayer, false)

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

function selectPlayer(e) {
  var player = document.getElementById("player")
  player.src = "./images/player" + playerIndex + ".png"

  if (playerIndex == 1 && e.keyCode == '13')
  location.replace("https://rebecca-hallas.github.io/pink/homePink.html")

  if (playerIndex == 2 && e.keyCode == '13')
  location.replace("https://rebecca-hallas.github.io/green/homeGreen.html")

  if (playerIndex == 3 && e.keyCode == '13')
  location.replace("https://rebecca-hallas.github.io/red/homeRed.html")
}

// function selectClick(e) {
//   var player = document.getElementById("player")
//   player.src = "./images/player" + playerIndex + ".png"

//   if (playerIndex == 1)
//   location.replace("https://rebecca-hallas.github.io/pink/homePink.html")

//   if (playerIndex == 2)
//   location.replace("https://rebecca-hallas.github.io/green/homeGreen.html")

//   if (playerIndex == 3)
//   location.replace("https://rebecca-hallas.github.io/red/homeRed.html")
// }

// function clickArrow(e) {
//   var target = e.target
//   var player = document.getElementById("player")
//   player.src = "./images/player" + playerIndex + ".png"
  
//   if (target) 
//   playerIndex++

//   if (playerIndex == 4)
//   playerIndex = 1
// }


