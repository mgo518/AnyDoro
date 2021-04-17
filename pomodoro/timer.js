// The Timer Currently doesn't work perfect. Issues to be fixed below:
// 1. if you accidentally press start twice, if get's hell fked
// 2. when the extension is closed, all the time it tracked is lost. Will prob need to use chrome.storage api






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
  let session = 60000;
  let start;
  var duration = 0;
  let interval;
  
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
    }, 950);
    removeButton();
  }
  
  function pauser() {
    clearInterval(interval);
    appearButton();
  }
  
  function reseter() {
    clearInterval(interval);
    print("0:01:00");
    duration = 0;
    appearButton();
  }

  function removeButton() {
      playButton.style.display = "none"
  }

  function appearButton() {
      playButton.style.display = "inline"
  }

  function show() {
      printshow(duration)
  }


// Event Listeners - Checks to see if html elements has been activated --> run respective function

let playButton = document.getElementById("start-button");
let pauseButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let showButton = document.getElementById("show-button");

playButton.addEventListener("click", starter);
pauseButton.addEventListener("click", pauser);
resetButton.addEventListener("click", reseter);
showButton.addEventListener("click", show);