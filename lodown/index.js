'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes in an input value and returns it unhinged
 * 
 * @param {value}: Function takes in any value
 * @returns {value}: Function returns input value unchanged
 */
_.identity = function(){
    return value;
};

module.exports.identity = identity;

/**
 * typeof: returns the type of value as a string
 * 
 * @param {value}: Takes in any value
 * @returns{string}: returns the value as a string
 */
_.typeOf = function(value){
    if (typeof value === "string"){
      return "string";
    } else if (Array.isArray(value)){
      return "array";
    } else if (value === null){
      return "null";
    } else if (typeof value === "undefined"){
      return "undefined";
    } else if (typeof value === "number"){
      return "number";
    } else if (typeof value === "boolean"){
      return "boolean";
    } else if (typeof value === "object"){
      return "object";
    } else {
      return "function";
    }
    }

module.exports.typeof = typeof;

/**
 * first: function that takes in an array and a number. if <array> is not an array, it returns an empty array
 * if it is an array, it checks if <number> is a number and if it is it returns that amount
 * of elements in the array. if <number> isn't a number it just returns the first element of the array
 * 
 * @param {array, number}: it takes in an array and a number
 * @returns{array or number}: it returns a number or array, depending on what our arguments is
 */

_.first = function(array, number){
if (!Array.isArray(array) || number < 0){
  return [];
  } else if (typeof number !== "number"){
     return array[0];
  } else {
    return array.slice(0, number);
  }
 
}

module.exports.first = first;

/**
 * last: function that takes in an array and a number. if <array> is not an array, it returns an empty array
 * if it is an array, it checks if <number> is a number and if it is it returns that amount
 * of elements in the array starting from the back. if <number> isn't a number it just returns the last element of the array
 * 
 * @param {array, number}: it takes in an array and a number
 * @returns{array or number}: it returns a number or array, depending on what our arguments is
 */

_.last = function(array, number){
if (!Array.isArray(array) || number < 0){
  return [];
  } else if (typeof number !== "number"){
    return array[array.length - 1];
  } else if (number > array.length){
    return array;
  } else {
    return array.slice(array.length - number);
  }

}

module.exports.last = last;

/**
 * indexOf: function that returns the index of the array that is the first occurence of the value
 * it returns -1 if value is not in the array
 * 
 * @param {Array, value}: function takes in an array, which it iterates over and a value that is used
 * to see if the occurence of that value exists in the array
 * @returns{number}: returns a number representing the index of where the occurence of that value first 
 * comes in the array
 */

_.indexOf = function(array, value){

for (let i = 0; i < array.length; i++){
  return array.indexOf(value);
  } 

}
module.exports.indexOf = indexOf;

/**
 * contains: A function thst returns true depending whether our array contains our value
 * 
 * @param {array}: The array that iterates over to test if <value> is included inside of it
 * @param {value}: The value checked to see if it's included inside the <array>
 * @returns{boolean}: Boolean resulting in either true or false;
 */

_.contains = function(array, value){
  return array.includes(value) ? true: false;
}

module.exports.contains = contains;

/**
 * each: Function that tests whether the collection is an array or object, and returns the function call
 * once for each element or key provided.
 * 
 * @param {collection}: Either an array or object, which is iterated over to return the function call of each key or element
 * @param{function}:  Callback function provided 
 * @returns{element or key}: returns the result of calling the function for each element to the console
 */

_.each = function(collection, func){
    if (Array.isArray(collection)){
      for (let i = 0; i < collection.length; i++){
        func(collection[i], i, collection);
      }  
    } else {
      for (let i in collection){
       func(collection[i], i, collection); 
      }
      
    }
};

module.exports.each = each;

/**
 * unique: Function that takes in an array and returns a new array with all duplicates removed
 * 
 * @param {Array}: Iterates through the array, then uses indexOf to tell if each element is a duplicate
 * @returns{Array}: returns array with duplicates removed
 */

_.unique = function(array){
  let output = [];
  for (let i = 0; i < array.length; i++){
    if (output.indexOf(array[i]) === -1){
      output.push(array[i]);
    }
    
  }
  return output;
}


module.exports.unique = unique;

/**
 * filter: Function that calls a function for each element in an array and returns a 
 * new array for the elements which returned as true
 * 
 * @param {Array}: Iterate through the array testing each element by calling the function
 * @param{Function}: Callback function invoked on each element, deciding if each element passes test provided
 * @returns{Array}: New array returned with only elements from original array that passed test provided
 */

_.filter = function(array, func){
 let output = [];
  for (let i = 0; i < array.length; i++){
    if (func(array[i], i, array) === true){
      output.push(array[i]);
    }
   }
 return output; 
}

module.exports.filter = filter;


/**
 * map: function does
 * 
 * @param {array or object} collection: function takes in an array or object
 * @param{function} func: function takes in an input function to be applied to each value in the collection
 * returns {array} collection: function returns an array madee upof the return values from calling input function
 */