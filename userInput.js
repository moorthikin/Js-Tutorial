//How to accept the user Input 

/*
1. Easy Way = window prompt
2. Professional way = HTML Text box
*/

//let userName = window.prompt(`What's your name ? `);
//console.log(userName);

let userName;

document.getElementById('submit-button').onclick = function(){
    userName = document.getElementById('input-text').value;
    document.getElementById('my-paragraph').innerText = userName;
}