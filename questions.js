const questions = [

    "What is you name ?",
    "Which programming language do you like ?",
    "Which is you favorite IDE ?"
];

const ask = (i=0) => {
    process.stdout.write(`${questions[i]}`);
    process.stdout.write('>');
}

ask();

const answers = [];
//get answers from user
process.stdin.on("data", data =>{

    answers.push(data.toString().trim());

    if(answers.length < questions.length){
        ask(answers.length);
    }
    else{
        process.exit();
    }
});

process.on("exit", () =>{

    const [name,lang,ide] = answers;

    console.log(`
    
    Go ${name} write ${lang} code in your favorite ${ide} IDE !
    
    `);
});