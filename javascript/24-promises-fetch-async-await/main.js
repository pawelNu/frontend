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
// 2nd parameter of Fetch is a object

const getDadJokeJson = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json",
        },
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);
};

const getDadJokeText = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "text/plain",
        },
    });
    const textJokeData = await response.text();
    console.log(textJokeData);
};

getDadJokeJson();
getDadJokeText();

const jokeObject = {
    id: "G6pWSvzAljb",
    joke: "Animal Fact #25: Most bobcats are not named bob.",
    status: 200,
};

const postData = async (data) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse.headers);
};

postData(jokeObject);

const requestJoke = async (category) => {
    const response = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
    console.log(jsonResponse.value);
};

[
    "animal",
    "career",
    "celebrity",
    "dev",
    "explicit",
    "fashion",
    "food",
    "history",
    "money",
    "movie",
    "music",
    "political",
    "religion",
    "science",
    "sport",
    "travel",
];

requestJoke("animal");

//// abstract into functions

const getDataFromForm = () => {
    const requestObject = {
        page: 0,
        limit: 10,
        term: "did",
        // it works also with arrays
    };
    console.log(requestObject);
    return requestObject;
};

const buildRequestUrl = (requestData) => {
    const url = `https://icanhazdadjoke.com/search?page=${requestData.page}&limit=${requestData.limit}&term=${requestData.term}`;
    console.log(url);
    return url;
};

const getHeaders = {
    method: "GET",
    headers: {
        Accept: "application/json",
    },
};

const getRequestJoke = async (url) => {
    const response = await fetch(url, getHeaders);
    const jsonResponse = await response.json();
    // console.log(jsonResponse);
    const jokeArray = jsonResponse.results.map(result => result.joke);
    // console.log(jokeArray);
    postJokeToPage(jokeArray);
};

const postJokeToPage = (jokes) => {
    jokes.forEach((joke) => {
        console.log(joke)
    });
};

// procedural "workflow function"

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await getRequestJoke(requestUrl);
    console.log("finished!");
};

processJokeRequest();
