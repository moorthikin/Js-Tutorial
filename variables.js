//Variable = A container that stores values. and behave as it if were contain the values.

//declaration let x;
//assigment let x = 100;

let age = 22;
let ggpa = 9.03;
let gender = "Male";
let aboutInfo = "Hello I am Rohit, I have been working as the software developer for the  3 years.";
let online = true;

//Find the data type of the variable 
console.log(typeof gender);

console.log(`Age is ${age}`);
console.log(`GGPA is ${ggpa}`);
console.log(`Gender is ${gender}`);
console.log(`User is Online is ${online}`);

document.getElementById('my-h1').innerText = `Gender is ${gender}`;
document.getElementById('my-paragraph').innerText = aboutInfo;