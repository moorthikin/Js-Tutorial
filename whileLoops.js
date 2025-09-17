//while loops = repeat some code WHILE some condition is true.

let isLoggedIn = false;
let userName;
let password;


while(!isLoggedIn){
userName = window.prompt("Enter your username");
password = window.prompt("Enter your password");

if(userName === "Moorthi" && password === "1234"){
    isLoggedIn = true;
    console.log("you logged in succesfully");
}
else {
     isLoggedIn = false;
    console.log("You credential was wrong")
}
}
 

// if(userName==="8"){
//    // console.log("Hello World");
// }
// console.log("Thanks for asking me!")

