//This is the Excercise : Create the counter program

let count = 0;

document.getElementById('decrement-button').onclick = function(){
count--;
document.getElementById('count-paragraph').innerText = count;
}

document.getElementById('increment-button').onclick = function(){
    count++;
document.getElementById('count-paragraph').innerText = count;
}

document.getElementById('reset-button').onclick = function(){
    count = 0;
document.getElementById('count-paragraph').innerText = count;
    
}

