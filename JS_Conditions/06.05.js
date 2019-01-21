// 06.05 JavasScript code

function calculateBMI() {
var weight = document.getElementById("txtWeight").value;
var height = document.getElementById("txtHeight").value;
var BMI = weight / (height/100.0 * height/100.0);
if (BMI <= 18.4) {
  outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Weight less than normal weight)"
}
 else if (BMI >= 25.0) {
   outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Overweight)"
 }
  else {
    outputText = "Body Mass Index (BMI) is " + BMI.toFixed(2) + " (Normal weight)"
  }
document.getElementById("divAnswer").innerHTML = outputText;
}
