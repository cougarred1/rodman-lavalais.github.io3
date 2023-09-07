// #!/usr/bin/env node 

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./rodman-lavalais.github.io3/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

//map, filter, each, reduce

//return number aaand find number of males
var maleCount = function(array) {
    let males = _.filter(array, function(customers){
        return customers.gender === 'male';
    });
    return males.length;
};

//return number
//find number of females
var femaleCount = function(array){
    let females = _.reduce(array, function(acc, cur){ //determine if current customer is female, if female add 1 to accumulator
        if (cur.gender === 'female'){
            acc += 1;
        }
        return acc;
    }, 0);
    return females;
}




var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(acc, cur){
        //is the current customer in the array older than accumulator
        if (cur.age > acc.age){
            return cur; //return current 
        } 
        return acc;
    });
    // no seed => result = array[0]
    return oldest.name;  //return oldest customers name
}
    
var youngestCustomer = function(array){
    let youngest = _.reduce(array, function(acc, cur){

        if (cur.age < acc.age){
            return cur;
        }
        return acc;
    })
    return youngest.name;
};

var averageBalance;  //skip til next week

//use .filter
var firstLetterCount = function(array, letter){
    let first = _.filter(function(list){
        if (list.name[0].toUpperCase() === letter)
    })
    return first;
};

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
