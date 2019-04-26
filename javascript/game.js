var countWins = 0;
var countLosses = 0;
var countGuesses = 9;
var onLoadArray = [countWins, countLosses, countGuesses];
var onLoadArrayIDs = ["wins", "losses", "guesses"]
// do i need to set a variable for 'guesses so far?

window.onload = function() {
    //this needs to be a for loop that runs through each variable in each array.
    //document.getElementById(onLoadArrayIDs).innerHTML = onLoadArray.valueOf();
    document.getElementById("wins").innerHTML = countWins.valueOf();
    document.getElementById("losses").innerHTML = countLosses.valueOf();
    document.getElementById("guesses").innerHTML = countGuesses.valueOf();
}