// *******************array***********************//

const myArr= [0,1,2,3,4,5]; 
const myHeroes = ['thor', 'spiderman', 'ironman'];

const myArr2 = new Array(1,2,3,4); // it will create an array of 5 empty elements
// console.log(myArr[1]);

// console.log(typeof myArr); // object


// Array Methods

// myArr.push("6");
// myArr.push("7");
// myArr.pop(); // removes last element
// myArr.unshift(9); // adds element at the beginning
// myArr.shift(); // removes first element
// console.log(myArr.includes(9)); // returns true or false
// console.log(myArr.indexOf(9)); // returns index of element or -1 if not found

// const newArr = myArr.join() // converts array to string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr); // string


// slice and splice

console.log("A ",myArr);

const myn1 = myArr.slice(1,3); // returns a copy of a section of an array

console.log(myn1);
console.log("B ",myArr);

const myn2 = myArr.splice(1,3);
console.log("C ",myArr);
console.log(myn2);