/**
 * Data Types
 * 
 * 0: Data types serve as categorizations that define the nature
 *  of data a variable can contain and the operations permissible on that data.
 * 
 * 1: Numbers are numerical values that represent integers
 * and floating numbers (values)
 * 
 * 2: Strings represent a group of characters enclosed by quotes or backticks
 * 
 * 3: Boolean represents true or false
 * 
 * 4: Array represents a ordered list of values created using square brackets
 * 
 * 5: Objects represents key value pairs
 * 
 * 6: Function represents a objects that is used to execute code
 * 
 * 7: Undefined represents a value that has been declared but not assigned
 * 
 * 8: Null represents intentional abscence of any value
 * 
 * 9: NaN stands for Not a Number, and is used to inform that the result of a value did not produce an expected
 * numerical value
 * 
 * 10: Ifinity behaves just like infinity. Anything multiplied by it , is infinity
 * while anything divided by it is 0. 
 * 
 * 11: Primitive data types are immutuables and cannot be changed aftert they're create, while being stored directly
 * in memory. While complex data types can be changed by modifying their elements or properties. Also they are stored by 
 * reference, which means when you assign a value to another variable and use it as a argument, you are working with
 * the same information
 * 
 * 12: Primited being passed into functions by copy means when you pass a variable as a argument in a function, a copy of it is made
 * and changes to one variable does not affect the other. While by reference, changes to one variable affects all references to the data
 */


//Number
let age = 24;

//String
let greeting = "hello";

//boolean
let attended = true;

//array
let groceries = ['apple', 'banana', 'pear'];

//object
let student = {
    age: 25,
    city: "Houston"
}

//function
function add(x, y){
    return x + y;
}

//undefined
let nondefined;

//null
let noValue = null;

//NaN
let result = 0 / 0;

//infinity
console.log(Infinity + 5);

//primitive value
let x = 3;
let y = x;
x = 7;
console.log(x); // 7
console.log(y); // 3

//Copy by reference example
let obj1 = { name: "Rodman"};
let obj2 = obj1; //obj2 references the same object as obj1

obj2.name = "Ricky"; // Modifying obj2 also changes obj1

console.log(obj1.name); // "Ricky"
console.log(obj2.name); // "Ricky"

//copy by value example

let str1 = "hello";
let str2 = str1; //num2 is a separate copy of the value of str1

str2 = "bye"; // changing str2 doesn't affect str1.

console.log(str1); // hello
console.log(str2); // bye