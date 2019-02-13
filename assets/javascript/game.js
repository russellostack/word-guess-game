
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
    document.getElementById("#currentWord").innerHTML = " "+ blanksAndCorrect.join(" ");

    while (guessesLeft > 0){
        check(letterGuessed);
    }
}
function check(letterGuessed){
    if (letterGuessed ===null){
                break;
    } 
    else if (letterGuessed.length !== 1){
        alert ("Please choose only 1 letter.")
    } 
    else {
        for (var j=0; j<blanks;j++){
            if (word[j]===letterGuessed){
                blanksAndCorret[j] = letterGuessed;                
            }
            else {
                wrongBank.push(letterGuessed);
                guessesLeft--;
            }
        }
    }
    document.querySelector("#guessesLeft").innerHTML = ("Guesses Remaining: " + guessesLeft);
    document.querySelector("#winCounter").innerHTML = ("Games Won: " + winCounter);
    document.querySelector("#wrongBank").innerHTML = ("Wrong Guesses: "+ wrongBank);
    document.querySelector("currentWord").innerHTML = ("Current Word: "+ blanksAndCorrect);
}
function game(){

}
game()
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    check(letterGuessed);
    gameEnd();

}
console.log(wrongCounter);
console.log(word);

