// grab high scores from the local storage
function getHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    return highScores;
}