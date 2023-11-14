// var win = document.querySelector(".win");
// var lose = document.querySelector(".lose");
// var timerElement = document.querySelector(".timer-count");
// var startButton = document.querySelector(".start-button");

// var winCounter = 0;
// var loseCounter = 0;
// var isWin = false;
// var timer;
// var timerCount;


// //Quiz Questions and answers.
// var questions = [
//     {
//         question: "What describes an object that represents a true value?",
//         answers: [
//             {text: "Array", correct: false},
//             {text: "Boolean", correct: true},
//             {text: "Variable", correct: false},
//             {text: "Loops", correct: false},
//         ]
//     },
//     {
//         question: "What is a useful debugging tool that will print text to the console?",
//         answers: [
//             {text: "console.log", correct: true},
//             {text: "keyboard", correct: false},
//             {text: "a function", correct: false},
//             {text: "search engine", correct: false},
//         ]
//     },
//     {
//         question: "When opening a webpage, the browser creates a tree of objects that represents an open page. This is called ...?",
//         answers: [
//             {text: " a Website", correct: false},
//             {text: "JavaScript", correct: false},
//             {text: "HTML", correct: false},
//             {text: "The DOM", correct: true},
//         ]
//     },
//     {
//         question: "What tool can you use to inspect a code?",
//         answers: [
//             {text: "DevTools", correct: false},
//             {text: "Inspect Tool", correct: true},
//             {text: "Google answer", correct: false},
//             {text: "Ask a collegue", correct: false},
//         ]
//     },
//     {
//         question: "You would add this to attach an event handler to a specified element (hint: Makes a button work)?",
//         answers: [
//             {text: "Attribute", correct: false},
//             {text: "Inspect", correct: false},
//             {text: "Event Listener", correct: true},
//             {text: "Function", correct: false},
//         ]
//     },
// ]
// //Naming he IDs and calling them.
// var questionElement = document.getElementById("question");
// var answerButtons = document.getElementById("answer-buttons");
// var nextButton = document.getElementById("next-btn");

// let currentQuestionIndex = 0;
// let score = 0;
// //Next button appears after an answer selection.
// function startQuiz(){
//     currentQuestionIndex = 0;
//     score = 0;
//     nextButton.innerHTML = "Next";
//     showQuestion();
// }

// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

//     currentQuestion.answers.forEach(answer => {
//         var button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         if(answer.correct){
//             button.dataset.correct = answer.correct;
//         }
//         button.addEventListener("click", selectAnswer);
//     });
// }
//     function resetState(){
//         nextButton.style.display = "none";
//         while(answerButtons.firstChild){
//             answerButtons.removeChild(answerButtons.firstChild)
//         }
// }
// function selectAnswer(e){
//     var selectedBtn = e.target;
//     var isCorrect = selectedBtn.dataset.correct === "true";
//     if(isCorrect){
//         selectedBtn.classList.add("correct");
//         score++;
//     }else{
//         selectedBtn.classList.add("incorrect");
//     }
//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === "true"){
//         button.classList.add("correct");
//         }
//         button.disabled = true;
//     });
//     nextButton.style.display = "block";
// }

// function showScore(){
//     resetState();
//     questionElement.innerHTML = 'Score:  !';
//     nextButton.innerHTML = "Play Again"
//     nextButton.style.display = "block"; 
// }
// // The init function is called when the page loads 
// function init() {
//     getWins();
//     getlosses();
//   }
//    // The startGame function is called when the start button is clicked
//    function startGame() {
//     isWin = false;
//     timerCount = 20;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
    
//     startTimer()
//   }
  
//   // The winGame function is called when the win condition is met
//   function winGame() {
    
//     winCounter++
//     startButton.disabled = false;
//     setWins()
//   }
  
//   // The loseGame function is called when timer reaches 0
//   function loseGame() {
    
//     loseCounter++
//     startButton.disabled = false;
//     setLosses()
//   }
  
//   // The setTimer function starts and stops the timer and triggers winGame() and loseGame()
//   function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       timerCount--;
//       timerElement.textContent = timerCount;
//       if (timerCount >= 0) {
//         // Tests if win condition is met
//         if (isWin && timerCount > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (timerCount === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000);
//   }
//   // Updates win count on screen and sets win count to storage
// function setWins() {
//     win.textContent = winCounter;
//     localStorage.setItem("winCount", winCounter);
//   }
  
//   // Updates lose count on screen and sets lose count to storage
//   function setLosses() {
//     lose.textContent = loseCounter;
//     localStorage.setItem("loseCount", loseCounter);
//   }
  
//   // These functions are used by init
//   function getWins() {
//     // Get stored value from client storage, if it exists
//     var storedWins = localStorage.getItem("winCount");
//     // If stored value doesn't exist, set counter to 0
//     if (storedWins === null) {
//       winCounter = 0;
//     } else {
//       // If a value is retrieved from client storage set the winCounter to that value
//       winCounter = storedWins;
//     }
//     //Render win count to page
//     win.textContent = winCounter;
//   }
  
//   function getlosses() {
//     var storedLosses = localStorage.getItem("loseCount");
//     if (storedLosses === null) {
//       loseCounter = 0;
//     } else {
//       loseCounter = storedLosses;
//     }
//     lose.textContent = loseCounter;
//   }



