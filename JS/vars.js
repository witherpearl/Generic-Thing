var data = {
    somethings: 0,
    somethingsPerPress: 1,
    somethingsPerPressCost: 10,
}

var mainGameLoop = window.setInterval(function() {
    getSomething()
  }, 1000)

var saveGameLoop = window.setInterval(function() {
    localStorage.setItem("genericSave", JSON.stringify(data))
  }, 15000)

var savegame = JSON.parse(localStorage.getItem("genericSave"))
if (savegame !== null) {
    data = savegame
  }