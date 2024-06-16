const nameInp = document.querySelector("#nome");
const nameMes = document.querySelector("#mensagem");
const mensagem2 = document.querySelector("#mensagem2");
const bt_entrar = document.querySelector("#botao_entrar");
let audio = new Audio("../assets/home.mp3");

// adicionando som
window.onload = function () {
  var audio = document.getElementById("som");
  audio.play().catch(function (error) {
    console.log("Reprodução automática falhou:", error);
  });
};

nameInp.addEventListener("keydown", (event) => {
  // verificando se digitou o nome e se pressionou a tecla ENTER
  if (nameInp.value != "" && event.key === "Enter") {
    // setando as mensagens de boas-vindas
    nameMes.textContent = "Seja bem-vindo, " + nameInp.value + "!";
    mensagem2.textContent = "Clique em 'ENTRAR' para começar!";

    // removendo e adicionando classes
    nameMes.classList.remove("invisivel");
    mensagem2.classList.remove("invisivel");

    nameMes.classList.add("flex");
    mensagem2.classList.add("flex");

    // guardando o nome no localStorage
    localStorage.setItem("name", nameInp.value);
  } else {
    // removendo e adicionando classes
    nameMes.classList.add("invisivel");
    mensagem2.classList.add("invisivel");

    nameMes.classList.remove("flex");
    mensagem2.classList.remove("flex");
  }
});

// só deixar a pessoa ir para a próxima página caso tenha pressionado o ENTER
bt_entrar.addEventListener("click", () => {
  if (nameMes.classList.contains("invisivel")) {
    window.alert("Por favor, adicione o nome e pressione ENTER para salvá-lo!");
  } else {
    // abrir nova página html
    audio.pause();
    window.open("../exercicio_1/indexq1.html", "_self");
  }
});

// adicionando música na home
window.addEventListener("load", () => {
  audio.play();
});
