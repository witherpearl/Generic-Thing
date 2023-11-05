function hideAndShow(screen) {
    var classesToHide = ['main', 'placeholder1', 'placeholder2'];
    var classesToHideExclude = classesToHide.indexOf(screen);
  
    if (classesToHideExclude > -1) {
      classesToHide.splice(classesToHideExclude, 1);
    }
  
    var classesToShow = [screen];
  
    return {
      classesToHide: classesToHide,
      classesToShow: classesToShow
    };
}
  
function changeContent(screen) {
    console.log(screen)
    var { classesToHide, classesToShow } = hideAndShow(screen);
  
    var elementsToHide = [];
    var elementsToShow = [];
  
    for (var i = 0; i < classesToHide.length; i++) {
        var elements = document.getElementsByClassName(classesToHide[i]);
  
        for (var j = 0; j < elements.length; j++) {
        elementsToHide.push(elements[j]);
        }
    }
  
    elementsToShow = document.getElementsByClassName(screen);
  
    for (var i = 0; i < elementsToHide.length; i++) {
      elementsToHide[i].style.display = "none";
    }
  
    for (var i = 0; i < elementsToShow.length; i++) {
      elementsToShow[i].style.display = "block";
    }
}

function updateDisplay() {
    document.getElementById("somethings").innerHTML = data.somethings + " Somethings"
    document.getElementById("perClickUpgrade1").innerHTML = "Grow More Hands (You have " + data.somethingsPerPress + " hands) Cost: " + data.somethingsPerPressCost + " Somethings"
}

function getSomething() {
    data.somethings += data.somethingsPerPress
    updateDisplay()
}

function buySomethingsPerPress(){
    if (data.somethings >= data.somethingsPerPressCost) {
        data.somethings -= data.somethingsPerPressCost
        data.somethingsPerPress += 1
        data.somethingsPerPressCost *= 2
        updateDisplay()
    }
}