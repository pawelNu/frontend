// JSON
// JavaScript Object Notation
// language independent

const myObj = {
    name: "Some name",
    hobbies: ["eat", "sleep", "repeat"],
    hello: function () {
        console.log("Hello");
    },
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj); // methods (functions) will be lost
console.log(sendJSON);
console.log(typeof sendJSON); // string
console.log(sendJSON.name); // undefined

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
console.log(receiveJSON.hobbies);
