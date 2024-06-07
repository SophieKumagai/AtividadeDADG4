// adicionando som
let audio = new Audio('../assets/batalha.mp3');
const circle = document.querySelector("#circle_obj")
const container = document.querySelector(".container")

window.addEventListener('load', () => {
    audio.play();
    const verif = localStorage.getItem("tutorial")
    if (verif == "entrou") {
        circle.remove()
        container.remove()
    } else {
        circle.classList.add("circle")
        circle.classList.add("circleGrow")
        setTimeout(function() {
            const div_tutorial = document.createElement("div")
            div_tutorial.id = "tutorial"
            div_tutorial.style.position = "absolute"
            div_tutorial.style.top = "auto"
            div_tutorial.style.left = "auto"
            div_tutorial.style.width = "100%"
            div_tutorial.style.height = "100%"
            div_tutorial.style.zIndex = "999"
        
            const iframe = document.createElement("iframe")
            iframe.style.position = "absolute"
            iframe.style.top = "32%"
            iframe.style.left = "auto"
            iframe.style.width = "100%"
            iframe.style.height = "100%"
            iframe.style.zIndex = "999"
            iframe.setAttribute("src", "../tutorial/index_tutorial.html")
        
            div_tutorial.appendChild(iframe)
            circle.appendChild(div_tutorial)
        }, 1800); // 1800 milissegundos
    }
})