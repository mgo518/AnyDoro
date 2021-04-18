
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

function setWorkTime(time) {
    chrome.storage.local.set({ 'storagewtime': time }, function(){});
}

function setBreakTime(time) {
  chrome.storage.local.set({ 'storagebtime': time }, function(){});
}

let setwork30min = document.getElementById("work-30m");
let setwork45min = document.getElementById("work-45m");
let setwork1hr = document.getElementById("work-1h");
let setwork2hr = document.getElementById("work-2h");

let setbreak2m = document.getElementById("break-2m");
let setbreak5m = document.getElementById("break-5m");
let setbreak10m = document.getElementById("break-10m");
let setbreak15m = document.getElementById("break-15m");

let st = document.getElementById("submit-times");

setwork30min.addEventListener("click", function() {setWorkTime(1800000);})
setwork45min.addEventListener("click", function() {setWorkTime(2700000);})
setwork1hr.addEventListener("click", function() {setWorkTime(3600000);})
setwork2hr.addEventListener("click", function() {setWorkTime(3600000 * 2);})

setbreak2m.addEventListener("click", function() {setBreakTime(120000);})
setbreak5m.addEventListener("click", function() {setBreakTime(300000);})
setbreak10m.addEventListener("click", function() {setBreakTime(600000);})
setbreak15m.addEventListener("click", function() {setBreakTime(900000);})

st.addEventListener("click", 
function() {
  let wtime = 60000 * document.querySelector("#wtime").value;
  if (wtime) {
    setWorkTime(60000 * document.querySelector("#wtime").value);
  }

  let btime = 60000 * document.querySelector("#btime").value;
  if (btime) {
    setBreakTime(60000 * document.querySelector("#btime").value)
  };})