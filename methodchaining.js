//Method Chaining - Calling one method after another 
//                                      in one continuous line of code.


//METHOD CHAINING---------- without method chaining 
let userName = window.prompt("Enter Your UserName");

// userName = userName.trim();
// userName = userName.charAt(0);
// let fullName = userName.toUpperCase();

// userName = userName.slice(1);
// let lastName = userName.toLowerCase();

// userName = fullName + lastName;

// console.log(userName);

//Using method Chaining 
userName = userName.trim(); // remove spaces
let firstChar = userName.charAt(0).toUpperCase() + userName.slice(1).toLowerCase();   // first letter uppercase
//let restChars = userName.slice(1).toLowerCase();    // rest lowercase
let fullName = firstChar;
console.log(fullName);
