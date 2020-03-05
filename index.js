
//If a customer has more than 1000 points, 
//they are 'gold' customer, otherwise
//they are 'silver' customer

let points = 110;
//first we start with condition
//then depending on the points, we set type to gold or silver >> this is ternary operator
let type = points > 100 ? 'gold' : 'silver';

console.log(type);
