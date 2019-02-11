var wordBank = ["hills","mountain","stone","rocks","badger", "range","ridge","boulder","pebbles","sand","earthquake","landslide"];
var guesses = [];
var word = words[Math.floor(Math.random() * words.length)];
word.forEach(function(i){
    guesses[i]="_";
});
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
        word.length.forEach(function(j){
            if (word[j] === guess) {
                guesses[j] = guess;
                remainingLetters--;
            }
        });
    }
    alert(guesses.join(" "));
    alert("Good job the answer was " + word);

}