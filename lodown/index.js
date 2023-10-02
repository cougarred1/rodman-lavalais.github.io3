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
 * @param {array, number}: it takes in an array 
 * @param {number}: Number the function takes in
 * @returns{array or number}: it returns an array of the first elements in the input array
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
 * reject: Function which returns an array for each element tested in our callback that returned false
 * 
 * @param {Array}: Each element tested in the array, after iterating
 * @param{Function}: Callback function used to test each element on the array
 * @returns{Array}: Returns array that includes each element for which calling the function returned false
 */

_.reject = function(array, func){
  //storage array to push expected values
  let output = [];
  //iterate through the array
  for (let i = 0; i < array.length; i++){
    //if the callback function of the elements returns false
    if (func(array[i], i, array) === false) {
      //push those values in storage array
      output.push(array[i]);
    }
  }
return output
}

module.exports.reject = reject;

/**
 * partition: Function which returns array of sub arrays where the first sub is the array
 * for values which calling the funciton returned truthy. While the second
 * array are the values for which calling the function returned falsyA
 * 
 * @param {Array}: Iterate through each of the elements in the array seeing if claling the function
 * results to truthy or falsy
 * @param{function}: callback function which is our test
 * @returns{Array}: Array of two sub arrays, one which the function call invlude all truthy values
 *  while the other are falsy values
 */

_.partition = function(array, func){
  let output = [];
  let arr1 = [];
  let arr2 = [];
   output.push(arr1);
      output.push(arr2);
      
    for (let i = 0; i < array.length; i++){
     
      if (func(array[i], i, array) === true) {
        output[0].push(array[i]);
      } else {
        output[1].push(array[i]);
      }
    }
    return output;
  }

module.exports.partition = partition;

/**
 * map: function which returns new array returning the callback function of every element
 * 
 * @param {array or object} collection: function takes in an array or object
 * @param{function} func: function takes in an input function to be applied to each value in the collection
 * returns {array} collection: function returns an array madee upof the return values from calling input function
 */

_.map = function(collection, func){
  let output = [];
  if (Array.isArray(collection)){
    for (let i = 0; i < collection.length; i++){
      //use input func to create "modified" version of current value
      
      
      output.push(func(collection[i], i, collection));


      //push modified value into
    }
  } else {
    // iterate object
    for (let key in collection){
      output.push(func(collection[key], key, collection));
    }
      // pass current value, key, and collection into callback function and push output
  }
  return output;
}

module.exports.map = map;

/**
 * pluck: Function which returns an array containing the value of every key
 * 
 * @param {array of objects}: iterate through the array of objects
 * @param{string}: Iterate through each key of in every object iteration, representing the string of every value
 * @returns{Array}: Returns an array values of every key
 */

_.pluck = function(array, prop){
  let output = [];
  _.map(array, console.log);
  for (let i = 0; i < array.length; i++){
    console.log("inside the for loop", array[i])
    output.push(array[i][prop]);
    
    }
  return output;
  }

module.exports.pluck = pluck;

/**
 * every: A function that returns a boolean depending on the if every element passed
 * the test provided by the function callback
 * 
 * @param {array or object}: The function takes in an array or object to iterate through the elements or keys
 * @param {function}: callback function provided only returning true if every element or value passes
 * @returns{boolean}: returns a boolean if every item passes the test, and false even if one item fails
 */

_.every = function(collec, func){
  if (Array.isArray(collec) && func !== undefined){
    for (let i = 0; i < collec.length; i++){
      if (func(collec[i], i, collec) !== true){
        return false;
      } 
    }
   
  } else {
    if (func !== undefined){
     for (let i in collec){
     if (func(collec[i], i, collec) !== true){
      return false;
     } 
    } 
    }
  } if (func === undefined){
      for (let i = 0; i < collec.length; i++){
        if (!collec[i]){
          return false;
        } 
        }
      }
      return true;
}

module.exports.every = every;

/**
 * some: A function that returns on boolean depending on if atleast one element or value passed
 * provided by the function call back is true
 * 
 * @param {Array or Object}: iterate through an Array or Object deciding if atleast one element or value is true
 * @param {function}: A function callback that only passes true if atleast one element passes the test
 * @returns{boolean}: Returns boolean depending if atleast one element or value passes the callback function provided
 */

_.some = function(collec, func){
  if (Array.isArray(collec) && func !== undefined){
    for (let i = 0; i < collec.length; i++){
      if (func(collec[i], i, collec) === true){
        return true;
      } 
    }
   
  } else {
    if (func !== undefined){
     for (let i in collec){
     if (func(collec[i], i, collec) !== true){
      return true;
     } 
    } 
    }
  } if (func === undefined){
      for (let i = 0; i < collec.length; i++){
        if (collec[i]){
          return true;
        } 
        }
      }
      return false;
  }

module.exports.some = some;

/**
 * reduce: A function which callback on each element in the array, and return a single value as the accumulator
 * after iterating and getting the last updated value
 * 
 * @param {array}: The array to iterate over using each element
 * @param{function}: the callback function which puts applies our code block to every element
 * @param{seed}: Our initial value which is our accumulator, which when not set, is assigned to our first element of array
 * @returns{Value}: The final result of running the reducer across all elements
 */

_.reduce = function(array, func, seed){
  let result;
  if (seed === undefined){
    result = array[0];
    for (let i = 1; i < array.length; i++){
      result = func(result, array[i], i);
    }
  } else {
    result = seed;
    for (let i = 0; i < array.length; i++){
      result = func(result, array[i], i);
    }

  }
  return result;
}

module.exports.reduce = reduce;

/**
 * extend: Function  used to copy keys fromone object to another 
 * 
 * @param {Object}: The first object used as the base where the second object keys will be copied into
 * @param{Object}: The second object who's keys are brought into the first
 * @returns{Object}: Updated object, with all other objects keys brought into it
 */

_.extend = function(){
  
  let obs = arguments[0];
  for (let i = 1; i < arguments.length; i++){
    for (let key in arguments[i]){
      obs[key] = arguments[i][key];
    }
  }
   return obs; 
}

module.exports.extend = extend;