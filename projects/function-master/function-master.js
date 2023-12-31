//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//storage array to return at end
    let output = [];
    //iterate through the object using for in loop
    for (let key in object){
        //push the object values into output storage array
        output.push(object[key]);
    }
    //return the output
    return output;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    //storage array
    let output = [];
//iteration
    for (let key in object){
        //push the keys into the storage array
        output.push(key);
    }
    //return the keys joined with a space to the storage array
    return output.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //storage array
    let output = [];
//iteration
    for (let key in object){
        if (typeof object[key] === 'string'){
        output.push(object[key]);
        } 
        //push the keys into the storage array
        
    }
    //return the keys joined with a space to the storage array
    return output.join(" "); 
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    } else {
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
   return string.charAt(0).toUpperCase() + string.slice(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let newArr = string.split(" ");
    for (let i = 0; i < newArr.length; i++){
        newArr[i] = newArr[i].charAt(0).toUpperCase() + newArr[i].slice(1).toLowerCase();
    }
    return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    return `Welcome ${object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase()}!`;
    
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  //create new variable, while using $ to uppercase the first letter, and use .slice to bring the rest of the word in lowercase for both parts
  let theName = object.name.charAt(0).toUpperCase() + object.name.slice(1).toLowerCase();
  console.log(theName);

let theSpecies = object.species.charAt(0).toUpperCase() + object.species.slice(1).toLowerCase();
  console.log(theSpecies);
  //use $ to return the sentence

  return `${theName} is a ${theSpecies}`
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  //if the object has noises key and value of an array, return the array as a string separated by space
    //if no noises array, return there are no noises

//if noises is an array AND the array has atleast 1 thing in it
if (Array.isArray(object.noises) && object.noises.length > 0){
    //return everything in the array joined as a string
    //separated by a space
    return object.noises.join(" ");
    } else {
    //return "there are no noises" if not"
    return "there are no noises";
    }
  
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
return string.includes(word);
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
//name and object
  //add the name to the objects friends array
    //return the object
  //iterate though ekys in object
  for (let key in object){
    //check if object has friends property
    if (object.hasOwnProperty('friends')){
      //push the name into the friends key
      object[key].push(name);
      }
    }  
    //return the entire object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if (Object.keys(object).length > 0 && object.friends.includes(name)){
        return true;
      } else {
        return false;
      }
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let output = [];
    for (let i = 0; i < array.length; i++){
        //check which object names, are in the current object friends array
        
          if (array[i].name !== name && !array[i].friends.includes(name)){
         output.push(array[i].name);
            }
          }
        return output;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    object[key] = value;

  
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

    for (let i = 0; i < array.length; i++){

        if (object.hasOwnProperty(array[i])){
          delete object[array[i]];
         }
        
        }
        
      
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}