// 06.07 JavasScript code
function showStudyGrant() {
  // TODO
  var age = document.getElementById("txtAge").value;
  var parents = document.getElementById("txtWithParents").value;
  if (age >= 20 && parents == "n") {
    outputText = "The study grant is 335.20 euros."
  }
  else if (age >= 20 && parents == "y") {
    outputText = "The study grant is 136.70 euros."
  }
  else {
    outputText = "Ask Kela"
  }
  document.getElementById("divAnswer").innerHTML = outputText;
}