//function - a section of reusable code.
//                  declare once, use it whenever you want.
//                            call the function to execute the code.



/*
function userName (num1, num2){
body
}

function - keyword to create a function 
userName - function name - it should be your choice 
(num1, num2) - in the paranthese variables are called as parameters
*/

function happyBirthDay(userName = "Moorthi", age = 12){
    console.log(`Happy Birthday to You ${userName}`);
    console.log(`It is your ${age} Birth Day!`);
}
//Hardik Pandya, 22 - These are the arguments.
happyBirthDay("Hardik Pandya", 22);
