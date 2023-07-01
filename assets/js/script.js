var questions = [
    {
        question: "What describes an object that represents a true value?",
        answers: [
            {text: "Array", correct: false},
            {text: "Boolean", correct: true},
            {text: "Variable", correct: false},
            {text: "Loops", correct: false},
        ]
    },
    {
        question: "What is a useful debugging tool that will print text to the console?",
        answers: [
            {text: "console.log", correct: true},
            {text: "a computer keyboard", correct: false},
            {text: "a function", correct: false},
            {text: "an event listener", correct: false},
        ]
    },
    {
        question: "When opening a webpage, the browser creates a tree of objects that represents an open page. This is called ...?",
        answers: [
            {text: " a Website", correct: false},
            {text: "JavaScript", correct: false},
            {text: "HTML", correct: false},
            {text: "The Document Object Model (DOM)", correct: true},
        ]
    },
    {
        question: "What tool can you use to inspect a code?",
        answers: [
            {text: "DevTools", correct: false},
            {text: "Inspect Tool", correct: true},
            {text: "Google the answer", correct: false},
            {text: "Ask a collegue to check your work", correct: false},
        ]
    },
    {
        question: "You would add this to attach an event handler to a specified element (hint: Makes a button work)?",
        answers: [
            {text: ".setAttribute", correct: false},
            {text: ".addEventHandler", correct: false},
            {text: ".addEventListener", correct: true},
            {text: ".addFunctionListener", correct: false},
        ]
    },
]

var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
    function resetState(){
        nextButton.style.display = "none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild)
        }
}

function selectAnswer(e){
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
        button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = 'You scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"; 
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

startQuiz();