//Strict equality (Type + Value)
console.log(1 === 1);  //T
console.log('1' === 1); //F 

//Lose equality 
console.log(1 == 1); //T
console.log('1' == 1); //T

// This operator '==' looks to the value of operand on the left side '1' string,
// so it will automatically convert what we have  on the right side (2nd operand which is number) to string 
// '1' == 1 >> becomes >> '1' == '1'

console.log(true == 1); // T
// true == 1 >> becomes >> true == true

//Lose equality operator '==' doesnt care about types matching, if the types dont match, it will convert the type of what we have on the right side to the type of what we have on the left side 
//Most of the time, Strict equality operator should be used
