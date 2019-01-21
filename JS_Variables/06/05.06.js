// 05.06 JavasScript code

function calculateUnitFine() {
  // 1. Read the value from the input field into a variable
  var netIncomeText = document.getElementById("txtNetIncome").value;
  var netIncome = Number(netIncomeText);

  // 2. Calculate the unit fine and assign the result into another variable
  var unitFine = (netIncome - 255)/60;

  // 3. Write the answer to the web page DOM, in the answer div, as the content
  document.getElementById("divAnswer").innerHTML = unitFine.toFixed(2);  
  
}
