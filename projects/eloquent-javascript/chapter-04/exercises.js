////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = 1) {
  let output = [];
  if (start === end){
    return output;
  } else if (start < end && step < 0){
    return output;
  } else if (start < end){
    for (let i = start; i <= end; i += step){
      output.push(i);
    }
  } else if (start > end){
    for (let i = start; i >= end; i += step){
      output.push(i);
      }
    }
return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let output = [];

  for (let i = array.length - 1; i >= 0; i--){
      output.push(array[i]);
    }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {

  for(let i = 0; i < array.length; i++) {
    array.splice(i,0, array.pop())
  }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
let list = null;
  for (let i = array.length - 1; i >= 0; i--){
    list = { value: array[i], rest: list}
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
let output = [];
while (list !== null){
    output.push(list.value);
    list = list.rest;
  }
  return output;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(ele, list) {
  return { value: ele, rest: list}
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, num) {
  if (list === null){
    return undefined;
  } else if(num === 0){
    return list.value;
  } else{
    return nth(list.rest, num - 1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  
if (val1 === val2){
  return true;
  } if (val1 === null || typeof val1 !== 'object' || val2 === null || typeof val2 !== 'object'){
    return false;
  } 
const key1 = Object.keys(val1);
const key2 = Object.keys(val2);

if (key1.length !== key2.length){
  return false;
} 
for (let key of key1){
  if (!key2.includes(key) || !deepEqual(val1[key], val2[key])){
    return false;
  }
}
return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
