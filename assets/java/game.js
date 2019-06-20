//All use variables

var timesPressed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable has words in word bank
var wordBank = ["chimpanzee", "orangutan", "cheetah", "crocodile", "elephant", "lion", "gorilla", "rhinoceros"]
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
    timesPressed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
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
    timesPressed = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // fills elements with blanks
    for (var i = 0; i < letterCount; i++) {
        correct.push("-");
        document.getElementsByClassName("fillBlank").innerHTML = correct;
    }

    //join correct back into a string from array
    document.getElementsByClassName("fillBlank").innerHTML = correct.join(" ");
    // push changes to html page
    document.getElementsByClassName("wins").innerHTML = winNum;
    document.getElementsByClassName("guessLeft").innerHTML = guessesRemain;
    document.getElementsByClassName("lettersGuessed").innerHTML = incorrect;

    //logging
    console.log(wordSelect);
    console.log(lettersInWord);
    console.log(letterCount);

};

runGame();