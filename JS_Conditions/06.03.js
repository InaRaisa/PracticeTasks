// 06.03 JavasScript code
function comparePackages() {
  // assign input field values into a variables
  var textMessages = document.getElementById("txtMessages").value;
  var callTime = document.getElementById("txtCallTime").value;
  // calculate the costs of the Special Package
  var specialPackage = 19.90 + textMessages * 0.069 + callTime * 0.069;
  // If the Special package is cheaper than the All-inclusive package
  if (specialPackage < 29.90) {
    // assign text "The Special package (XX.XX) is cheaper than the All-inclusive package (29.90)"
    // to a variable
    outputText = "The Special package " + specialPackage.toFixed(2) + " is cheaper than the All-inclusive package (29.90)";
    // otherwise
  } else {
    // assign text "The All-inclusive package (29.90) is cheaper than the Special package (XX.XX)"
    // to a variable
    outputText = "The All-inclusive package (29.90) is cheaper than the Special package " + specialPackage.toFixed(2);
  }
  // write the answer to the answer div, as the content
  document.getElementById("divAnswer").innerHTML = outputText;
}