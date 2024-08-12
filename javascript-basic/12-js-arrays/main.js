// Arrays

const myArray = [];
console.log(myArray);

myArray[0] = "string";
myArray[1] = 1000;
myArray[2] = false;

console.log(myArray);
console.log(myArray.length);
console.log(myArray[myArray.length - 1]);
console.log(myArray[1]);

myArray.push("school"); // add to the end
console.log(myArray);

myArray.pop(); // removes last element and returns it
const lastItem = myArray.pop();
console.log(lastItem);
console.log(myArray);

myArray.unshift("firstItem");
console.log(myArray);

const firstItem = myArray.shift(); // removes first element and returns it
console.log(firstItem);
console.log(myArray);

myArray.push("test");
console.log(myArray);
delete myArray[1];
console.log(myArray); // Array(3) [ "string", <1 empty slot>, "test" ]
console.log(myArray[1]); // undefined

const myArray2 = [];
myArray2.push("string");
myArray2.push(1000);
myArray2.push("test");
myArray2.splice(1, 1); // use splice instead of delete
console.log("myArray2");
console.log(myArray2); // Array [ "string", "test" ]
myArray2.splice(1, 1, "replaced"); // use to replace
console.log(myArray2); // [ "string", "replaced" ]

const myArray3 = ["A", "B", "C", "D", "E", "F"];
console.log(myArray3);
const newArray = myArray3.slice(2);
const newArray2 = myArray3.slice(2, 5);
console.log(newArray);
console.log(newArray2);

myArray3.reverse();
console.log(myArray3);

const newString = myArray3.join();
console.log(newString);

const newArray3 = newString.split(",");
console.log(newArray3);

const myArrayA = [1, 2, 3];
const myArrayB = [4, 5, 6];
const myConcatArray = myArrayA.concat(myArrayB);
console.log(myConcatArray); // Array(6) [ 1, 2, 3, 4, 5, 6 ]

// spread operator ...
// works like concat
const myArray11 = [1, 2, 3];
const myArray22 = [4, 5, 6];
const myArray33 = [7, 8, 9];
const newArray112233 = [...myArray11, ...myArray22, ...myArray33];
console.log(newArray112233); // Array(9) [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// creating nested array
const myArray111 = [1, 2, 3];
const myArray222 = [4, 5, 6];
const myArray333 = [7, 8, 9];
const newArray123 = [myArray111, myArray222, myArray333];
console.log(newArray123);
// Array(3) [ (3) […], (3) […], (3) […] ]
// 0: Array(3) [ 1, 2, 3 ]
// 1: Array(3) [ 4, 5, 6 ]
// 2: Array(3) [ 7, 8, 9 ]
// length: 3

const multiDimensionalArray = [myArray111, myArray222, myArray333];
console.log(multiDimensionalArray);
// get 9
console.log(multiDimensionalArray[2][2]); // 9
