let hour = 00;
let min = 00;
let sec = 00;

let interval;
const watch = document.querySelector('.watch');

const start = () => {
    isRunning();
    interval = setInterval(isRunning, 1000); // 1 second
}

const pause = () => {
    clearInterval(interval);
}

const stop = () => {
    clearInterval(interval);
    hour = 00;
    min = 00;
    sec = 00;
    watch.innerHTML = `00:00:00`;
}

const twoZeros = (digit) => {
    if (digit < 10) {
        return '0' + digit;
    } else {
        return digit;
    }
}

const isRunning = () => {
    sec++
    watch.innerHTML = `${twoZeros(hour)}:${twoZeros(min)}:${twoZeros(sec)}`;
    if (sec > 59) {
        min++
        sec = 00;
        if (min > 59) {
            hour++
            min = 0;
        }
    }
}
