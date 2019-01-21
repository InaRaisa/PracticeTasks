
var wordArray = ["Enjoy the little things in life, for one day you`ll look back and realize they were big things. ", "When one door closes another door opens; but we often look so long and so regretfully upon the closed door that we do not see the ones which open for us.", "Don't cry because it's over, smile because it happened.", "To live is the rarest thing in the world. Most people exist, that is all.", "Life is what happens to us while we are making other plans.", "Life is like riding a bicycle. To keep your balance, you must keep moving."]
var randomAphorism = Math.floor(Math.random() * wordArray.length);
document.getElementById("pOutput").innerHTML = wordArray[randomAphorism];

// End