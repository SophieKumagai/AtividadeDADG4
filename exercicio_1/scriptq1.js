// adicionando som

let audio = new Audio('../assets/batalha.mp3');
window.onloadstart(() => {
    audio.setVolume(0.5)
    audio.play();
})