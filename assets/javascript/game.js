
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
function check(letterGuessed){
    for (var j=0; j<blanks;j++){
        if (word[j]===letterGuessed){
            blanksAndCorret[j] = letterGuessed;                
        }
        else {
            wrongBank.push(letterGuessed);
            guessesLeft--;
        }
    }
    
    document.getElementById("guessesLeft").innerHTML = ("Guesses Remaining: " + guessesLeft);
    document.getElementById("wrongBank").innerHTML = ("Wrong Guesses: "+ wrongBank);
    document.getElementById("currentWord").innerHTML = ("Current Word: "+ blanksAndCorrect);
}
function (){

}
game()
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    check(letterGuessed);

    document.getElementById("winCounter").innerHTML = ("Games Won: " + winCounter);
}
console.log(word);

