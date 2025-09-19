//Number Guessing Game


let attempt = 0;
let max = 10;
let min = 1;
let answer = Math.floor(Math.random() * (max - min + 1) + min);
answer = Number(answer);
let isGuessing = true;
//console.log(typeof answer, answer);

while(isGuessing){
let guessNumber = window.prompt(`Enter the number between ${min} to ${max}`);
guessNumber = Number(guessNumber);

if (isNaN(guessNumber)){

    window.alert(`Enter value is not an Number!`);
}

else if(guessNumber > max){
    window.alert(`Enter number ${guessNumber} was to high`);
   
}
else if(guessNumber < min){
    window.alert(`Enter number ${guessNumber} was to Small`);
}
else if (guessNumber === answer){
    window.alert(`You Guessed the Number Correctly ✅. Guessed Number is ${answer} and it was your ${attempt} attempt`);
    isGuessing = false;
}
attempt++
// console.log(guessNumber);
}
