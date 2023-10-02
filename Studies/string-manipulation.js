/**
 * STRING MANIPULATION
 * 
 * 0: String Manipulation includes multiple methods and techniques for manipulating
 * strings.
 * 
 * 1. Manipulating strings with operators such as + is very possible
 * 
 * 2. You can also manipulate strings with string methods
 */

const { stringify } = require("querystring");

// Being immutable
// Strings ar immutalbe in Javascript, meaning that after being created, you cannot change
//individual characters within the string. Any modifications desired results in a new string created


//Operators

let str1 = "Hello";
let str2 = "Rodman";
let str3 = "Hello my friend!    ";
let result = str1 + " " + str2;

//string methods

console.log(str1.length); //returns number

console.log(str1.split("")); //returns a array of each letter as a element

console.log(result); // returns "Hello Rodman"

console.log(str3.trim()); 

console.log(str3.toLowerCase());
