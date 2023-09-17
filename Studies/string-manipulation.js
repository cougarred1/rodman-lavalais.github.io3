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

//Operators

let str1 = "hello";
let str2 = "Rodman";
let str3 = "Hello my friend!    ";
let result = str1 + " " + str2;

//string methods

console.log(str1.length); //returns number

console.log(str1.split(""));

console.log(str3.trim());

console.log(str3.toLowerCase());
