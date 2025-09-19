//Variable scope - where a variable is recognized and accessible (local and global)

let x = 3;
//let x = 4;


function num1(){
   // let x = 0;
    //x = "Number"
    console.log(x);
}

function num2(){
    let y = 0;
    console.log(x);
}

console.log(x);

num2();
