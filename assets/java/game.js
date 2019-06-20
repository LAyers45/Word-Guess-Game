//All use variables


//variable has words in word bank
var wordBank = ["tiger", "monkey", "panther", "lizard", "bear", "lion", "snake", "rhino"]
//variable has selected word
var wordSelect = "";
// Sees what letters are in words
var lettersInWord = [];
//for storing number of letters in words
var letterCount = 0
//array for correct guesses
var correct = [];
// array for incorrect guesses
var incorrect = [];
//Things to keep count of
var winNum = 0;
var guessesRemain = 10;
var correctCounter = 0;
var numGuessed = 0;

runGame();

//Starting Game


// Functions below

//Function to reset game 
function reset() {
    //use math random function to get word from bank
    wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Split words into array of letters
    lettersInWord = wordSelect.split("");
    //Count letters in words
    letterCount = lettersInWord.length;

    //Set variables back to base value
    guessesRemain = 10;
    numGuessed = 0;
    correctCounter = 0;
    correct = [];
    incorrect = [];
    runGame();
};
//Function to run game
function runGame() {
    //use math random function to get word from bank
    wordSelect = wordBank[Math.floor(Math.random() * wordBank.length)];
    //Split words into array of letters
    lettersInWord = wordSelect.split("");
    //Count letters in words
    letterCount = lettersInWord.length;

    //reset variables back to base value incase of multiple plays
    guessesRemain = 10;
    numGuessed = 0;
    correctCounter = 0;
    correct = [];
    incorrect = [];

    // fills elements with blanks
    for (var i = 0; i < letterCount; i++) {
        correct.push("-");
        document.getElementById("fillBlank").innerHTML = correct;
    }

    //join correct back into a string from array
    document.getElementById("fillBlank").innerHTML = correct.join("");
    // push changes to html page
    document.getElementById("wins").html = winNum;

    document.getElementById("guessLeft").html = guessesRemain;
    document.getElementById("lettersGuessed").html = incorrect;

    //logging
    //console.log(wordSelect);
    //console.log(lettersInWord);
    //console.log(letterCount);

};
function comparison(userInput) {
    //if user selects a correct letter
    if (wordSelect.indexOf(userInput) > -1) {
        //counter counts up to length of word
        for (var i = 0; i < letterCount; i++) {
            //at each letter check if they match
            if (lettersInWord[i] === userInput) {
                correctCounter++;
                correct[i] = userInput;
                document.getElementById("fillBlank").innerHTML = correct.join(" ");
            }

        }
        console.log(correct);
    }
    //if the user selects incorrectly
    else {
        incorrect.push(userInput);
        guessesRemain--;

        //update the html
        document.getElementById("guessLeft").innerHTML = guessesRemain;
        document.getElementById("lettersGuessed").innerHTML = incorrect;
        console.log(incorrect);

    }


}
//function to determine win loss conditions
function result() {
    //win con
    if (correctCounter === letterCount) {
        winNum++;
        document.getElementById("wins").innerHTML = winNum;
        reset();
        document.getElementById("guessLeft").innerHTML = guessesRemain;
    }
    //loss con
    else if (guessesRemain === 0) {
        reset();
        console.log(guessesRemain);
        document.getElementById("guessLeft").innerHTML = guessesRemain;
    }
}
//Starting Game
document.onkeyup = function (event) {
    var userGuess = event.key; {
        comparison(userGuess);
        result();
    }


}