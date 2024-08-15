// Errors
"use strict";

// variable = "Something"; // Uncaught ReferenceError: assignment to undeclared variable variable
// console.log(variable);

const variable = "Something";
console.log(variable);

// Object..create(); // Uncaught SyntaxError: missing name after . operator

const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (e) {
        console.log(e);
        console.warn(e);
        console.error(e);
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
        // console.table(e);
    }
};
makeError();

function customError(message) {
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}

const makeError2 = () => {
    try {
        throw new customError("This custom error");
    } catch (e) {
        console.log(e);
        console.warn(e);
        console.error(e);
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
        // console.table(e);
    }
};
makeError2();

const makeError3 = () => {
    try {
        throw new Error("This generic error");
    } catch (e) {
        console.log(e);
        console.warn(e);
        console.error(e);
        console.error(e.name);
        console.error(e.message);
        console.error(e.stack);
        // console.table(e);
    }
};
makeError3();

const makeError4 = () => {
    let i = 1;
    while (i <= 5) {
        try {
            if (i % 2 !== 0) {
                throw new Error(i + " - Odd number!");
            }
            console.log(i + " - Even number!")
        } catch (e) {
            console.error(e);
        } finally {
            console.log("...finally");
            i++;
        }
    }
};
makeError4();
