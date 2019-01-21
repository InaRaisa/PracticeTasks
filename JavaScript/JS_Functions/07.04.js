// 07.04 JavasScript code

function randomInteger(from, to) {
    // Generate a random number between 'from' and 'to' and return it.
return Math.floor(Math.random() * (to - from + 1) ) + from;
}

function rollTheDice() {

    // (1) Call the function randomInteger(from, to) with parameter values 1 and 6.
    //     - Assign the return value of the function to the variable diceValue.
var diceValue = randomInteger(1, 6);

    
    // (2) Dispaly the value of the variable diceValue.
document.getElementById("divOutput").innerHTML = diceValue;
}