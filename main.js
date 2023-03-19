let btn = document.getElementById("increment");
let btn1 = document.getElementById("decrement");
let counter = document.getElementById("output");

let card1 = document.querySelector(".card1");
card1.value;

btn.addEventListener("click", function() {
    counter.value = Number(counter.value) +1;
    card1.style.opacity = "1";
    card1.style.transition = "all 1s";
});

btn1.addEventListener("click", function() {
    if (counter.value > 0) {
        counter.value = Number(counter.value) -1;
        card1.style.opacity = "0";
    }
});