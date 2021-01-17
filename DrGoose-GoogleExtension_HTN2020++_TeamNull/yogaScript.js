window.onload = function(name){
    chooseYogaPose();
}

var yogaPoses = ["yogaPosesImages/1.png", "yogaPosesImages/2.png", "yogaPosesImages/3.png", "yogaPosesImages/4.png", "yogaPosesImages/5.png", "yogaPosesImages/6.png"]
var refreshid = null;
var timeGiven = 45;

function chooseYogaPose(){
    document.getElementById("yogaTimer").innerHTML = timeGiven;
    clearInterval(refreshid);
    yogaCounter(timeGiven);
    var randomNum = Math.floor(Math.random() * (yogaPoses.length));
    if (document.getElementById("yogaPose") != null) {
        document.getElementById("yogaPose").src = yogaPoses[randomNum];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById("resetYogaPose") != null) {
      document.getElementById("resetYogaPose").addEventListener("click", chooseYogaPose);
    }
  });

  function yogaCounter(counter){
      refreshid =
      setInterval( function(){
          counter--;
          if (counter >= 0){
              document.getElementById("yogaTimer").innerHTML = counter;
          }
          if (counter == 0){
            document.getElementById("yogaTimer").innerHTML = "Complete!";
          }
      }, 1000);

  }