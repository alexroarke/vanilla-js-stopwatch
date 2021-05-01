// The initial three buttons
const startButton = document.getElementById("btn-start");
const stopButton = document.getElementById("btn-stop");
const resetButton = document.getElementById("btn-reset");

// The main display element
const stopwatch = document.getElementById("stopwatch");

// Sub elements of main display, shows milliseconds and seconds
const milliseconds = document.getElementById("ms");
const seconds = document.getElementById("sec");

// Set initial value in ms and sec element
ms = 00;
sec = 00;

// Initialize interval 
let start;

// Starts the counter
function startCounter() {
  // Make milliseconds more than 0, so that it increases on each check automatically.
  ms++;

  // Check if milliseconds < 9, add a string "0" + ms
  if (ms <= 9) {
    milliseconds.innerHTML = "0" + ms;
  }

  // If milliseconds > 9, remove string and add only ms
  if (ms > 9) {
    milliseconds.innerHTML = ms;
  }

  // If ms > 99, reset milliseconds and add one second 
  if (ms > 99) {
    console.log("seconds");
    sec++;
    seconds.innerHTML = "0" + sec;
    ms = 0;
    milliseconds.innerHTML = "0" + ms;
  }

  // If sec > 9, remove string and add only sec
  if (sec > 9) {
    seconds.innerHTML = sec;
  }
}

// Stops the counter
let stop = function () {
  clearInterval(start);
};

// Resets the counter
let reset = function () {
  clearInterval(start);
  ms = 00;
  sec = 00;

  milliseconds.innerHTML = "00";
  seconds.innerHTML = "00";
};

startButton.addEventListener("click", function () {
  clearInterval(start);
  start = setInterval(startCounter, 10);
});
stopButton.addEventListener("click", stop);
resetButton.addEventListener("click", reset);
