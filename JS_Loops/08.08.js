// 08.08 JavasScript code
function calculateProfit() {
  // Read value of rounds from the input field
  var rounds = Number(document.getElementById("txtRounds").value);
  var i = 0;
  var bet = 1;
  var wins;
  var pay;
  var profit;
  // Make a loop which is executed as many times as was set through the input field.
  while (i <= rounds) {
    // Let win counter cumulating during every round of the loop. 
    // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
    var pips = Math.round((Math.random() * 5) + 1);
    // If the randomized pips is 1, 3 or 5, then no pay
    if (pips === 1 || pips === 3 || pips === 5) {
      pay = "No pay.";
    }
    else if (pips === 2 || pips === 4) {
      // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
      pay = bet * 1.25;
    }
    else {
      // Otherwise the pips 6 returns the inserted bet 150%	
      pay = bet * 1.5;
    }
    i++;
    wins += pay;
  }
  //Calculate the profit (euros) by subtracting the win counter (euros) from the bets (euros)
  profit = bet - wins;
  // Write the answer to the web page
  document.getElementById("pOutput").innerHTML = "Bets were altogether " + bet + " euros" + "<br>" + "Wins were " + wins + " euros" + "<br>" + "Profit was " + profit + " euros"
}