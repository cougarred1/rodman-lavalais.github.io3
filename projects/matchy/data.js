/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};

//dot notation to give animal a key named species of my choosing

animal.species = "Mammal";

//use bracket notation to add a key called name

animal["name"] = "Rodman";

//using either notation give animal a key called noises, thats's the value of an empty array

animal.noises = [];

//print animal object to the console

console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
//bracket array giving it a sound
noises[0] = 'roar';
//add another noise to the end
noises.push('purr');
//add to beginning
noises.unshift("growl");
//bracket notation to add to end again

noises[noises.length] = 'battlecry'
//console log length

console.log(noises.length);
//console log last element
console.log(noises.length - 1);
//console log whole array

console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//add noises key on animal to noises array
animal['noises'] = noises;
//add another noise to the noise key on animal
animal.noises.push("hello");

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * bracket and dot
 * 2. What are the different ways of accessing elements on arrays?
 * using bracket notation or and .length
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];

animals.push(animal);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }

//push duck into animals

animals.push(duck);

console.log(animals);

var lioness = { species: 'mammal', name: 'dude', noises: ['1', '2', '3', '4'] } 

var bird = { species: 'chicken', name: 'birdy', noises: ['5', '6', '7', '8'] }

animals.push(lioness);

animals.push(bird);



//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];

function getRandom(array){
 return (Math.floor(Math.random() * array.length));
}
console.log(getRandom(animals));
//Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.

friends.push(animals[getRandom(animals)].name);

console.log(friends);

/**
 * Using **bracket notation**, add the `friends` list as a **property**
 *  also named `friends` on one of the animals in the `animals` array
 * 






/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}