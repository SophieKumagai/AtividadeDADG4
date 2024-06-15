// função para mostrar a lista de conteúdos
function abrirLista(id) {
    const listaConteudo = document.querySelector("#"+id)
    listaConteudo.classList.toggle("invisivel")
}

const cardGeral = document.getElementById("geral")
cardGeral.addEventListener("click", () => {
    abrirLista("conteudo-geral")
})

const cardConfig = document.getElementById("config")
cardConfig.addEventListener("click", () => {
    abrirLista("conteudo-config")
})

const cardComandos = document.getElementById("comandos")
cardComandos.addEventListener("click", () => {
    abrirLista("conteudo-comandos")
})

const cardConceitos = document.getElementById("conceitos")
cardConceitos.addEventListener("click", () => {
    abrirLista("conteudo-conceitos")
})

const voltar = document.getElementById("voltar")
voltar.addEventListener("click", () => {
    window.open("../exercicio_1/indexq1.html", "_self")
})

const pesquisa = document.getElementById("pesquisa")

pesquisa.addEventListener("keyup", () => {
    achar(pesquisa.value)
})

function achar(valor) {
    let cont = 0
    const cards = document.querySelectorAll(".card")
    const texto = document.getElementById("nenhum")
    for (let i = 0; i < cards.length; i++) {
        console.log(cards[i].textContent.toLowerCase().substring(0, valor.length));
        console.log(valor.toLowerCase());
        if (cards[i].textContent.toLowerCase().substring(0, valor.length) == valor.toLowerCase()) {
            if (cards[i].classList.contains("invisivel")) {
                cards[i].classList.remove("invisivel")
            }
        } else {
            cards[i].classList.add("invisivel")
        }

        if (cards[i].classList.contains("invisivel")) {
            cont++
        }
    }

    if (cont == cards.length) {
        texto.classList.remove("invisivel")
    } else {
        texto.classList.add("invisivel")
    }
}

