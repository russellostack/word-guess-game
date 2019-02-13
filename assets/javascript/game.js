
var wordBank = ["hills","mountain","stone","rocks","badger", "range","ridge","boulder","pebbles","sand","earthquake","landslide"];
var word = "";
var lettersOfWord = [];
var blanks = 0;
var blanksAndCorrect = [];
var wrongBank = [];

var winCounter = 0;
var guessesLeft = 10;

function game(){
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    lettersOfWord = word.split("");
    blanks = lettersOfWord.length;

    for (var i=0; i<word.length;i++){
        blanksAndCorrect.push("_");
    }
    document.getElementById("currentWord").innerHTML = " "+ blanksAndCorrect.join(" ");
}
function checkLetter(letterGuessed){

    if (lettersOfWord.includes(letterGuessed)){
        for (var j=0; j<blanks;j++){
            if (word[j]===letterGuessed){
                blanksAndCorrect[j] = letterGuessed;                
            }
            
        }
    }
    else {
            wrongBank.push(letterGuessed);
            guessesLeft--;
    }
    document.getElementById("guessesLeft").innerHTML = ("Guesses Remaining: " + guessesLeft);
    document.getElementById("wrongBank").innerHTML = ("Wrong Guesses: "+ wrongBank);
    document.getElementById("currentWord").innerHTML = ("Current Word: "+ blanksAndCorrect);
}

// I can't seem to understand how to use the Break statement, the program works fine if you comment out lines 42-51, but it won't end if youve used up all your guesses.
function checkGameState(){
    if (guessesLeft <0 || guessesLeft == 0){
        alert("You have run out of Guesses! You Lose!");
        break;
    }
    if (blanks = 0){
        alert("you have correctly guessed the Word! Congratulations!");
        winCounter ++;
        break;
    }
}
game()
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(letterGuessed);
    checkGameState();
    document.getElementById("winCounter").innerHTML = ("Games Won: " + winCounter);
}
console.log(word);

