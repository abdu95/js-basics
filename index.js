//In JS, unlike other PLs, we can use logical operators with non-boolean values
console.log(false || true); //T
console.log(false || ""); //Abdu
console.log(false || 1); //1

//The result of a logical expression is not necessarily true OR false
//That depends on the value of the operands we have
// false || true >> second operand is true, thats why we get true back e.g. "Abdu", 1
//when JS engine tries to evaluate this expression,  false || 1, it looks at each operand
//if that operand is not a boolean true or false, it will try to interpret it as truthy or falsy

//Falsy:
//undefined
//null
//0
//false
// ''
//NaN

/* NaN is a special value in JavaScript, and when we are dealing with a mathematical
calculation that does not produce a valid number, this value is returned, not a number.
*/
//Anything that is not Falsy -> Truthy.

//false || "Abdu"
/*In this example, our second operand is a string with 4 characters. 
So this is not an empty string, it's not falsey, so it's truthy. 
So when our JavaScript
engine tries to evaluate this, it looks at the first operand
it's false so the search continues because with a logical or
operator, as you learned in the last lecture, as long as one of the operands
is true the result will be true. Now here in the second
example, the first operand is false, so the search continues
hoping that maybe the other operand is true or
truthy. In this case we are dealing with a truthy value, so
this value is immediately returned. The same goes for
third example. So here one is not a boolean true, it's truthy,
that's why the value of this operand is returned.
*/
console.log(true || 0);
console.log(false || 1 || 2);

/*
 The evaluation starts here, as soon as we find an operand that is
truthy, that operand is returned, so here our second operand is
truthy, it's value is returned, and here the evaluation stops.
It doesn't matter what we have on the right side, we could have a million other operands,
they are completely ignored, this is what we call short-circuiting. 
Short-circuiting. That's

*/

//real life example

// if we have a value for userColor, we're going to use that, if we don't, we're going to use the defaultColor.
let userColor = null;
let defaultColor = "blue";
let currentColor = userColor || defaultColor;

console.log("current color: " + currentColor);
