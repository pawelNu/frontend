// Basic Types

let myName: string = "Dave";
console.log(typeof myName);
let meaningOfLife: number;
let isLoading: boolean;
let album: any;

myName = "John";
meaningOfLife = 42;
console.log(typeof meaningOfLife);
isLoading = true;
console.log(typeof isLoading);
album = 5150;
console.log(typeof album);

const sum = (a: number, b: number) => {
    return a + b;
};

const concat = (a: number, b: string) => {
    return a + b;
};

console.log(sum(1, 2));
console.log(concat(1, "two"));

let postId: string | number;
let isActive: number | boolean;

postId = "postId";
console.log("postId: " + postId);
postId = 123;
console.log("postId: " + postId);

let re: RegExp = /\w+/g;
