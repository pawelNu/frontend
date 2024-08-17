// Web Storage API

// Not part of the DOM - refers to the Window API
// Available to JS via the global variable: window

// We do not have to type window. It is implied.

// window.alert("OK!");
// alert("OK 2!");

console.log(window.location);
console.log(location);

// window.localStorage;
// OR
// window.sessionStorage;

const myArray = ["eat", "sleep", "code"];

const myObject = {
    name: "Dave",
    hobbies: myArray,
    logName: function () {
        console.log(this.name);
    },
};

myObject.logName();

// session storage

sessionStorage.setItem("mySessionStoreObject", myObject);
// you can see object in browser -> dev tools -> application -> storage or storage tab -> session storage
const mySessionObjectData = sessionStorage.getItem("mySessionStoreObject");
console.log(mySessionObjectData); // [object Object]

sessionStorage.setItem("mySessionStoreObject2", JSON.stringify(myObject));
const mySessionObjectData2 = sessionStorage.getItem("mySessionStoreObject2");
console.log(mySessionObjectData2); // string {"name":"Dave","hobbies":["eat","sleep","code"]}
const mySessionObjectData3 = JSON.parse(sessionStorage.getItem("mySessionStoreObject2"));
console.log(mySessionObjectData3); // Object { name: "Dave", hobbies: (3) […] }

sessionStorage.setItem("mySessionStoreArray", myArray);
const mySessionArrayData = sessionStorage.getItem("mySessionStoreArray");
console.log(mySessionArrayData); // [object Object]
console.log(typeof mySessionArrayData);

sessionStorage.setItem("mySessionStoreArray2", JSON.stringify(myArray));
const mySessionArrayData2 = JSON.parse(sessionStorage.getItem("mySessionStoreArray2"));
console.log(mySessionArrayData2); // Array(3) [ "eat", "sleep", "code" ]
console.log(typeof mySessionArrayData2);

// sessionStorage.removeItem("mySessionStoreArray")
sessionStorage.clear();

// local storage

localStorage.setItem("myLocalStoreObject", myObject);
// you can see object in browser -> dev tools -> application -> storage or storage tab -> session storage
const myLocalObjectData = localStorage.getItem("myLocalStoreObject");
console.log(myLocalObjectData); // [object Object]

localStorage.setItem("myLocalStoreObject2", JSON.stringify(myObject));
const myLocalObjectData2 = localStorage.getItem("myLocalStoreObject2");
console.log(myLocalObjectData2); // string {"name":"Dave","hobbies":["eat","sleep","code"]}
const myLocalObjectData3 = JSON.parse(localStorage.getItem("myLocalStoreObject2"));
console.log(myLocalObjectData3); // Object { name: "Dave", hobbies: (3) […] }

localStorage.setItem("myLocalStoreArray", myArray);
const myLocalArrayData = localStorage.getItem("myLocalStoreArray");
console.log(myLocalArrayData); // [object Object]
console.log(typeof myLocalArrayData);

localStorage.setItem("myLocalStoreArray2", JSON.stringify(myArray));
const myLocalArrayData2 = JSON.parse(localStorage.getItem("myLocalStoreArray2"));
console.log(myLocalArrayData2); // Array(3) [ "eat", "sleep", "code" ]
console.log(typeof myLocalArrayData2);

const key = localStorage.key(0);
console.log(key);
console.log(localStorage.length);

// localStorage.removeItem("myLocalStoreArray")
localStorage.clear();
console.log(localStorage.length);
