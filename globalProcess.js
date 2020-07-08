// console.log(process.pid);
// console.log(process.versions.node);

// const [, , firstName, lastName] = process.argv;
// console.log(`Welcome Dear ${firstName} ${lastName}`);


//Pass flags in the argument in any order

const grab = flag => {
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);

