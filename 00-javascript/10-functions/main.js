// Functions

// Build-in functions
"String".toLowerCase();
Math.random();

// Function declaration syntax

function sum(num1, num2) {
    console.log(num1);
    console.log(num2);
    if (num2 === undefined) {
        return num1 + num1;
    }
    return num1 + num2;
}
console.log("sum(2,3)");
console.log(sum(2, 3));
console.log("sum(2)");
console.log(sum(2));

function getUserNameFromEmail(email) {
    return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("player1234@mail.com"));

// anonymous function
const getUserNameFromEmail2 = function (email) {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail2("player1234@mail.com"));

// arrow function
const getUserNameFromEmail3 = (email) => {
    return email.slice(0, email.indexOf("@"));
};
console.log(getUserNameFromEmail3("player1234@mail.com"));

const toProperCase = (stringValue) => {
    return stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase();
};
console.log(toProperCase("sTrInG"))
