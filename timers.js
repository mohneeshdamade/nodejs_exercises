const waitTime = 5000;
let currentTime = 0;
const waitInterval = 500


const timerFinished = () => {

    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log('done');
};


const incrementTime = () => {
    currentTime += waitInterval;
    const p = Math.floor((currentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting ... ${p}`);
    //console.log(`waiting ${currentTime / 1000} seconds`);
};
console.log(`Setting a wait time for ${waitTime / 1000} seconds`);


const interval = setInterval(incrementTime, waitInterval);
setTimeout(timerFinished, waitTime);
