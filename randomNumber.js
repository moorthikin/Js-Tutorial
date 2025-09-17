//Random Number Generator Program

const randomButton = document.getElementById('random-button');
const randomNumber = document.getElementById('random-number-text');
let max = 200000;
let min = 100000;
let random;

randomButton.onclick = function(){
    random = Math.floor(Math.random() * (max -min)) + min;
    randomNumber.innerText = random;
}
