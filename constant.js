//const = A variable that can't be changed.
//Circumference = 2 * pi * radius;


let radius;
const PI = 3.14159;
let circumference;

document.getElementById('submit-radius').onclick = function(){
    radius = document.getElementById('input-radius').value;
    radius = Number(radius) ;
    console.log(radius, typeof radius)
    circumference = 2 * PI * radius;
    document.getElementById('my-paragraph').innerText = circumference;
}