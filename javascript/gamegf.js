//create an array for the alphabet
var alphabet = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//create variables for tracking wins, losses, and guesses
var countWins = 0;
var countLosses = 0;
var countGuesses = 10;

//set initial values of the html paragraph tags
document.getElementById('wins').innerHTML = "Wins: " + countWins;
document.getElementById('losses').innerHTML = "Losses: " + countLosses;
document.getElementById('guesses').innerHTML = "Guesses remaining: " + countGuesses;
document.getElementById('uGuesses').innerHTML = "Your guesses so far: ";

    //create a variable for the computerPick and set it to a random letter
    var computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log("The computer has selected the letter " + computerPick +".");

    //create an empty array to string user guesses to - I had to move this outside of the onkeyup event to get the string to work
    var strGuesses = [];

//create an onKeyUp event
document.onkeyup = function(event) {
    
    //create a variable to hold the key value
    var strKey = event.key;

    //push the value of strKey to the strGuesses array
    strGuesses.push(strKey);

    //set userGuess variable to the key pressed by the player
    var userGuess = event.key;

    //if the player guess is the same as the computer pick add one to the win column + reset guesses + clear the guess string + have the computer pick a new number, otherwise take subtract a guess
    if(userGuess === computerPick){
        countWins++;
        countGuesses = 10;
        strGuesses = [];
        computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("The computer has selected the letter " + computerPick +".");
        alert("You win!");
    }else{
        countGuesses--;
    }

    //if the user has used all of their guesses, add one to the loss column + reset the guesses + clear guess string + have the computer pick a new number
    if (countGuesses === 0){
        countLosses++;
        countGuesses = 10;
        strGuesses = [];
        computerPick = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("The computer has selected the letter " + computerPick +".");
        alert("You lose, loser!");
    };


    document.getElementById('wins').innerHTML = "Wins: " + countWins;
    document.getElementById('losses').innerHTML = "Losses: " + countLosses;
    document.getElementById('guesses').innerHTML = "Guesses remaining: " + countGuesses;
    document.getElementById('uGuesses').innerHTML = "Your guesses so far: " + strGuesses;
};

