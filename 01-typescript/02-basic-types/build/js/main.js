"use strict";
// Basic Types
let myName = "Dave";
console.log(typeof myName);
let meaningOfLife;
let isLoading;
let album;
myName = "John";
meaningOfLife = 42;
console.log(typeof meaningOfLife);
isLoading = true;
console.log(typeof isLoading);
album = 5150;
console.log(typeof album);
const sum = (a, b) => {
    return a + b;
};
const concat = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));
console.log(concat(1, "two"));
let postId;
let isActive;
postId = "postId";
console.log("postId: " + postId);
postId = 123;
console.log("postId: " + postId);
let re = /\w+/g;
