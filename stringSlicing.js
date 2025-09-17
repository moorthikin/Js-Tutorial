//string slicing = creating a substring from a portion of another string

//string.slice(start,end)

let email =  "moorthikin@gmail.com";

let substring = email.slice(0, email.indexOf("@"));
console.log(substring);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);
