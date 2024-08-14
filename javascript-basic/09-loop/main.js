// Loops

// while loop

let myNumber = 1;
while (myNumber <= 50) {
    console.log(myNumber);
    // myNumber++;
    myNumber += 5;
}

// it will do nothing
let myNumber2 = 50;
while (myNumber2 <= 50) {
    console.log(myNumber2);
    myNumber2 += 5;
}

// it will do once
let myNumber3 = 50;
do {
    console.log(myNumber3);
    myNumber3 += 5;
} while (myNumber3 < 50);

let stringVal = "abcd";
let counter = 0;
let myLetter;
while (true) {
    myLetter = stringVal[counter];
    console.log(myLetter);
    if (myLetter === "c") break;
    counter++;
}

console.log("tutaj");
let stringVal3 = "abcd";
let counter3 = 0;
let myLetter3;
while (counter3 <= 3) {
    myLetter3 = stringVal3[counter3];
    console.log(myLetter3);
    if (counter3 === 1) {
        counter3 += 2;
        continue;
    }
    // if above will cause to skip if below
    if (myLetter3 === "c") break;
    counter3++;
}
console.log("tutaj");

// for loop

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

for (let i = 0; i <= 5; ) {
    console.log(i);
    i++;
}

let i = 1;
for (; i <= 5; ) {
    console.log(i);
    i++;
}

let stringValue = "abcd";
for (let i = 0; i <= stringValue.length - 1; i++) {
    console.log(stringValue.charAt(i));
}
