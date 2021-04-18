let timerID;
let timerTime;
let isPausedStorage;
let durationStorage;

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.cmd === 'START_TIMER') {
    isPausedStorage = request.isPaused;
    durationStorage = request.duration;
    timerTime = new Date(request.when);
  } else if (request.cmd === 'GET_TIME') {
    sendResponse({ endTime: timerTime, isPaused: isPausedStorage, duration: durationStorage });
  }
});