 // add the element to the beginning of the array without mutating the array
function addElementToBeginningOfArray(array, element) {
 moreArray = [element,...array];
  return moreArray;
}

// add element to the beginning of the array by mutating the array
function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  moreArray = [...array, element];
  return moreArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1);
  return array;
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1);
  return array;
}

// CHALLENGE: remove an element from the middle of the array/at a given index 
// and return a COPY of the original array, minus that element

function nonDestructivelyRemoveAtIndex(array, index) {
// using slice _and_ spread??
}

