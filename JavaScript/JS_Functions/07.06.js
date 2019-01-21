// 07.06 JavasScript code
// Define a function (1.) 
function calculateReimbursement(length) {
  parseInt(length);
  if (length <= 10) {
    return 8.00
  }
  else if (length > 10 && length <= 20) {
    return  11.00
  }
  else if (length > 20 && length <= 30) {
    return 13.50
  }
  else if (length > 30 && length <= 45) {
    return 16.50
  }
  else if (length > 45 && length <= 60) {
    return 21.00
  }
  else {
    return 0.00
  }
}
// Define a function (2.) 
function customerPay(doctorFee, reimbursement) {
  parseFloat(doctorFee);
  return doctorFee - reimbursement + 15.90;
}

// Define a function (3.) 
// Complete the code of the function calculate.
function calculate() {
  // 1. Get values from the input fields
  var length = document.getElementById("txtLength").value;
  var doctorFee = document.getElementById("txtDoctorsFee").value;
  
  var doctorFeeFloat = parseFloat(doctorFee).toFixed(2)
  // 2. Call the function (1.) which calculates Kela reimbursement 
  var reimbursement = calculateReimbursement(length);
  // 3. Call the function (2.) which calculates amount left for the customer to pay
  var customerToPay = customerPay(doctorFee, reimbursement);
  // 4. Display the answer 
  document.getElementById("divOutput").innerHTML = "Doctor's Fee is " + doctorFeeFloat + " euros.<br>" + "Kela reimbursement is " + reimbursement.toFixed(2) + " euros.<br>" + "Office fee is " + 15.90.toFixed(2) + " euros.<br>" + "Customer needs to pay " + customerToPay.toFixed(2) + " euros.";
}