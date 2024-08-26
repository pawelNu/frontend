"use strict";
//// Arrays and Objects
let stringArr = ["one", "hey", "Dave"]; // let stringArr: string[]
let guitars = ["Strat", "Les Paul", 5150]; // let guitars: (string | number)[]
let mixedData = ["EVH", 1984, true]; // let mixedData: (string | number | boolean)[]
// stringArr[0] = 42; // Type 'number' is not assignable to type 'string'.
stringArr[0] = "John";
// stringArr.push(42); // Argument of type 'number' is not assignable to parameter of type 'string'
stringArr.push("hey");
// mix type arrays
guitars[0] = 1984;
guitars.unshift("Jim");
let test = []; // let test: any[]
let bands = []; // let bands: string[]
bands.push("Van Halen");
// Tuple
let myTuple = ["Dave", 42, true];
console.log(typeof myTuple);
let mixed = ["John", 1, false];
// myTuple = mixed; // Type '(string | number | boolean)[]' is not assignable to type '[string, number, boolean]'. Target requires 3 element(s) but source may have fewer.
// myTuple[1] = "42"; // Type 'number' is not assignable to type 'string'.
myTuple[1] = 42;
//// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
// exampleObj.prop1 = 12; // Type 'number' is not assignable to type 'string'.
exampleObj.prop1 = "John";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "OU812"],
};
let jp = {
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
    return "Hello!";
};
console.log(greetGuitarist(evh));
console.log(greetGuitarist(jp));
// Enums
// "Unlike most TypeScript features, Enums are not a type-level addition to JavaScript but something added to the language and runtime."
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
