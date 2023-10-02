/**
 * OPERATORS
 * 
 * 0: Operators are symbols that perform operations on values and variables.
 * While allowing you to manipulate data in numerous ways.
 * 
 * 1: Assignment includes " =, +=, -=, *=, /=, %="
 * 
 * 2: Arithmetic includes " +, -, *, /, %, **"
 * 
 * 3. Comparison includes " ==, ===, !=, !==, >, <, >=, <="
 * 
 * 4: Logical includes " &&, ||, !"
 * 
 * 5: Unary includes " +, -, ++, --, and typeof"
 * 
 * 6: Ternary includes "(condition, return if true, return if false)"
 * 
 * 
 */

//Assignment

let x = 5;
x += 5; // results to 10
x -= 5; // 0
x *= 5; // 25
x /= 5; // 1
x %= 5; // 0

//Arithmetic
let y = 1;
y + 1; // 2
y - 1; // 0
y * 1; // 1
y / 1; // 1
y % 1; // 0 
y ** 1; // 1

//Comparison
let j = 10;
j == x; // false
j === x; // false
j != y; //true
j !== y; // true
j > x; //true
j < 100; //false
j >= 10; //true
j <= 11; //true

//Logic

if (j > 9 && j < 11);//true
if (j > 9 || j <= 10); //true
(!j);

//Unary
let r = 1;
console.log(+r); // 1
console.log(-r); // -1
console.log(r++); //1
console.log(r--); // 0
console.log(typeof r); //"number"

//Ternary
return j > x? true : false; //true



