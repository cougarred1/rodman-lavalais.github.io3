/**
 * FUNCTIONS
 * 
 * 0: Functions are very fundamental in Javascript, being reusable blocks of code that can be called to perform tasks.
 * Functions start with the "function" keyword followed by the name of the function.
 * The parameters of the function are enclothes in parenthesis, which are later assigned to arguments.
 * The function body contains the code that will be executed when the function is called.
 * 
 * 1. First we must create the function and set up its environment.
 * Then we execute the function by executing the function call
 * 
 * 2. The difference between parameters and arguments is that parameters are place holders
 * while arguments are what the placeholders are assigned to, which are in running the function
 * 
 * 3. Syntax for a name function is declaring the function with the "function" keyword
 * then put the function name after it, whith the parameters enclosed by parethesis. With the function body
 * enclosed by curly brackets. With a option return
 * 
 * 4. We assign a function to a variable by creating a variable with var let or const and assigning
 * it to a function expression.
 * 
 * 5. We can specify inputs by assigning the paramater name to a variable that has already been declared with information. We can also specify
 * outputs by created a storage value, putting our code block result in it, then returning that
 * 
 * 6. Variables declared inside a function  have a local scope and are not accessible outisde of it
 * Variables declared outside a function have a global scope and can be accessed from anywhere
 * 
 * 7. Functions in Javascript remember their scopes and create closures, which allow function to access
 * and manipulate variables in the function.
 *  
 * 
 */

//creation and execution

function add(x, y){
    return x + y;
}
add(3, 1);
//here the function is created with the function key word, name parameters and code block
//then executed using the function call of calling its name with arguments enclosed by parenthesis

//parameters and areguments

function subtract(x, y){
    return x - y;
    //x and y and paremeters, place holders
}
subtraction(1, 1);
//1 and 1 are arguments, passed into the function

//syntax

function multiply(j, i){
    return j * i;
}

/**
 * syntax involved the function keyword followed by the nanme
 * parameters enclosed by parenthesis, and code block in curly brackets
 */

//assign function to variable
//
var a = function ( parameters ) {
    // code to be executed when called
 }
 //create a function and assign it to a variable creating a function expression

 //specify inputs and outputs 

 function multiply(a, b) {
    return a * b;
}
//you specify outputs by using a return statement to return the value from the function

//specifying inputs
function add(a, b) {
    // 'a' and 'b' are parameters
    return a + b;
}

//you specify inputs by defining the parameters thats included in the declaration


//scope 

var greeting = "hello"; //global scope accessed anywhere

function newFunc(){
    let newGreet = "bye";
    //local scope accessed only in the function
    greeting = "hellloooo";
    //to access or modify a global scoped variable, all you have to do is reference the variable name
    //inside of the function. Since global scoped variables are accessible from anywhere in the code
}

//closures
function outerFunction(x) {
    // This inner function is a closure
    function innerFunction(y) {
        console.log(x + y);
    }

    return innerFunction;
}

//the closers are created by invoking outerFunction with different arguments
