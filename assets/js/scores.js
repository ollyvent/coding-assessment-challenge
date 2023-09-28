// grab high scores from the local storage using a function
function getHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    return highScores;
}

// save high scores to local storage using a function
function saveHighScores(initials, score) {
    var highScores = getHighScores();
    highScores.push({initials: initials, score: score });
    highScores.sort((a, b) => b.score - a.score); // sort highscores in descending order
    highScores = highScores.slice(0, 5); // keep only the top 5 scores
    localStorage.setItem("highScores", JSON.stringify(highScores));
};