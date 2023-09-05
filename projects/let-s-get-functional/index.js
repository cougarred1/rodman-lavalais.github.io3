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


var maleCount = function(array) {
    let males = _.filter(array, function(customers){
        return customers.gender === 'male';
    });
    return males.length;
};

var femaleCount = function(array){
    let females = _.reduce(accumulator, function(accumulator, current){ //determine if current customer is female, if female add 1 to accumulator
        if (customers.gender === 'female'){
            accumulator += 1;
        }
        return accumulator;
    }, 0);

}




var oldestCustomer = function(array){
   let oldest = _.reduce(array, function(accumulator, current){
        //is the current customer in the array older than accumulator
        //return current
    }); // no seed => result = array[0]
        //return oldest customers name
}
    
var youngestCustomer;

var averageBalance;  //skip til next week

var firstLetterCount;

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
