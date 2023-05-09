const containerTag = document.getElementsByClassName("container")[0];
const stopWatchTag = document.getElementsByClassName("stopwatch")[0];
const ms = document.getElementsByClassName("ms")[0];
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];

let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

const startTime = () => {
    milliseconds += 1;
    if (milliseconds === 1000) {
        milliseconds = 0;
        seconds += 1;
        if (seconds === 60) {
            seconds = 0;
            minutes += 1;
            if (minutes === 60) {
                minutes = 0;
                hours += 1;
            }
        }
    }
    //const millisecondsText = milliseconds<100 ? "00" + milliseconds.toString() : milliseconds;
    const secondsText = seconds<10 ? "0" + seconds.toString() : seconds;
    const minutesText = minutes<10 ? "0" + minutes.toString() : minutes;
    const hoursText = hours<10 ? "0" + hours.toString() : hours;
    ms.textContent = milliseconds;
    stopWatchTag.textContent = hoursText + ":" + minutesText + ":" + secondsText;
}

let intervalId;
startButton.addEventListener("click", () => {
    intervalId = setInterval(startTime, 1);
});

pauseButton.addEventListener("click", () => {
    clearInterval(intervalId);
});

continueButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = setInterval(startTime, 1);
});

restartButton.addEventListener("click", () => {
    clearInterval(intervalId);
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
    intervalId = setInterval(startTime, 1);
});
