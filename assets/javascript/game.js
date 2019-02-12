var wordBank = ["hills","mountain","stone","rocks","badger", "range","ridge","boulder","pebbles","sand","earthquake","landslide"];
var guesses = [];

var word = wordBank[Math.floor(Math.random() * wordBank.length)];

var wins = 0;
var guessesLeft = word.length +6;

for (var i=0; i<word.length;i++){
    guesses[i] = "_";
}

var remainingLetters = word.length
while (remainingLetters > 0){
    alert(guesses.join(" "));
    var guess = prompt("Guess a letter!")
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
        }

    }
    

}
alert(guesses.join(" "));
alert("Good job the answer was " + word);
console.log("var word " + word);
console.log("var wordList " + wordBank);
console.log("var remainingLetters " + remainingLetters);