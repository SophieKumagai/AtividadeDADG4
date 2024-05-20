const nameInp = document.querySelector('#nome')
const nameMes = document.querySelector('#mensagem')
const mensagem2 = document.getElementById("mensagem2")

nameInp.addEventListener('keydown', (event) => {
    if (nameInp.value != "" && event.key === "Enter") {
        nameMes.textContent = "Seja bem-vindo, " + nameInp.value + "!"
        mensagem2.textContent = "Clique em 'ENTRAR' para começar!"
        nameMes.classList.remove('invisivel')
        mensagem2.classList.remove('invisivel')

        nameMes.classList.add("flex")
        mensagem2.classList.add("flex")
    } else {
        nameMes.classList.add('invisivel')
        mensagem2.classList.add('invisivel')

        nameMes.classList.remove("flex")
        mensagem2.classList.remove("flex")
    }
})

