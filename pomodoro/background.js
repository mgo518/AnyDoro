let timerID;
let timerTime;
let isPausedStorage;
let durationStorage;
let colorStorage = "aliceblue";
let wallpaperStorage = "none";


chrome.runtime.onInstalled.addListener(() => {
  console.log("This Ran")

  chrome.storage.local.set({ 'storagecolor': colorStorage }, function(){});
  
  chrome.storage.local.set({'storagewallpaper': wallpaperStorage }, function(){});
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd === 'START_TIMER') {
    isPausedStorage = request.isPaused;
    durationStorage = request.duration;
    timerTime = new Date(request.when);
  } else if (request.cmd === 'GET_TIME') {
    sendResponse({ endTime: timerTime, isPaused: isPausedStorage, duration: durationStorage });
  }
});

