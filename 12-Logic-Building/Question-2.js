// Declare a variable name using let and store your name in it. Print it.
let myName = "Muqtasid";
console.log(myName)
// Declare a variable age using var and assign your age.
var Age = 27;
console.log(Age);
var Age = "27";
console.log(Age)
// Declare a constant country using const.
const countryName = "Pakistan";
console.log(countryName);
// Try changing the value of const country. What happens?
// Create two variables a and b and swap their values.
let variableOne = 10;
let variableTwo = 20;

let temp = variableOne;
variableOne = variableTwo;
variableTwo = temp;

console.log("variableOne:", variableOne);
console.log("variableTwo:", variableTwo);

// 1. Scope & Hoisting
// Declare a variable using var inside a function. Try accessing it outside the function. What happens?
function scop() {
var a = 10;
var b = 20;
}

// Declare a variable using let inside a block {}. Can you access it outside?
// Declare a variable without var/let/const and check if it becomes global.