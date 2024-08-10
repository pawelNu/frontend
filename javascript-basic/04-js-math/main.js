// Math methods and properties

const pi = Math.PI;

console.log(pi);
console.log(Math.trunc(pi));
console.log(Math.round(pi));
console.log(Math.round(3.4));
console.log(Math.round(3.5));
console.log(Math.ceil(3.5));
console.log(Math.floor(3.5));

console.log(Math.pow(2, 2));
console.log(Math.pow(5, 2));

console.log(Math.min(1, 23, 4));
console.log(Math.min(0.1, 23, 4));

console.log(Math.max(1, 23, 4));
console.log(Math.max(1, 23.1, 4));

console.log(Math.random());
// always from 0 to 1
console.log(Math.random());
console.log(Math.random());

// random number from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
// don't use ceil, because Math.random generates number from 0 to 1, and it is small changes generating 0
