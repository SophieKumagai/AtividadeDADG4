let cont = 0
let resposta = ""
const txt1 = document.getElementById("parte1")
const txt2 = document.getElementById("parte2")
const txt3 = document.getElementById("parte3")
const txt4 = document.getElementById("parte4")
const txt5 = document.getElementById("parte5")
const txt6 = document.getElementById("parte6")
const bt_avancar = document.querySelector("#avancar")
const bt_voltar = document.querySelector("#voltar")
const valor = document.getElementById("valor")
const nome = localStorage.getItem("name")


txt1.innerHTML = "<p id='parte1'> Olá, Treinador Pokémon " + nome.toUpperCase() +"! Recentemente meu time de pesquisa decidiu que vamos criar uma nova PC Box baseada em MongoDB. <br><br> Primeiramente, vamos aprender a buscar registros em sua coleção armazenada na PC Box, ou seja, nosso banco de dados, semelhante à forma como você consulta informações sobre os pokémon. <br><br> Assim como a PC Box armazena uma lista com todos os pokémon capturados e suas características, em MongoDB, você armazena documentos em coleções. Por exemplo, você pode ter uma coleção chamada \"pokemons\" para guardar as informações sobre todos os seus pokémon, nesse caso cada pokémon é um documento.</p>";
txt3.innerHTML = "<p id='parte3'> Parabéns, Treinador Pokémon " + nome.toUpperCase() +"! Você inseriu o Pikachu! <br><br> Ah, não! Um Pidgey selvagem! Vamos procurar o nosso Pidgey para conseguir derrotá-lo com o comando 'FindOne': <br> <strong>db.pokemons.findOne({nome: \"Pidgey\"})</strong></p>";
txt6.innerHTML = "<p id='parte6'> Pronto, Treinador Pokémom " + nome.toUpperCase() +"! Agora você sabe como usar consultas em MongoDB para encontrar informações sobre seus pokémons, assim como faz com sua PC box! Boa sorte em suas buscas!</p>";

function verificar() {
    if (cont == 0) {
        txt1.classList.remove("invisivel")
        txt2.classList.add("invisivel")

        txt1.classList.add("fadeInText")
        txt2.classList.remove("fadeInText")

        bt_voltar.classList.add('desabilitado')
    } else if (cont == 1) {
        txt1.classList.add("invisivel")
        txt2.classList.remove("invisivel")

        txt2.classList.add("fadeInText")
        txt1.classList.remove("fadeInText")

        valor.classList.add("invisivel")

        bt_voltar.classList.remove('desabilitado')
    } else if (cont == 3) {
        txt2.classList.add("invisivel")
        valor.classList.remove("invisivel")
    } else if (cont == 4) {
        resposta = valor.value
        txt3.classList.add("invisivel")
        valor.classList.remove("invisivel")
    } else if (cont == 5) {
        resposta = resposta.replace(/\s+/g, "")
        console.log(resposta)
        if (resposta.toLowerCase() == "db.pokemons.insertone({nome:\"pikachu\",tipo1:\"eletrico\",tipo2:\"nenhum\",peso:6.0,altura:0.4,nivel:2})") {
            valor.classList.add("invisivel")
            txt3.classList.remove("invisivel")
            txt3.classList.add("fadeInText")
        } else {
            cont -= 1
            window.alert("Poxa, parece que algo deu errado. Tente novamente!")
        }
    } else if (cont == 6) {
        txt3.classList.add("invisivel")
        valor.value = ""
        valor.classList.remove("invisivel")
    } else if (cont == 7) {
        resposta = valor.value
        txt4.classList.add("invisivel")
        valor.classList.remove("invisivel")
    } else if (cont == 8) {
        resposta = resposta.replace(/\s+/g, "")
        if (resposta.toLowerCase() == "db.pokemons.findone({nome:\"pidgey\"})") {
            valor.classList.add("invisivel")
            txt4.classList.remove("invisivel")
            txt4.classList.add("fadeInText")
        } else {
            cont -= 1
            window.alert("Poxa, parece que algo deu errado. Tente novamente!")
        }
    } else if (cont == 9) {
        txt4.classList.add("invisivel")
        valor.value = ""
        valor.classList.remove("invisivel")
    } else if (cont == 10) {
        resposta = valor.value
        txt5.classList.add("invisivel")
        valor.classList.remove("invisivel")
    } else if (cont == 11) {
        resposta = resposta.replace(/\s+/g, "")
        if (resposta.toLowerCase() == "db.pokemons.deleteone({nome:\"torchic\"})") {
            valor.classList.add("invisivel")
            txt5.classList.remove("invisivel")
            txt5.classList.add("fadeInText")
        } else {
            cont -= 1
            window.alert("Poxa, parece que algo deu errado. Tente novamente!")
        }
    } else if (cont == 12) {
        txt5.classList.add("invisivel")
        valor.value = ""
        valor.classList.remove("invisivel")
    } else if (cont == 13) {
        resposta = valor.value
        txt6.classList.add("invisivel")
        valor.classList.remove("invisivel")
        bt_avancar.textContent = "Avançar"
    } else if (cont == 14) {
        resposta = resposta.replace(/\s+/g, "")
        if (resposta.toLowerCase() == "db.pokemons.updateone({nome:\"pidgey\"},{$set:{nome:\"pidgeotto\",nivel:18}})") {
            valor.classList.add("invisivel")
            txt6.classList.remove("invisivel")
            txt6.classList.add("fadeInText")
        } else {
            cont -= 1
            window.alert("Poxa, parece que algo deu errado. Tente novamente!")
        }
        bt_avancar.textContent = "Concluir"
    } else if (cont ==  15) {
        window.alert("Parabéns, você concluiu o tutorial!")
        localStorage.setItem("tutorial", "entrou")
        window.open("../exercicio_1/indexq1.html", "_self")
    }
}

function voltar() {
    cont -= 1
    verificar()
}

function avancar() {
    cont += 1
    verificar()
}

bt_avancar.addEventListener("click", (e) => {
    console.log("avancar");
    console.log(e.target);
    avancar()
})

bt_voltar.addEventListener("click", (e) => {
    console.log("voltar");
    console.log(e.target);
    voltar()
})