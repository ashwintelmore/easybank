const header = document.querySelector(".header");
const body = document.querySelector("body");
const btnhamburger = document.querySelector("#btnhamburger");
const overlay = document.querySelector(".overlay");
const fadeElements = document.querySelectorAll(".fade-mode");

console.log(btnhamburger);

btnhamburger.addEventListener("click", () => {


    if (header.classList.contains("open")) {

        body.classList.remove("no-scroll");
        fadeElements.forEach((e) => {
            e.classList.remove("fade-in");
            e.classList.add("fade-out");
        })

        header.classList.remove("open");
    } else {
        body.classList.add("no-scroll")
        fadeElements.forEach((e) => {
            e.classList.remove("fade-out");
            e.classList.add("fade-in");
        })
        header.classList.add("open");
    }

})