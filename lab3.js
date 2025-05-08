let stopButton = document.getElementById("stopButton");
let slowButton = document.getElementById("slowButton");
let goButton = document.getElementById("goButton");

let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight   = document.getElementById("goLight");

function singel() {
    stopLight.style.backgroundColor = "#111";
    slowLight.style.backgroundColor = "#111";
    goLight.style.backgroundColor = "#111";
}

stopButton.addEventListener("click", () => {
    singel();
    stopLight.style.backgroundColor = "red";
});

slowButton.addEventListener("click", () => {
    singel();
    slowLight.style.backgroundColor = "orange";
});

goButton.addEventListener("click", () => {
    singel();
    goLight.style.backgroundColor = "green";
});