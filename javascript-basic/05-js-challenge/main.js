// Write code that will return a random letter from your name

const myName = "Name";

let randomLetterIndex = Math.floor(Math.random() * myName.length);

let randomLetter = myName.charAt(randomLetterIndex);

console.log(randomLetter);
