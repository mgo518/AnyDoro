
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

function setCustomTime() {
  setTime(document.querySelector("#wtime").nodeValue);
}
  

function setWorkTime(time) {
    chrome.storage.local.set({ 'storagesession': time }, function(){});
    window.location.href = "popup.html";
}

function setBreakTime(time) {
  chrome.storage.local.set({ 'storage': time }, function(){});
  window.location.href = "popup.html";
}

let set30min = document.getElementById("interval-30m");
let set45min = document.getElementById("interval-45m");
let set1hr = document.getElementById("interval-1h");
let set2hr = document.getElementById("interval-2h");
let st = document.getElementById("submit-times");

set30min.addEventListener("click", function() {setTime(1800000);})
set45min.addEventListener("click", function() {setTime(2700000);})
set1hr.addEventListener("click", function() {setTime(3600000);})
set2hr.addEventListener("click", function() {setTime(3600000 * 2);})

st.addEventListener("click", function() {setTime(60000 * document.querySelector("#wtime").value);})