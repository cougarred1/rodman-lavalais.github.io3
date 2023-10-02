/**
 * VARIABLES: 
 * //summary 
 * 0: JavaScript variables play a crucial role in your JavaScript programs
 *  by serving as containers for data management. They are indispensable for 
 * handling values and data manipulation within your code.
 * 
 * 1: Declartion consits of creating the variable with var let or const
 * 
 * 2: assignment consist of assigning the variabl to a value or collection of some sort
 * 
 * 3: Hoisting conist of moving all declarations to the top of the scope, 
 * before the code executes.
 */



// Declaration

let hello7;
var hello3;
const lelo = "heyyy";
//Assignment:

let hello = "bye";

//Hoisting

var city = "Houston";

console.log(city) // after hoisting, undefined will result in the console.

var city;

city = "Houston";

// Var, let and const declaration

// Var can be redeclared, and reassigned. The scopes include global and function scope
var greeting = "bye";
var greeting = "hello";

// Let cannot be redeclared, but can be reassigned. It can have a block scope, and must be initialized before use
let greeting2 = "hello";
greeting2 = "bye"; //can be reassigned

// const cannot be redeclared or reassigned, and it can have a block scope
const color = "Blue";
color = "yellow"; // This will not work before a const cannot be reassigned


// Hoisting with var
var greeting = "Hello";
//After hoisting it would bring the variable declaration and name to the top , while the variable name and value stays 
var greeting; //hoisted with a default initialization of undefined
greeting = "Hello";

//Hoisting with let 
function hoisting() {
    console.log(x); // X won't be accessed before initialization so a error will be given
    let x = 7;
    console.log(x); // 7
  }
  
  hoisting();

//hoisting with const
function hoisting() {
    console.log(x); // X won't be accessed before initialization so a error will be given
    const x = 7;
    console.log(x); // 7
  }
  //const is pretty similar to let, but the variable cannot be reassigned after initialization
  