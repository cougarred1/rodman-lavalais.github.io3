// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 * 
 * test => return true or false.
 */

function createGreaterThanFilter(base) {
    
    
    return function(value){
        if (value > base){
            return true;
        } else{
            return false;
        }
    }
    
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    return function(value){
        if (value < base){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
  
    //return function that tests if a given string
    // starts with the startswith characters
    
    return function (string){
       if (string[0].toLowerCase() === startsWith.toLowerCase()){
        return true;
       } else {
        return false;
       }
    }
   
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        if (string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 * 
 * I - Array
 * O - Array of strings modified
 * C-
 * E- 
 */


function modifyStrings(strings, modify) {
    //storage array to put array of strings in
  let output = [];
    //loop over the array of strings
  for (let i = 0; i < strings.length; i++){
    //push modified names into output storage
     output.push(modify(strings[i]))
  }
    
    //return to storage array
   return output;
}

modifyStrings(['a', 'b', 'c'], function(string){
return string.toUpperCase();
}); //['A', 'B', 'C'];

modifyStrings(['a', 'b', 'c'], function(string){
    return string + '!';
    }); 
/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 * 
 * I - Array of Strings
 * O - Boolean based on if it passed
 * C -
 * E -  
 */
function allStringsPass(strings, test) { //test is a function that will return true or false
    //empty storage array
    let output = [];
    //iterate through the strings array
   for (let i = 0; i < strings.length; i++){
    //if each iteration passes the test
    if (test(strings[i])){
        //push it to the output array
        output.push(strings[i])};
    } 
    if (output.length === strings.length){
        return true;
    } else {
        return false;
    }
   }



allStringsPass(['alex', 'francis', 'aaron'], function(string){
    return string[0] === 'a';
})

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
