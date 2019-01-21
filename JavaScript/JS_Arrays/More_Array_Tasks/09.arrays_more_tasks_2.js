
var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O-", "AB+"];

function insertValue() {
    var txtValue = document.getElementById("txtValue").value;
    var percentage = 0;
    var total = 0;
    for (i = 0; i < bloodTypes.length; i++) {
        if (bloodTypes[i] == txtValue) {
        total = total + 1;
        }
    }
    percentage = total/bloodTypes.length*100;
    document.getElementById("divOutput").innerHTML = txtValue + " " + percentage + " percentage";
}