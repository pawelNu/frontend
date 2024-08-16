// Event Listeners

const view1 = document.getElementById("view1");

const view2 = document.querySelector("#view2");
const div = view2.querySelector("div");
const h2 = div.querySelector("h2");
const button1 = div.querySelector("#button1");
const button2 = div.querySelector("#button2");
// console.log(button1)
// console.log(button2)

view1.style.display = "none";
view2.style.display = "flex";

// syntax: addEventListener(event, function, useCapture)

const doSomething = () => {
    alert("doing something");
};

button1.addEventListener("click", doSomething, false);
button1.removeEventListener("click", doSomething, false);

button1.addEventListener("click", (event) => {
    console.log(event.target);
    console.log(event.target.textContent);
    event.target.textContent = "Clicked";
});

button2.addEventListener("click", function (event) {
    console.log(event.target);
    console.log(event.target.textContent);
    event.target.textContent = "Clicked2";
});

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete") {
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    view2.addEventListener(
        "click",
        (event) => {
            // view2.classList.add("purple");
            // view2.classList.remove("darkblue");

            view2.classList.toggle("purple");
            view2.classList.toggle("darkblue");

            // view2.style.backgroundColor = "purple";
            // event.target.style.backgroundColor = "purple";
        },
        false
    );

    div.addEventListener(
        "click",
        (event) => {
            // div.style.backgroundColor = "blue";
            event.target.style.backgroundColor = "blue";
        },
        false
    );

    h2.addEventListener(
        "click",
        (event) => {
            // event.stopPropagation();
            event.target.textContent = "Clicked";
        },
        false
    );

    const nav = document.querySelector("nav");
    nav.addEventListener("mouseover", (e) => {
        e.target.classList.add("height100");
    });
    nav.addEventListener("mouseout", (e) => {
        e.target.classList.remove("height100");
    });
};

const view3 = document.getElementById("view3");
view1.style.display = "none";
view2.style.display = "none";
view3.style.display = "flex";

const myForm = view3.querySelector("#myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("submit event");
});
