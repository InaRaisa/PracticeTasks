// 05.09 JavasScript code
  
function calculateRent() {
  var rentText = document.getElementById("rent").value;
  var rent = Number(rentText);
  var participantsText = document.getElementById("participants").value;
  var participants = Number(participantsText);
  var costPerPerson = rent / participants;
  document.getElementById("divAnswer").innerHTML = costPerPerson;
    
}
