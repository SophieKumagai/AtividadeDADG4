// adicionando som
let audio = new Audio('../assets/batalha.mp3');
const circle = document.querySelector("#circle_obj")

window.addEventListener('load', () => {
    audio.play();
    circle.classList.add("circle")
})

setTimeout(function() {
    const div_tutorial = document.createElement("div")
    div_tutorial.id = "tutorial"
    circle.appendChild(div_tutorial)
}, 1800); // 5000 milissegundos = 5 segundos
