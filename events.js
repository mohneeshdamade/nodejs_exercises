/**
 * Generate custom events, a message and a user has to be passed to an event.
 * 
 */
const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (message,user) => {
    console.log(`${user} : ${message}`);
})

process.stdin.on("data", data =>{
    const input = data.toString().trim();

    if(input === "exit") {
        emitter.emit("customEvent","Good Bye !","terminal");
    }

    emitter.emit("customEvent", input, "Mohneesh");
});




