$(document).ready(function(){
var wordBank = ["hills","mountain","stone","rocks","badger", "range","ridge","boulder","pebbles","sand","earthquake","landslide"];
var guesses = [];
var word = "";
var winCounter = 0;
var guessesLeft = 1;
var wrongCounter = [];
function check(){
    if (guess ===null){
                break;
    } 
    else if (guess.length !== 1){
        alert ("Please enter only 1 letter.")
    } 
    else {
        for (var j=0; j<word.length;j++){
            if (word[j]===guess){
                guesses[j] = guess;
                remainingLetters--;
                
            }
            else {
                wrongCounter.push(guess);
            }
        }
    }
}
function game(){
    guesses = [];
    word = wordBank[Math.floor(Math.random() * wordBank.length)];
    guessesLeft = word.length +5;
    for (var i=0; i<word.length;i++){
    guesses[i] = "_";
    }
    var remainingLetters = word.length;
    while (remainingLetters > 0 && guessesLeft > 0){
        var guess = letterGuessed);
        check(guess)
        
        document.querySelector("#guesses").innerHTML = guesses.join(" ");
        document.querySelector("#guessCounter").innerHTML = ("Guesses Remaining: " + guessesLeft);
        document.querySelector("#winCounter").innerHTML = ("Games Won: " + winCounter);
        document.querySelector("#wrongGuesses").innerHTML = ("Wrong Guesses: "+ wrongCounter);

    }
}
function roundComplete(){

}
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    game(letterGuessed);
    roundComplete();
startGame()
console.log(wrongCounter);
console.log(word);
});
