console.log("hello world from external js file");
let firstName = "John";
let lastName = "Doe";

console.log(firstName);
console.log(lastName);

let age = 11;
console.log(age);
age = 54;
console.log(age);

const pi = 3.14159;
console.log(pi);

console.log((4+6+9)/77);

let a = 10;
console.log(a); 

a = 5;
console.log(a);

let b = a * 7;
console.log(b);

const max = 57;
const actual =  max - 13;
const percentage = actual / max;
console.log(percentage, actual, max);

function createParagraph() {
  const para = document.createElement("p");
  para.textContent = "You clicked the button!";
  document.body.appendChild(para);
}

let admin;
let name;
name = "John";
admin = name;
console.log(admin);

const planet = "Earth";
let visitor = "Alien";

console.log (typeof pi);
console.log (typeof admin);
console.log (typeof planet);
console.log (typeof a); 

console.log(pi.toFixed(3));
console.log (typeof ("10"+a));
console.log(--a);