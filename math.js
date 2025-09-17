//Math = built in object that provides a collection of properties and methods.
let x = 16;
let y = 20;
//console.log(Math.PI);
console.log(Math.round(x)); //Rounds to nearest integer (4.6 → 5, 4.3 → 4).
console.log(Math.floor(x)); //Rounds down (4.9 → 4).
console.log(Math.ceil(x)); //Rounds up (4.1 → 5).
console.log(Math.trunc(x)); //Removes decimal part (4.9 → 4, -4.9 → -4).
console.log(Math.abs(x)); //Absolute value (-7 → 7).
console.log(Math.pow(x,3)) // x raised to power y
console.log(Math.sqrt(x)); 
console.log(Math.cbrt(x)); 
console.log(Math.max(x,y)) // Maximum of the two numbers
console.log(Math.min(x,y)) // Minimum of the two numbers

console.log(Math.random());