// function handleNextButton(){
//     currentQuestionIndex++;
//     if(currentQuestionIndex < questions.length){
//         showQuestion();
//     }else{
//         showScore();
//     }
// }

// nextButton.addEventListener("click", ()=>{
//     if(currentQuestionIndex < questions.length){
//         handleNextButton();
//     }else{
//         startQuiz();
//     }

// });

// startQuiz();
//  // Attach event listener to start button to call startGame function on click
//  startButton.addEventListener("click", startGame);

//  // Calls init() so that it fires when page opened
//  init();
 
//  // Bonus: Add reset button
//  var resetButton = document.querySelector(".reset-button");
 
//  function resetGame() {
//    // Resets win and loss counts
//    winCounter = 0;
//    loseCounter = 0;
//    // Renders win and loss counts and sets them into client storage
//    setWins()
//    setLosses()
//  }
//  // Attaches event listener to button
//  resetButton.addEventListener("click", resetGame);

var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Quiz Questions and answers.
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
              {text: "keyboard", correct: false},
              {text: "a function", correct: false},
              {text: "search engine", correct: false},
          ]
      },
      {
          question: "When opening a webpage, the browser creates a tree of objects that represents an open page. This is called ...?",
          answers: [
              {text: " a Website", correct: false},
              {text: "JavaScript", correct: false},
              {text: "HTML", correct: false},
              {text: "The DOM", correct: true},
          ]
      },
      {
          question: "What tool can you use to inspect a code?",
          answers: [
              {text: "DevTools", correct: false},
              {text: "Inspect Tool", correct: true},
              {text: "Google answer", correct: false},
              {text: "Ask a collegue", correct: false},
          ]
      },
      {
          question: "You would add this to attach an event handler to a specified element (hint: Makes a button work)?",
          answers: [
              {text: "Attribute", correct: false},
              {text: "Inspect", correct: false},
              {text: "Event Listener", correct: true},
              {text: "Function", correct: false},
          ]
      },
  ]

// Naming the IDs and calling them.
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");
var nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start Quiz function
function startQuiz() {
    // Hide start page
    document.querySelector('.start-page').style.display = 'none';
    // Show quiz section
    document.querySelector('.quiz').style.display = 'block';

    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Show Question function
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        var button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Reset State function
function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Select Answer function
function selectAnswer(e) {
    var selectedBtn = e.target;
    var isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
        timerCount -= 2; // Subtract 2 seconds for incorrect answers
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

// Show Score function
// function showScore() {
//     resetState();
//     var initials = prompt("Enter your initials:"); // Prompt user for initials
//     if (initials) {
//         var highScore = { initials: initials, score: score };
//         saveHighScore(highScore);
//     }
//     questionElement.innerHTML = 'Score: ' + score;
//     nextButton.innerHTML = "Play Again";
//     nextButton.style.display = "block";
// }
// Show Score function
function showScore() {
  resetState();
  var initials = prompt("Enter your initials:"); // Prompt user for initials
  if (initials) {
      var highScore = { initials: initials, score: score };
      saveHighScore(highScore);
  }
  questionElement.innerHTML = 'Score: ' + score;

  // Display Restart Quiz button
  nextButton.style.display = "none"; // Hide the "Next" button
  var restartButton = document.getElementById("restart-btn");
  restartButton.style.display = "block"; // Show the "Restart Quiz" button
}


// Init function
function init() {
    getWins();
    getlosses();
    displayHighScores();
}

// Start Game function
function startGame() {
    isWin = false;
    timerCount = 20;
    // Prevents start button from being clicked when round is in progress
    startButton.disabled = true;

    startTimer();
}

// Win Game function
function winGame() {
    winCounter++;
    startButton.disabled = false;
    setWins();
}

// Lose Game function
function loseGame() {
    loseCounter++;
    startButton.disabled = false;
    setLosses();
}

// Set Timer function
function startTimer() {
    // Sets timer
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount <= 0) {
            // Clears interval and stops timer
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}

// Set Wins function
function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

// Set Losses function
function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

// Get Wins function
function getWins() {
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }
    win.textContent = winCounter;
}

// Get Losses function
function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

// Next Button Click event
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
  } else {
      showScore();
  }
});

// Attach event listener to start button to call startGame function on click
startButton.addEventListener("click", startGame);

// Calls init() so that it fires when the page opened
init();

// Bonus: Add reset button
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    // Resets win and loss counts
    winCounter = 0;
    loseCounter = 0;
    // Renders win and loss counts and sets them into client storage
    setWins();
    setLosses();
}

// Attaches event listener to button
resetButton.addEventListener("click", resetGame);

// High Scores functions
function saveHighScore(highScore) {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(highScore);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayHighScores();
}

function displayHighScores() {
    var highScoresList = document.getElementById("high-scores-list");
    highScoresList.innerHTML = "";

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

    highScores.forEach(function (score) {
        var li = document.createElement("li");
        li.textContent = score.initials + ": " + score.score;
        highScoresList.appendChild(li);
    });
}

function resetHighScores() {
    localStorage.removeItem("highScores");
    displayHighScores();
}
