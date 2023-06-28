const questions = [
    {
        question: "What is the largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue Wale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Dog", correct: false},
        ]
    },
    {
        question: "What is the best animal in the world?",
        answers: [
            {text: "Dog", correct: true},
            {text: "Cat", correct: false},
            {text: "Turtle", correct: false},
            {text: "Hamster", correct: false},
        ]
    },
    {
        question: "What is the most populated city in the U.S.?",
        answers: [
            {text: "Los Angeles", correct: false},
            {text: "Chicago", correct: false},
            {text: "Phoenix", correct: false},
            {text: "New York City", correct: true},
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
        question: "What is the only professional baseball team in Arizona?",
        answers: [
            {text: "Angels", correct: false},
            {text: "White Sox", correct: false},
            {text: "Diamondbacks", correct: true},
            {text: "Athletics", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

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
        const button = document.createElement("button");
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
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
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