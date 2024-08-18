// Fetch API requires:
// Callbacks, Promises, Thenables, Async/Await

//// Callbacks

// function firstFunction(param, callback) {
//     // do stuff
//     callback();
// }

// // AKA "callback hell"

// firstFunction(param, function () {
//     // do stuff
//     secondFunction(param, function () {
//         // do stuff
//         thirdFunction(param, function () {});
//     });
// });

// Promises are the answer for this problem

//// Promises
// 3 states: Pending, Fulfilled, Rejected

// Fulfilled
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve("Yes! resolved the promise");
    } else {
        reject("No! rejected the promise");
    }
});

console.log(myPromise); // Promise { <state>: "fulfilled", <value>: "Yes! resolved the promise" }

//// Thenables

myPromise.then((value) => {
    console.log(value);
});

myPromise
    .then((value) => {
        return value + 1;
    })
    .then((newValue) => {
        console.log(newValue);
    });

// Example with error

// Rejected
const myPromiseWithError = new Promise((resolve, reject) => {
    const error = true;
    if (!error) {
        resolve("Yes! resolved the promise");
    } else {
        reject("No! rejected the promise");
    }
});

//// Thenables

// myPromiseWithError
//     .then((value) => {
//         return value + 1;
//     })
//     .then((newValue) => {
//         console.log(newValue);
//     });
// will result in:
// Uncaught (in promise) No! rejected the promise

console.log(myPromiseWithError); // Promise { <state>: "rejected", <reason>: "No! rejected the promise" }
myPromiseWithError
    .then((value) => {
        return value + 1;
    })
    .then((newValue) => {
        console.log(newValue);
    })
    .catch((e) => {
        console.error(e); // No! rejected the promise
    });

// Timeout

const myPromiseWithTimeout = new Promise((resolve) => {
    setTimeout(() => {
        resolve("myPromiseWithTimeout resolved");
    }, 3000);
});

myPromiseWithTimeout.then((value) => {
    console.log(value);
});

myPromise.then((value) => {
    console.log(value);
});

// Pending
const users = fetch("https://jsonplaceholder.typicode.com/users");
console.log(users); // Promise { <state>: "pending" }

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        // console.log(response);
        return response.json();
    })
    .then((data) => {
        // console.log(data)
        data.forEach((user) => {
            console.log(user);
        });
    });

// Thenables was replaced by Async/Await

//// Async/Await

const myUsers = {
    userList: [],
};

// async function myAsyncFunction() {}
// the same as
const myAsyncFunc = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    // console.log(jsonUserData);
    return jsonUserData;
};

const anotherAsyncFunc = async () => {
    const data = await myAsyncFunc();
    // console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList); // Array(10) [ {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…} ]
};

anotherAsyncFunc();
console.log(myUsers.userList); // Array [] length: 0

//// Example
// workflow function

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map((user) => {
        return user.email;
    });
    // console.log(userEmailArray);
    postToWebPage(userEmailArray);
};

const postToWebPage = (data) => {
    console.log(data);
};

getAllUserEmails();

//// Fetch
// 2nd parameter of Fetch

// TODO finish here
