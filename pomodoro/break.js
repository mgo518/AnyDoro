// The Timer Currently doesn't work perfect. Issues to be fixed below:
// 1. if you accidentally press start twice, if get's hell fked
// 2. when the extension is closed, all the time it tracked is lost. Will prob need to use chrome.storage api

// Set the background to the correct image
chrome.storage.local.get('storagecolor', function(data){
  console.log(data.storagecolor);
  document.body.style.backgroundColor = data.storagecolor;
});


chrome.storage.local.get('storagewallpaper', function(data){
  console.log(data.storagewallpaper);
  document.body.style.backgroundImage = data.storagewallpaper;
  if (data.storagewallpaper) {
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
}
  });

// Convert The Time to the correct format from seconds

function formatTime(seconds) {

     
    let diffInHrs = seconds / 3600000;
    let hour = Math.floor(diffInHrs);
  
    let diffInMin = (diffInHrs - hour) * 60;
    let min = Math.floor(diffInMin);
  
    let diffInSec = (diffInMin - min) * 60;
    let sec = Math.floor(diffInSec);
  
  
    let formatHour = hour.toString().padStart(2, "0");
    let formatMin = min.toString().padStart(2, "0");
    let formatSec = sec.toString().padStart(2, "0");
  
    return `${formatHour}:${formatMin}:${formatSec}`;
  }

  // Currently Setting 1 min at current time (in milliseconds)
  let session = 10000;
  let start;
  var duration = 0;
  let interval;
  var myAudio = new Audio("sounds/asus-yamete-kudasai.mp3");

  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("time-display").innerHTML = txt;
  }

  function printshow(txt) {
    document.getElementById("session-display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function starter() {
    start = Date.now() - duration;
    interval = setInterval(function printTime() {
      duration = Math.max(duration, (Date.now() - start));
      print(formatTime(session - duration));
      if (session - duration < 1000) {
        clearInterval(interval);
        print("0:00:00");
        alarm();
        setTimeout(() => {window.location.href = "popup.html";}, 5000);
      }
    }, 950);
    removeStartButton();
    appearPauseButton();
  }
  
  function pauser() {
    clearInterval(interval);
    myAudio.pause();
    myAudio.currentTime = 0
    appearStartButton();
    removePauseButton();
  }
  
  function reseter() {
    clearInterval(interval);
    print(formatTime(session));
    duration = 0;
    myAudio.pause();
    myAudio.currentTime = 0
    appearStartButton();
    removePauseButton();
  }

  function removeStartButton() {
    playButton.style.display = "none"
  }

  function removePauseButton() {
    pauseButton.style.display = "none"
  }

  function appearStartButton() {
    playButton.style.display = "inline"
  }

  function appearPauseButton() {
    pauseButton.style.display = "inline"
  }

  function alarm() {
    myAudio.play();
  }

  function setTime(time) {
      session = time;
      print(formatTime(session));
  }

// Event Listeners - Checks to see if html elements has been activated --> run respective function
let playButton = document.getElementById("start-button");
let pauseButton = document.getElementById("stop-button");


playButton.addEventListener("click", starter)
pauseButton.addEventListener("click", pauser)
