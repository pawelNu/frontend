// User input

// alert("Hello")

// let msg = "Ok === True" + "\n" + "Cancel === False"
// let myBoolean = confirm(msg)
// console.log(myBoolean)

let msg = "Enter something";
let stringValue = prompt(msg);
console.log(typeof stringValue);
if (stringValue) {
    console.log(stringValue.trim());
} else {
    console.log("You did't enter anything");
}
