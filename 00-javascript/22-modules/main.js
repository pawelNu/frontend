// Modules

// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking } from "./guitars.js";

// console.log(playGuitar());
// // console.log(shredding());
// console.log(shred());
// console.log(plucking());

// import * as Guitars from "./guitars.js"

// // console.log(Guitars.playGuitar()); // Uncaught TypeError: Guitars.playGuitar is not a function
// do not use default if you do not have to
// console.log(Guitars.default());
// console.log(Guitars.shredding());
// console.log(Guitars.plucking());

import * as Guitars from "./guitars2.js";
import User from "./user.js";

console.log(Guitars.playGuitar());
console.log(Guitars.shredding());
console.log(Guitars.plucking());

const me = new User("email@email.com", "Random");
console.log(me);
console.log(me.greeting());
