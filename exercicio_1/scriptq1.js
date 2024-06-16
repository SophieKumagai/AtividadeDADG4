// adicionando som
let audio = new Audio('../assets/batalha.mp3');
let audio2 = new Audio('../assets/home.mp3');
const circle = document.querySelector("#circle_obj")
const container = document.querySelector("#circle")

window.addEventListener('load', () => {
    const verif = localStorage.getItem("tutorial")
    if (verif == "entrou") {
        setTimeout(function(){
            circle.classList.remove("invisivel")
            circle.classList.remove("circleGrow")
            circle.classList.add("circleShrink")
            setTimeout(function() {
                circle.classList.add("invisivel")
                container.classList.add("invisivel")
            }, 1800)
            fadeIn(audio, 2000)
        }, 100)
    } else {
        fadeIn(audio2, 2000)
        container.classList.remove("invisivel")

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

// Adiciona um ouvinte de eventos para mudanças no localStorage
window.addEventListener('storage', function(event) {
    if (event.storageArea === localStorage) {
        console.log('Uma mudança foi detectada no localStorage!');
        console.log('Chave:', event.key);
        console.log('Novo valor:', event.newValue);
        console.log('Antigo valor:', event.oldValue);
        fadeOut(audio2, 1800)
        this.setTimeout(function(){
            window.location.reload();
        }, 100)
    }
});

function fadeOut(audioElement, duration) {
    // Define o tamanho do passo de redução do volume
    const step = 0.01;

    // Calcula o intervalo de tempo entre cada ajuste de volume com base na duração desejada
    const interval = duration / (1 / step);

    // Inicia um intervalo que executa a função a cada 'interval' milissegundos
    const fade = setInterval(() => {
        // Verifica se o volume atual do elemento de áudio é maior que zero
        if (audioElement.volume > 0) {
            // Reduz gradualmente o volume do áudio pelo tamanho do passo
            audioElement.volume = Math.max(0, audioElement.volume - step);
        } else {
            // Quando o volume chega a zero ou menos, limpa o intervalo para parar a função de fade out
            clearInterval(fade);
            
            // Opcional: pausa o áudio quando o volume chega a zero
            audioElement.pause();
        }
    }, interval);
}

function fadeIn(audioElement, duration, targetVolume = 1.0) {
    // Define o volume inicial como 0 para começar o fade in
    audioElement.volume = 0;
    
    // Garante que o áudio está tocando
    audioElement.play();

    // Define o tamanho do passo de aumento do volume
    const step = 0.01;

    // Calcula o intervalo de tempo entre cada ajuste de volume com base na duração desejada e no volume alvo
    const interval = duration / (targetVolume / step);

    // Inicia um intervalo que executa a função a cada 'interval' milissegundos
    const fade = setInterval(() => {
        // Verifica se o volume atual do elemento de áudio é menor que o volume alvo
        if (audioElement.volume < targetVolume) {
            // Aumenta gradualmente o volume do áudio pelo tamanho do passo até o volume alvo
            audioElement.volume = Math.min(targetVolume, audioElement.volume + step);
        } else {
            // Quando o volume atinge o volume alvo, limpa o intervalo para parar a função de fade in
            clearInterval(fade);
        }
    }, interval);
}
