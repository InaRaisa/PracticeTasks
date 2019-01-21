var names = [];
var ages = [];
document.getElementById("divOutput").innerHTML = "0 members";

function saveValue() {
  names.push(document.getElementById("txtValueName").value);
  ages.push(document.getElementById("txtValueAge").value);
  document.getElementById("divOutput").innerHTML = names.length + " member(s)";
  document.getElementById("txtValueName").value = "";
  document.getElementById("txtValueAge").value = "";
}

function showMinors() {
  var minorsText = "";
  for (i = 0; i < ages.length; i++) {
    if (ages[i] < 18) {
      minorsText = minorsText + names[i] + ", " + ages[i] + " years<br>";
    }
  }
  document.getElementById("divOutputList").innerHTML = minorsText;
}

function showAdults() {
  var adultsText = "";
  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
      adultsText = adultsText + names[i] + ", " + ages[i] + " years<br>";
    }
  }
  document.getElementById("divOutputList").innerHTML = adultsText;
}

function showOldest() {
  var oldestText = "";
  var oldest = 0;
  for (i = 0; i < ages.length; i++) {
    if (ages[i] >= oldest) {
      oldest = ages[i];
      oldestText = names[i] + ", " + ages[i] + " years<br>";
    }
  }
  document.getElementById("divOutputList").innerHTML = oldestText;
}

function showYoungest() {
  var youngestText = "";
  var youngest = 130;
  for (i = 0; i < ages.length; i++) {
    if (ages[i] <= youngest) {
      youngest = ages[i];
      youngestText = names[i] + ", " + ages[i] + " years<br>";
    }
  }
  document.getElementById("divOutputList").innerHTML = youngestText;
}