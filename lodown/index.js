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
 * map: function does
 * 
 * @param {array or object} collection: function takes in an array or object
 * @param{function} func: function takes in an input function to be applied to each value in the collection
 * returns {array} collection: function returns an array madee upof the return values from calling input function
 */