// 1
const increment = element => { return element++; }
const double = element => { return element * 2; }
const square = element => { return Math.pow(element, 2) }

const myMap = (array, callback) => {
    let arr = [];
    for (var index in array) {
        //arr.push(callback(array[index]));
        arr = [...arr, callback(array[index])]
    }
    return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log("Ex1: " + myMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console
console.log("Ex1: " + myMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
console.log("Ex1: " + myMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]
console.log();

// 2

/*
// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.
var filter = function(____, ____) {
  var filteredArray = [];
  for (var ____ = ____; ____ < ____.____; ____++) {
    var ____ = ____[____];
    if (____(____)) {
      filteredArray.push(____);
    }
  }
  return filteredArray;
};

Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )
*/
const isOdd = number => { return (number % 2 === 1) ? true : false }
const isEven = number => { return (number % 2 === 0) ? true : false }
const isDivBy3 = number => { return (number % 3 === 0) ? true : false }
const isSqrt = number => { return (Math.sqrt(number) % 1 === 0) ? true : false }
const isDivBy2And3 = number => { return (number % 2 === 0 && number % 3 === 0) ? true : false }


const filter = function (array, callback) {
    let filteredArray = [];
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (callback(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
};
let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Ex2: " + filter(newArray, isOdd));
console.log("Ex2: " + filter(newArray, isEven));
console.log("Ex2: " + filter(newArray, isDivBy3));
console.log("Ex2: " + filter(newArray, isSqrt));
console.log("Ex2: " + filter(newArray, isDivBy2And3));
console.log();

// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
    - an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

const firstObject = {
    value: "success"
}
const secondObject = {
    value: "error"
}

const successFunction = () => { return 'The value of the status key is "success"' }
const errorFunction = () => { return 'The value of the status key is "error"' }

const multipleCallbacks = (object, successFunc, errorFunc) => {
    let value = Object.values(object).join('');
    if(value === "success"){
        return successFunc;
    }
    return errorFunc;
}

console.log("Ex3: " + multipleCallbacks(firstObject,successFunction(),errorFunction()));
console.log("Ex3: " + multipleCallbacks(secondObject,successFunction(),errorFunction()));