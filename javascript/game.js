var countWins = 0;
var countLosses = 0;
var countGuesses = 9;
var onLoadArray = [countWins, countLosses, countGuesses];
var onLoadArrayIDs = ["wins", "losses", "guesses", "uGuesses"]
// do i need to set a variable for 'guesses so far?

window.onload = function() {
    //this needs to be a for loop that runs through each variable in each array.
    //document.getElementById(onLoadArrayIDs).innerHTML = onLoadArray.valueOf();
    document.getElementById("wins").innerHTML = countWins.valueOf();
    document.getElementById("losses").innerHTML = countLosses.valueOf();
    document.getElementById("guesses").innerHTML = countGuesses.valueOf();
}


//create an array for user guesses
var userGuesses = [];
    document.getElementById("uGuesses").innerHTML = userGuesses;



//function to make the computer pick a random letter
function randomLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.substr(Math.floor(Math.random() * 26),1);
};

//create a variable and set the value to the random letter
var computerPick = randomLetter();
    console.log("The computer picks the letter " + computerPick + ".");

//on key up event to for player input
document.onkeyup = function(event) {  
    
    //create a variable and set the value to the key pressed by the user after the on key up event.
    var userGuess = event.key;
    
    //if the user has used all of their guesses, add one to the loss column and reset the guesses available to 9, otherwise subtract a guess from player total
    if (countGuesses === 0) {
        countLosses = countLosses + 1;
        console.log("Losses: " + countLosses);
        countGuesses = 9;
        //need to reset the computer pick here as well
    } else {
        countGuesses = countGuesses - 1;
        console.log("Guesses Left: " + countGuesses);
    };  

    //if the player pick matches the computer pick, add one to the win column, reset the guesses available to 9, reset the computer pick, otherwise nothing
    if (computerPick === userGuess) {
        countWins = countWins + 1;
        console.log("Wins: " + countWins);
        countGuesses = 9;
        var computerPick = randomLetter();
        console.log(computerPick);
    };
    
};