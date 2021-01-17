var goal = [];

chrome.storage.sync.get("goal1", value => {
    goal[0] = value.goal1;
    document.getElementById("target1").innerHTML = goal[0];
});

chrome.storage.sync.get("goal2", value => {
    goal[1] = value.goal2;
    document.getElementById("target2").innerHTML = goal[1];
});

chrome.storage.sync.get("goal3", value => {
    goal[2] = value.goal3;
    document.getElementById("target3").innerHTML = goal[2];
});

window.onload = function () {
    
    document.getElementById("target1").innerHTML = goal[0];
    document.getElementById("target2").innerHTML = goal[1];
    document.getElementById("target3").innerHTML = goal[2];

    var x = document.getElementById("night");
    x.addEventListener("click", function () {
        if (document.getElementById("night").checked == true) {
            nightScheme("colour", "format1", "format2", "format3");
        }
        else {
            dayScheme("colour", "format1", "format2", "format3");
        }
    });

    var z = document.getElementById("goal");
    z.addEventListener("click", function() {
        if(goal[0] == 'undefined' || goal[0] == null) {
            goal[0] = document.getElementById("value").value;
            chrome.storage.sync.set({"goal1": goal[0]});
            document.getElementById("target1").innerHTML = goal[0];
        } else if (goal[1] == 'undefined' || goal[1] == null) {
            goal[1] = document.getElementById("value").value;
            chrome.storage.sync.set({"goal2": goal[1]});
            document.getElementById("target2").innerHTML = goal[1];
        } else if (goal[2] == 'undefined' || goal[2] == null) {
            goal[2] = document.getElementById("value").value;
            chrome.storage.sync.set({"goal3": goal[2]});
            document.getElementById("target3").innerHTML = goal[2];
        } else {
            alert("You should only focus on 3 goals!");
        }
    });
}


function nightScheme(id, secondid, thirdid, fourthid) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    document.getElementById(id).style.color = "white";
    document.getElementById(secondid).style.backgroundColor = "white";
    document.getElementById(thirdid).style.backgroundColor = "white";
    document.getElementById(fourthid).style.backgroundColor = "white";
}

function dayScheme(id, secondid, thirdid, fourthid) {
    document.body.style.background = "white";
    document.body.style.color = "grey";
    document.getElementById(id).style.color = "grey";
    document.getElementById(secondid).style.backgroundColor = "lightblue";
    document.getElementById(thirdid).style.backgroundColor = "lightblue";
    document.getElementById(fourthid).style.backgroundColor = "lightblue";
}
