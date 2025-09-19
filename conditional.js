//Conditional Statements 

//How to use the nested if statements

// let age = 18;
// let license = true;

// if(age >= 18){

//     console.log("You are eligible to vote!")
//     if(license){
//         console.log("You are also eligible for get the License too...")
//     }
// }
// else if(age === 15 && !license){

//     console.log("You are in your teen age!");
// }
// else {

//     console.log("you are not an adult! wait for your turn :)")
// }


// age >= 18 ? console.log("you are eligible to vote!") : console.log("You are not eligible to vote");


//For Based on the User Age allow the user to enter the site.

const conditionMessage = document.getElementById('field-msg');
const conditionInput = document.getElementById('conditional-input');
const conditionButton = document.getElementById('conditional-submit');

conditionButton.onclick = function(){

    let message = Number(conditionInput.value);
    ageCalculation(message);
    

}

function ageCalculation(age){
if(age == 0){
        conditionMessage.innerText = "You are just born! Get out from this site";
    }
    else if(age >=100){
        conditionMessage.innerText = "Graveyard is calling You!";
    }
    else if(age >=50){
        conditionMessage.innerText = "You are slightly older. Don't try this at home";
    }
    else if(age < 18){
        conditionMessage.innerText = "Yeah boyy! still You have a time! to enter this site!";
    }
    else if(age >= 18){
        conditionMessage.innerText = "You are an adult!";
    }
    else{
        conditionMessage.innerText = "You are not an Human Being!";
    }
}

let count = 0;
do {
    if(count === 5){
console.log(count);
break;
    }
    console.log(count);
    count++;
}
while( count <= 10)

