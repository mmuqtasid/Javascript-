// Datatypes

// String
const myName = "Muqtasid";

// Number
let id = 1234;

// Boolean
let loggedIn = true;

// BigInt
let bigNumber = 123456789123456789123456789n; // Add 'n' at the end

// Undefined
let somethingUndefined;

// Null
let emptyValue = null;

// Symbol
let uniqueId = Symbol("id");


// Object
const person = {
  name: "Muqtasid",
  age: 22
};

// Array
const colors = ["red", "green", "blue"];

// Function
function greet() {
  return "Hello!";
}

console.table([myName,id,loggedIn,bigNumber,emptyValue,uniqueId , person , colors])
