const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const milliseconds = document.querySelector('.milliseconds');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let startTime;
let interval;

function start() {
  startTime = Date.now();
  interval = setInterval(updateDisplay, 10);
}

function stop() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  minutes.textContent = '00';
  seconds.textContent = '00';
  milliseconds.textContent = '00';
}

function updateDisplay() {
  const elapsedTime = Date.now() - startTime;
  const minutesValue = Math.floor(elapsedTime / 60000);
  const secondsValue = Math.floor((elapsedTime - (minutesValue * 60000)) / 1000);
  const millisecondsValue = Math.floor((elapsedTime - (minutesValue * 60000) - (secondsValue * 1000)) / 10);

  minutes.textContent = minutesValue < 10 ? '0' + minutesValue : minutesValue;
  seconds.textContent = secondsValue < 10 ? '0' + secondsValue : secondsValue;
  milliseconds.textContent = millisecondsValue < 10 ? '0' + millisecondsValue : millisecondsValue;
}

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click', reset);
