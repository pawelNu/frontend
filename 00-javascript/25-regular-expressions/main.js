// Regular expressions
// https://regexr.com/

document.getElementById("phoneNum");
addEventListener("input", (e) => {
    const regex = /^\(?(d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
    const input = document.getElementById("phoneNum");
    const format = document.querySelector(".phoneFormat");
    const phone = input.value;
    const found = regex.test(phone);

    if (!found && phone.length) {
        input.classList.add("invalid");
        format.classList.add("block");
    } else {
        input.classList.remove("invalid")
        input.classList.remove("block")
    }
});
