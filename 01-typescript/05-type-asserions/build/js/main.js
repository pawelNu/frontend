"use strict";
// Type assertions
// convert to more or less specific
let a = "hello"; // let a: string
let b = a; // less specific // let b: Two
console.log(typeof b);
let c = a; // more specific  // let c: "hello"
let d = "world";
console.log(typeof d);
console.log(d);
let e = "world";
const addOrConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, "concat");
// Be careful! TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, "concat");
//10 as string
10;
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("#img");
const nextImg = document.getElementById("#img");
img.src;
myImg.src;
