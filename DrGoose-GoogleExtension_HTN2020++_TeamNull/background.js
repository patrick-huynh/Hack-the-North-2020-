// Different Notification Information:
var waterRemind = {
    type: "basic",
    iconUrl: "./icons/64.png",
    title: "Drink Some Water!",
    message : "Click me once you're hydrated, the next reminder will be in 1 min!" 
}
var eyeRemind = {
    type: "basic",
    iconUrl: "./icons/64.png",
    title: "Rest your eyes!",
    message : "Click me once you're rested, the next reminder will be in 1 min!" 
}
var exerciseRemind = {
    type: "basic",
    iconUrl: "./icons/64.png",
    title: "Get up and move around!",
    message : "*VISIT THE EXERCISE PAGE IN MR GOOSE*\nClick me once you exercised, the next reminder will be in 1 min!" 
}

// Notification listener
chrome.notifications.onClicked.addListener(function (id) {
    if (id == "eye") {
        createEyeAlarm();
    } else if (id == "exerc") {
        createExerciseAlarm();
    } else if (id == "water") {
        createWaterAlarm();
    }
})

// Alarm Listener
chrome.alarms.onAlarm.addListener(function (alarmName){
    if (alarmName.name == "waterAlarm") {
        chrome.notifications.create("water", waterRemind, function (notificationID){})
    } else if (alarmName == "eyeAlarm") {
        chrome.notifications.create("eye", eyeRemind, function (notificationID){})
    } else if (alarmName == "exerciseAlarm") {
        chrome.notifications.create("exerc", exerciseRemind, function (notificationID){})
    }
    
});

// Alarm Creator
function createWaterAlarm(){
    console.log("water");
    chrome.alarms.create("waterAlarm", {delayInMinutes : 1.0});
}
function createEyeAlarm(){
    console.log("eye");
    chrome.alarms.create("eyeAlarm", {delayInMinutes : 20.0});
}
function createExerciseAlarm(){
    console.log("exerc");
    chrome.alarms.create("excerciseAlarm", {delayInMinutes : 60.0});
}

//Alarm Starter
chrome.alarms.create("eyeAlarm", {delayInMinutes : 20.0});
chrome.alarms.create("excerciseAlarm", {delayInMinutes : 60.0});
chrome.alarms.create("waterAlarm", {delayInMinutes : 1.0});


// Chrome API Storage:
chrome.storage.sync.set({"goal1": null});
chrome.storage.sync.set({"goal2": null});
chrome.storage.sync.set({"goal3": null});

chrome.storage.local.set({ "numClicks": 0 });
