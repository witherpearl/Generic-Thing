var data = {
    somethings: 0,
    somethingsPerPress: 1,
    somethingsPerPressCost: 10,
}

function getSomething() {
    data.somethings += data.somethingsPerPress
    document.getElementById("somethings").innerHTML = data.somethings + " Somethings"
}

function buySomethingsPerPress(){
    if (data.somethings >= data.somethingsPerPressCost) {
        data.somethings -= data.somethingsPerPressCost
        data.somethingsPerPress += 1
        data.somethingsPerPressCost *= 2
        document.getElementById("somethings").innerHTML = data.somethings + " Somethings"
        document.getElementById("perClickUpgrade1").innerHTML = "Grow More Hands (You have " + data.somethingsPerPress + " hands) Cost: " + data.somethingsPerPressCost + " Somethings"
    }
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