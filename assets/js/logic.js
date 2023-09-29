// set up timer
var timerInterval;
var timeLeft = 60; // total time in seconds
var currentQuestionIndex = 0;
var score = 0;

var startButton = document.getElementById("start");
var questionTitile = document.getElementById("question-title");
var choiceContainer = document.getElementById("choice");
var timerElement = document.getElementById("title");

function startQuiz() {
  startButton.style.display = "none";
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");

  // begin timer
  timerInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
    }
  }, 1000);

  displayQuestion();
};

 // function to display question
 function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
      var currentQuestion = questions[currentQuestionIndex];
      questionTitle.textContent = currentQuestion.question;
      choicesContainer.innerHTML = "";
  
      for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = currentQuestion.choices[i];
        choiceButton.setAttribute("data-index", i);
        choiceButton.addEventListener("click", checkAnswer);
        choicesContainer.appendChild(choiceButton);
      }
    } else {
      endQuiz();
    }
  };
  

  // function to check answers
  function checkAnswer(event) {
    var selectedChoiceIndex = parseInt(event.target.getAttribute("data-index"));
    var currentQuestion = questions[currentQuestionIndex];
  
    if (selectedChoiceIndex === currentQuestion.correctAnswer) {
      score += 10;
    } else {
      timeLeft -= 10; // Penalty for incorrect answer
    }
  
    currentQuestionIndex++;
    displayQuestion();
  };

  // function to end quiz
  function checkAnswer(event) {
    var selectedChoiceIndex = parseInt(event.target.getAttribute("data-index"));
    var currentQuestion = questions[currentQuestionIndex];
  
    if (selectedChoiceIndex === currentQuestion.correctAnswer) {
      score += 10;
    } else {
      timeLeft -= 10; // Penalty for incorrect answer
    }
  
    currentQuestionIndex++;
    displayQuestion();
  };

  // start quiz
  startButton.addEventListener("click", startQuiz);
