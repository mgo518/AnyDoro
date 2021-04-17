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

  let start;
  let duration = 0;
  let interval;
  
  // Create function to modify innerHTML
  
  function print(txt) {
    document.getElementById("time-display").innerHTML = txt;
  }
  
  // Create "start", "pause" and "reset" functions
  
  function starter() {
    start = Date.now() - duration;
    interval = setInterval(function printTime() {
      duration = Date.now() - start;
      print(formatTime(duration));
    }, 10);
    removeButton();
  }
  
  function pauser() {
    clearInterval(interval);
    appearButton();
  }
  
  function reseter() {
    clearInterval(interval);
    print("00:00:00");
    duration = 0;
    appearButton();
  }

  function removeButton() {
      playButton.style.display = "none"
  }

  function appearButton() {
      playButton.style.display = "inline"
  }



// Event Listeners - Checks to see if html elements has been activated --> run respective function

let playButton = document.getElementById("start-button");
let pauseButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", starter);
pauseButton.addEventListener("click", pauser);
resetButton.addEventListener("click", reseter);