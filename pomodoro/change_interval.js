
  function setTime(time) {
      session = time;
      print(formatTime(session));
  }

let set30min = document.getElementById("interval-30m");
let set45min = document.getElementById("interval-45m");
let set1hr = document.getElementById("interval-1h");
let set2hr = document.getElementById("interval-2h");

set30min.addEventListener("click", function() {setTime(900000);})
set45min.addEventListener("click", function() {setTime(2700000);})
set1hr.addEventListener("click", function() {setTime(3600000);})
set2hr.addEventListener("click", function() {setTime(3600000 * 2);})