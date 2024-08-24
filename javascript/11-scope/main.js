// Scope
// var, let, const
// global variables are not recommended

// avoid using var
var x = 1;
// var don't throw error when redeclaring variable
var x = 2;
console.log(x);

// let y = 1;
// let y = 2; // throws error
// console.log(y)

let z = 1;
z = 2;
console.log(z);

// const a = 1;
// a = 2; // throws error
// console.log(a);

// global scope

var d = 1;
let f = 1;
const g = 1;

console.log("Global scope: " + d);
console.log("Global scope: " + f);
console.log("Global scope: " + g);

// local scope

{
    var d = 2;
    let f = 2;
    const g = 2;
    console.log("Local scope - block: " + d);
    console.log("Local scope - block: " + f);
    console.log("Local scope - block: " + g);
}

function myFunc() {
    var d = 3;
    let f = 3;
    const g = 3;
    console.log("Local scope - function: " + d);
    console.log("Local scope - function: " + f);
    console.log("Local scope - function: " + g);
    {
        var d = 4; // is function scope
        let f = 4;
        const g = 4;
        console.log("Local scope - function - block: " + d);
        console.log("Local scope - function - block: " + f);
        console.log("Local scope - function - block: " + g);
    }
}

myFunc();
