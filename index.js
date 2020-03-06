// Logical operators in JS: logical AND, logical OR, logical NOT operator

//Logical AND (&&)
//Returns TRUE if both operands are true
console.log(true && true); //T
console.log(false && false); //F

let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console.log("Eligible ", eligibleForLoan);

//Logical OR (||)
//at least one operand evaluates to true >> result is true

//NOT operator
let applicationRefused = !eligibleForLoan;
console.log("Application Refused ", applicationRefused);
