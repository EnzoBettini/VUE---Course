let list = document.querySelector("ul");
let button = document.querySelector("button");
let input = document.getElementById("goal");

button.addEventListener("click", () => {
    let newHTML = input.value;

    list.innerHTML += `<li>${newHTML}</li>`;

    input.value = "";

});
