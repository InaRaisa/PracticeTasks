// 06.09 JavasScript code
function tellInfractionFine() {
  var speedText = document.getElementById("txtDrivingSpeed").value;
  var limitText = document.getElementById("txtSpeedLimit").value;
  var speed = Number(speedText);
  var limit = Number(limitText);
  var outputText;
  if (limit === speed) {
    outputText = "No speeding, no fine."
  } 
  else if (limit >= 10 && limit <= 60 && speed <= [limit + 15]) {
    outputText = "The infraction fine is 85 euros."
  }
  else if (limit >= 10 && limit <= 60 && speed > [limit + 15] && speed <= [limit + 20]) {
    outputText = "The infraction fine is 115 euros."
  }
  else if (limit >= 70 && limit <= 120 && speed <= [limit + 15]) {
    outputText = "The infraction fine is 70 euros."
  }
  else if (limit >= 70 && limit <= 120 && speed > [limit + 15] && speed <= [limit + 20]) {
    outputText = "The infraction fine is 100 euros."
  }
  else {
    outputText = "You will get income-based unit fine."
  }
  document.getElementById("divAnswer").innerHTML = outputText;
}