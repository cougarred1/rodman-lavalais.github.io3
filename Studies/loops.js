/**
 * LOOPS
 * 
 * Loops allow us to repeatedly execute a block of code, long as our conditions are met.
 * Which includes a start, a stop and a update value. Looops are very helpful which allows us to eliminate typing 
 * very redundant code.
 * 
 * 1: A while loop continues to execute as long as our condition is true.
 * A for loop is used when we already know how many times we wanna execute the code
 * a for in loop is used for iterating over the properties in a object
 * 
 * 2 and 3; You can tell these loops how many times to loop, also whether to count up or in reverse 
 * in an array.
 * 
 * 4: You can loop over an object getting its key value pairs with a for in loop
 * 
 * 
 */

//while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
//This says that long as i is less than 5, keep incrementing up by 1.
//Once the i reaches 5 it'll stop and if we remove our increment (++) it'll loop forever

//for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
  }
/**
 * This for loop says that we wanna start at 0, and go up by 1 as long as i is less than 5
 * Which will be 5 times. We knew how much we wanted to iterate
 */

//for in loop
const person = { name: 'Rodman', age: 24 };
for (const key in person) {
  console.log(key, person[key]);
}
//This for in loop will iterate over our object and log its keys and values

//loop over array forward

let arr1 = [1, 2, 3];

for (let i = 0; i < arr1.length; i++){
    console.log(i);
  //this will iterate and log [1, 2, 3];  
}


//loop backwards
for (let i = arr1.length; i >= 0; i--){
    console.log(i);
    //this will iterate from the array starting at the end and loop backwards
    // we will get [3, 2, 1];
}