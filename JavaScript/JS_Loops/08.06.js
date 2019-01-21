// 08.06 JavasScript code

function showComparisonScores() {
  var totalVotes = Number(document.getElementById("txtVotes").value);
  var candidates = Number(document.getElementById("txtCandidates").value);
  var ordinal = 1;
  var outputText = "";
  
    // For each candidate
  for (i = 1; i <= candidates; i++) {
    var comparisonScore = totalVotes / ordinal
    var outputText = outputText + i + ". candidate: " + comparisonScore.toFixed(0) + "</br>";
    ordinal++;
    
  }
        // Calculate comparison score for the candidate
  

    // Show scores
document.getElementById("pOutput").innerHTML = outputText;

}
