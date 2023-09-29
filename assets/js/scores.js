// grab high scores from the local storage using a function
function getHighScores() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  return highScores;
}

// save high scores to local storage using a function
function saveHighScore(initials, score) {
  var highScores = getHighScores();
  highScores.push({ initials: initials, score: score });
  highScores.sort((a, b) => b.score - a.score); // sort highscores in descending order
  highScores = highScores.slice(0, 5); // keep only the top 5 scores
  localStorage.setItem("highScores", JSON.stringify(highScores));
}

// function to clear high scores
function clearHighScores() {
  localStorage.removeItem("highScores");
}

// display high scores with a function
function displayHighScores() {
  var highScores = getHighScores();
  var highScoresList = document.getElementById("highscores");
  highScoresList.innerHTML = "";

  for (var i = 0; i < highScores.length; i++) {
    var listItem = document.createElement("li");
    listItem.textContent = `${highScores[i].initials}: ${highScores[i].score}`;
    highScoresList.appendChild(listItem);
  }
}

// event listener clears the high scores on click of the button
var clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function () {
  clearHighScores();
  displayHighScores();
});

// display high scores on page load
displayHighScores();
