// Numbers

const myNumber = 42;
const myFloat = 42.0;
const myFloat2 = 42.01;
const myString = "42";

// JS considers integers and floats as number data type

console.log(myNumber);
console.log(myFloat);
console.log(myFloat2);
console.log(myString);

console.log(myNumber === myFloat);
console.log(myNumber === myFloat2);
console.log(myNumber === myString);

console.log(myString + 3);
console.log(Number(myString) + 3);

console.log(myNumber === Number(myString));

console.log(Number("myString")); // NaN not a number
console.log(Number(undefined)); // NaN not a number

console.log(Number(true)); // 1
console.log(Number(false)); // 0

// Methods

console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myFloat2));
console.log(Number.isInteger(myString));

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat("myString"));
console.log(Number.parseFloat("4.12abc"));
console.log(Number.parseFloat("4.sd12abc"));
console.log(Number.parseFloat("s4sf.sd12abc"));

console.log((4.1234).toFixed(2)); // returns string data

console.log(Number.parseInt(4.1234));
console.log(Number.parseInt("4sdd.1234"));

console.log(typeof (4.1323).toString());
console.log(typeof Number.parseFloat("4.1323"));

console.log(parseFloat("2.33333").toFixed(2).toString());

console.log(Number.isNaN("sdfsd")); // check also if value is number data type that is why returns false
console.log(isNaN("sdfsd")); // returns true
