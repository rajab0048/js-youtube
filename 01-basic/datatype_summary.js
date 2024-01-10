// Primitive
//7 type : string, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 1234667964682546n

// Reference (Non Primitive)
// Array, Objects, Functions

const heros = ["ironman", "thor", "spiderman"]
let myobj = {
    name: "Rajab",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);