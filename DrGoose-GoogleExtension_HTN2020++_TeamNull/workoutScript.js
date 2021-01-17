window.onload = function(name){
    chooseWorkoutPose();
}

var workoutPoses = ["workoutPosesImages/1.png", "workoutPosesImages/2.png", "workoutPosesImages/3.png", "workoutPosesImages/4.png", "workoutPosesImages/5.png", "workoutPosesImages/6.png"]
var refreshid = null;
var timeGiven = 45;

function chooseWorkoutPose(){
    document.getElementById("workoutTimer").innerHTML = timeGiven;
    clearInterval(refreshid);
    workoutCounter(timeGiven);
    var randomNum = Math.floor(Math.random() * (workoutPoses.length));
    if (document.getElementById("workoutPose") != null) {
        document.getElementById("workoutPose").src = workoutPoses[randomNum];
    }
}

document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById("resetWorkoutPose") != null) {
      document.getElementById("resetWorkoutPose").addEventListener("click", chooseWorkoutPose);
    }
  });

  function workoutCounter(counter){
      refreshid =
      setInterval( function(){
          counter--;
          if (counter >= 0){
              document.getElementById("workoutTimer").innerHTML = counter;
          }
          if (counter == 0){
            document.getElementById("workoutTimer").innerHTML = "Complete!";
          }
      }, 1000);

  }