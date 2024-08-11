// Conditionals: If statement

// let customerIsBanned = true;
let customerIsBanned = false;
let soup = "soup";
// let soup;
let crackers = true;
let reply;

if (customerIsBanned) {
    reply = "No soup for you";
} else if (soup && crackers) {
    reply = `Here is your order ${soup} & crackers`;
} else {
    reply = `Sorry, we're out of soup`;
}
console.log(reply);

// Conditionals: Switch statement

switch ("2") {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

switch (2) {
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("No match");
}

// Conditionals: Ternary operator

// let soup2 = "soup2"
let soup2;
let response = soup2 ? "Yes" : "No";
console.log(response);

let testScore = 79;
let myGrade =
    testScore > 89 ? "A" : testScore > 79 ? "B" : testScore > 69 ? "C" : testScore > 59 ? "D" : "F";
console.log(`My test grade is a ${myGrade}`);
