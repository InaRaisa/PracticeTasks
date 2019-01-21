// 05.10 JavasScript code

function calculateCosts() {
  var kilometersText = document.getElementById("kilometers").value;
  var kilometers = Number(kilometersText);
  var consumptionText = document.getElementById("consumption").value;
  var consumption = Number(consumptionText);
  var priceText = document.getElementById("price").value;
  var price = Number(priceText);
  var participantsText = document.getElementById("participants").value;
  var participants = Number(participantsText);
  var costPerPerson = consumption*kilometers*price/participants;
  document.getElementById("divAnswer").innerHTML = costPerPerson;

}
