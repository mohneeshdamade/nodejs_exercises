const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("How do you like node JS ? >", answer => {
    console.log(`Your answers : ${answer}`);
});
