const interval = 1000;
let timer = 0;
const updateTimer = () => {
  timer += 1;
  const timerElement = document.getElementById('timer');
  timerElement.innerHTML = timer;
};
setInterval(updateTimer, interval);
