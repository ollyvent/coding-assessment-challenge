// set up timer
var timerInterval;
var timeLeft = 60; // total time in seconds
var currentQuestionIndex = 0;
var score = 0;

var startButton = document.getElementById("start");
var questionTitle = document.getElementById("question-title");
var choicesContainer = document.getElementById("choices");
var timerElement = document.getElementById("time");

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

  function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    document.getElementById("final-score").textContent = score;
  
    var submitButton = document.getElementById("submit");
    var initialsInput = document.getElementById("initials");
  
    submitButton.addEventListener("click", function () {
      var initials = initialsInput.value.trim();
      if (initials !== "") {
        saveHighScore(initials, score);
        window.location.href = "highscores.html";
      }
    });
  }

  // start quiz
  startButton.addEventListener("click", startQuiz);
