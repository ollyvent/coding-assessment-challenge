// create an array of objects to ask questions

var questions = [
    {
        question: "what is javascript?",
        choices: ["a programming language,", "a type of data", "a computer operator"],
        correctAnswer: 0,
    },
    {
        question: "which of the following is not a javascript data type?",
        choices: ["string,", "boolean", "float", "number"],
        correctAnswer: 2,
    },
    {
        question: "what is the purpose of the 'if' statement in javascript?",
        choices: ["declaring a variable,", "executing code conditionally", "creating loops"],
        correctAnswer: 1,
    },
];

// randomize order of questions with a function
function shuffleChoices(choices) {
    var currentIndex = choices.length,
    randomIndex,
    temporaryValue;

    while (currentIndex !==0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        temporaryValue = choices[currentIndex];
        choices[currentIndex] = choices[randomIndex];
        choices[randomIndex] = temporaryValue;
    }
    return choices;
}

// initialize and shuffle questions using function
function initializeQuestions() {
    for (var i = 0; i <questions.length; i++) {
        questions[i].choices = shuffleChoices(questions[i].choices);
    }
}