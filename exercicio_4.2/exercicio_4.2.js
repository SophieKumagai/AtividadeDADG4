// adicionando som
let audio = new Audio('../assets/batalha.mp3');


window.addEventListener('load', () => {
    audio.play();
})

const columns = document.querySelectorAll(".column");
const resultCollumn = document.querySelectorAll(".aBottom");
const resultText = document.querySelector("#returnText");
const rodape = document.querySelector("#rodape");
const progressBar = document.getElementById("bar");


const btnTip = document.getElementById("btnTip");
btnTip.addEventListener("click", () => {
  window.open("../saibaMais/index.html");
});


const btnSkip = document.getElementById("btnSkip");
btnSkip.addEventListener("click", () => {
  const confirmation = window.confirm("Você tem certeza que deseja pular o exercício?");
  if (confirmation) {
    window.open("../exercicio_5.1/exercicio_5.1.html", "_self");
  }
});




document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});
 
document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});
 
columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, e.clientY);
 
    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});
function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".alternativa:not(.dragging)");
  let result;
 
  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;
 
    if (posY >= boxCenterY) result = refer_card;
  }
 
  return result;
}
function getItemsOrder() {
  //Informação com cada coluna

  let orderInfo = '';
  resultCollumn.forEach((column) => {
    const cards = column.querySelectorAll(".alternativa");
    const order = [...cards].map(card => card.id).join(",");
    orderInfo += `${order}\n`;
  });
  if(verifyOrder(["alternativa1","alternativa2", "alternativa3","alternativa4", "alternativa5", "alternativa6"], orderInfo)){
  rodape.style.opacity = "0"; // Iniciar a transição de opacidade
  setTimeout(() => {
    rodape.innerHTML = `
            <div id="lineFooter"></div>
            <div class="botoes">
                <img id="circleSuccess" src="../assets/circleSuccess.png" alt="">
                <p id="textSuccess"><b id="h1Success">Boa!</b><br>Vamos para a próxima.</p>
                <div id="btnNext">Avançar</div>
            </div>
        `;

    const style = document.createElement("style");
    style.innerHTML = ` @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@keyframes fadeIn {
  from {
      opacity: 0;
  } to {
      opacity: 1;
  }
}
.fadeInText {
  /* Estilizando o texto dentro da box */
  color: #fff;
  text-align: center;
  align-content: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 110%;
  font-style: normal;
  animation: fadeIn 2s ease-out;
}

img {
  user-select: none; /* Para a maioria dos navegadores */
  -webkit-user-drag: none; /* Para navegadores baseados em WebKit */
  -moz-user-select: none; /* Para o Firefox */
  -webkit-user-select: none; /* Para o Safari */
  -ms-user-select: none; /* Para o Internet Explorer/Edge */
  pointer-events: none; /* Para impedir a interação com a imagem */
}


body {
background-color: #131f24;
user-select: none;
}
#prof {
margin: 320px 0 0 100px;
}

.progress {
display: flex;
justify-content: center;
}

#progressbar {
width: 800px;
height: 20px;
border: 3px solid #55646c;
border-radius: 50px;
}

#bar {
width: 50%;
height: 20px;
border-radius: 10px;
background-color: #6d5f6d;
}
#pokebola {
display: flex;
position: absolute;
justify-content: space-around;
margin: -15px 0 0 150px;
}

#textVida {
  /* Estilizando o texto */
  color: #fff;
  align-content: center;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-right: 15px;
}

.pokevida {
width: 50px;
}

.none {
display: none;
}

.logo {
display: flex;
justify-content: end;
}

.dialogBox {
display: flex;
}

#box {
/* Estilizando a caixa */
position: absolute;
width: 350px;
height: 100px;
border: 5px solid #55646c;
background-color: #1d292e;
border-radius: 15px;
top: 400px;
left: 12%;
}


.answerLines {
display: flex;
justify-content: center;
}

#line1 {
position: absolute;
top: 500px;
width: 450px;
border: 1px solid #55646c;
}

#line2 {
position: absolute;
top: 550px;
width: 550px;
border: 1px solid #55646c;
}

strong {
color: #92c255;
}

.return {
display: flex;
justify-content: end;
margin: 80px 20px 0 0;
}

#returnBox {
position: absolute;
width: 490px;
height: 580px;
background-color: #1d292e;
border: 5px solid #3c4a51;
border-top: none;
border-radius: 40px 40px 15px 15px;
}
#returnHead {
width: 490px;
height: 60px;
background-color: #807098;
border-radius: 15px;

/* Estilizando o texto */
color: #fff;
align-content: center;
box-sizing: border-box;
padding-left: 30px;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 150%;
font-style: normal;
}
#returnText {
text-align: center;
color: #f9f9f9;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 20px;
font-style: normal;
align-content: center;
text-align: center;
}

/* #returnHead:hover {
cursor: pointer;
} */

#lineFooter {
background-color: #37464f;
width: 100%;
height: 2px;
margin-bottom: 16px;
}


.botoes {
display: flex;
margin-top: 30px;
}

#btnVerify {
  margin: 0 auto;
  background-color: #6d5f6d;
  border: 2px solid #665b66;
  border-bottom: 8px solid #5F555F;
  border-radius: 20px;
  width: 188px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnVerify:hover {
  background-color: #7e727e;
  border-bottom: 8px solid #7e727e;
  padding-top: 5px;
  transition: 500ms;
  cursor: pointer;
}

#btnSkip {
  margin: 0 auto;
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
  border-radius: 20px;
  width: 188px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnSkip:hover {
  background-color: #1d292e;
  border: 5px solid #1d292e;
  border-bottom: 9px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  padding-top: 5px;

  cursor: pointer;
}

#btnTip {
margin: 0 auto;
width: 188px;
height: 65px;
border: 5px solid #131f24;

/* Estilizando o texto */
color: #55646C;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 150%;
font-style: normal;
align-content: center;
text-align: center;
}

#btnTip:hover {
background-color: #1d292e;
border: 5px solid #1d292e;
border-radius: 20px;
transition: 500ms;
cursor: pointer;
}

.alternativasDiv {
display: flex;
position: absolute;
top: 30%;
left: 34%;

}

.alternativa {
/* Estilizando as alternativa */
border: 5px solid #55646C;
border-bottom: 9px solid #48555B;
border-radius: 20px;
width: 250px;
height: 65px;

/* Estilizando o texto */
color: #fff;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 20px;
font-style: normal;
align-content: center;
text-align: center;
}

#alternativa1 {
margin: 0 20px 20px 0;
}

#alternativa4 {
margin: 19px 0;
}
.column{
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin: -70px 10px 10px 10px;
  background-color: #1d292e;
  min-width: 300px;
  border-radius: 20px;  
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
}


#alternativa1:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa2:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa3:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#rodape {
         width: 100%;
         height: 100%;
         background-color: #202F36;
         transition: opacity 1s ease; /* Adicionando a transição de opacidade */
         opacity: 1; /* Garantir que o rodapé comece visível */
     }
     
     
     #circleSuccess {
         width: 100px;
         height: 100px;
     }
     
     #h1Success {
         display: inline-block;
         color: #92C255;
         font-family: "Ubuntu", sans-serif;
         font-weight: 600;
         font-size: 35px;
         font-style: normal;
     }
     
     
     #textSuccess {
         color: #94A0A7;
         font-family: "Ubuntu", sans-serif;
         font-weight: 600;
         font-size: 25px;
         font-style: normal;
         align-content: start;
         justify-content: start;
         text-align: start;
         margin-right: 1100px;
  }

  #btnNext {
         background-color: #92C255;
         border: 2px solid #92C255;
         border-bottom: 8px solid #83A755;
         border-radius: 20px;
         width: 200px;
         height: 65px;
     
         /* Estilizando o texto */
         color: #fff;
         font-family: "Ubuntu", sans-serif;
         font-weight: 600;
         font-size: 160%;
         font-style: normal;
         align-content: center;
         text-align: center;
     }
     
     #btnNext:hover {
         background-color: #b9d98f;
         border-bottom: 8px solid #b9d98f;
         padding-top: 5px;
         transition: 500ms;
         cursor: pointer;
     }
`;
    document.head.appendChild(style);

    rodape.style.opacity = "1"; // Fazer o rodapé reaparecer
    const btAvancar = document.getElementById("btnNext");
    btAvancar.addEventListener("click", () => {
      window.open("../exercicio_5.1/exercicio_5.1.html", "_self");
    });

    alternativa1.removeEventListener("click", () => {});
    alternativa2.removeEventListener("click", () => {});
    alternativa3.removeEventListener("click", () => {});
    alternativa4.removeEventListener("click", () => {});
    progressBar.style.width = "62.5%";
  }, 1000); // Tempo para a transição de opacidade

  resultText.textContent = 
  `
  {
      nome: "Snorlax",
      tipo1: "Normal",
      tipo2: null,
      peso: 460.0,
      altura: 2.1
      },
      {
      nome: "Gyarados",
      tipo1: "Água",
      tipo2: "Voador",
      peso: "235,0 kg",
      altura: "6,5 m"
      },
      {
      nome: "Lapras",
      tipo1: "Água",
      tipo2: "Gelo",
      peso: "220,0 kg",
      altura: "2,5 m"
      }
      `;

      returnText.style.color = "#92c255";

} else {
  rodape.style.opacity = "0"; // Iniciar a transição de opacidade
  setTimeout(() => {
    rodape.innerHTML = `
      <footer id="rodape">
          <div id="lineFooter"></div>
          <div class="botoes">
              <img id="circleLoss" src="../assets/circleLoss.png" alt="">
              <p id="textLoss"><b id="h1Loss">Ah não...</b><br>Não foi dessa vez, tente novamente</p>
              <div id="btnNext">Tentar novamente</div>
          </div>
      </footer>
        `;
    const btnNext = document.getElementById("btnNext");
    const style = document.createElement("style");
    style.innerHTML = `@import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
@keyframes fadeIn {
  from {
      opacity: 0;
  } to {
      opacity: 1;
  }
}
.fadeInText {
  /* Estilizando o texto dentro da box */
  color: #fff;
  text-align: center;
  align-content: center;
  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-size: 110%;
  font-style: normal;
  animation: fadeIn 2s ease-out;
}

img {
  user-select: none; /* Para a maioria dos navegadores */
  -webkit-user-drag: none; /* Para navegadores baseados em WebKit */
  -moz-user-select: none; /* Para o Firefox */
  -webkit-user-select: none; /* Para o Safari */
  -ms-user-select: none; /* Para o Internet Explorer/Edge */
  pointer-events: none; /* Para impedir a interação com a imagem */
}


body {
background-color: #131f24;
user-select: none;
}
#prof {
margin: 320px 0 0 100px;
}

.progress {
display: flex;
justify-content: center;
}

#progressbar {
width: 800px;
height: 20px;
border: 3px solid #55646c;
border-radius: 50px;
}

#bar {
width: 50%;
height: 20px;
border-radius: 10px;
background-color: #6d5f6d;
}
#pokebola {
display: flex;
position: absolute;
justify-content: space-around;
margin: -15px 0 0 150px;
}

#textVida {
  /* Estilizando o texto */
  color: #fff;
  align-content: center;
  box-sizing: border-box;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-style: normal;
  margin-right: 15px;
}

.pokevida {
width: 50px;
}

.none {
display: none;
}

.logo {
display: flex;
justify-content: end;
}

.dialogBox {
display: flex;
}

#box {
/* Estilizando a caixa */
position: absolute;
width: 350px;
height: 100px;
border: 5px solid #55646c;
background-color: #1d292e;
border-radius: 15px;
top: 400px;
left: 12%;
}


.answerLines {
display: flex;
justify-content: center;
}

#line1 {
position: absolute;
top: 500px;
width: 450px;
border: 1px solid #55646c;
}

#line2 {
position: absolute;
top: 550px;
width: 550px;
border: 1px solid #55646c;
}

strong {
color: #92c255;
}

.return {
display: flex;
justify-content: end;
margin: 80px 20px 0 0;
}

#returnBox {
position: absolute;
width: 490px;
height: 580px;
background-color: #1d292e;
border: 5px solid #3c4a51;
border-top: none;
border-radius: 40px 40px 15px 15px;
}
#returnHead {
width: 490px;
height: 60px;
background-color: #807098;
border-radius: 15px;

/* Estilizando o texto */
color: #fff;
align-content: center;
box-sizing: border-box;
padding-left: 30px;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 150%;
font-style: normal;
}
#returnText {
text-align: center;
color: #f9f9f9;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 20px;
font-style: normal;
align-content: center;
text-align: center;
}

/* #returnHead:hover {
cursor: pointer;
} */

#lineFooter {
background-color: #37464f;
width: 100%;
height: 2px;
margin-bottom: 16px;
}


.botoes {
display: flex;
margin-top: 30px;
}

#btnVerify {
  margin: 0 auto;
  background-color: #6d5f6d;
  border: 2px solid #665b66;
  border-bottom: 8px solid #5F555F;
  border-radius: 20px;
  width: 188px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnVerify:hover {
  background-color: #7e727e;
  border-bottom: 8px solid #7e727e;
  padding-top: 5px;
  transition: 500ms;
  cursor: pointer;
}

#btnSkip {
  margin: 0 auto;
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
  border-radius: 20px;
  width: 188px;
  height: 65px;

  /* Estilizando o texto */
  color: #fff;
  font-family: "Ubuntu", sans-serif;
  font-weight: 500;
  font-size: 150%;
  font-style: normal;
  align-content: center;
  text-align: center;
}

#btnSkip:hover {
  background-color: #1d292e;
  border: 5px solid #1d292e;
  border-bottom: 9px solid #1d292e;
  border-radius: 20px;
  transition: 500ms;
  padding-top: 5px;

  cursor: pointer;
}

#btnTip {
margin: 0 auto;
width: 188px;
height: 65px;
border: 5px solid #131f24;

/* Estilizando o texto */
color: #55646C;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 150%;
font-style: normal;
align-content: center;
text-align: center;
}

#btnTip:hover {
background-color: #1d292e;
border: 5px solid #1d292e;
border-radius: 20px;
transition: 500ms;
cursor: pointer;
}

.alternativasDiv {
display: flex;
position: absolute;
top: 30%;
left: 34%;

}

.alternativa {
/* Estilizando as alternativa */
border: 5px solid #55646C;
border-bottom: 9px solid #48555B;
border-radius: 20px;
width: 250px;
height: 65px;

/* Estilizando o texto */
color: #fff;
font-family: "Ubuntu", sans-serif;
font-weight: 500;
font-size: 20px;
font-style: normal;
align-content: center;
text-align: center;
}

#alternativa1 {
margin: 0 20px 20px 0;
}

#alternativa4 {
margin: 19px 0;
}

.column{
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  margin: -70px 10px 10px 10px;
  background-color: #1d292e;
  min-width: 300px;
  border-radius: 20px;  
  border: 5px solid #55646C;
  border-bottom: 9px solid #48555B;
}


#alternativa1:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa2:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa3:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}
#alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

#rodape {
          width: 100%;
          height: 100%;
          background-color: #202F36;
      }


      #circleLoss {
          width: 100px;
          height: 100px;
      }

      #h1Loss {
          display: inline-block;
          color: #EE4035;
          font-family: "Ubuntu", sans-serif;
          font-weight: 600;
          font-size: 35px;
          font-style: normal;
      }


      #textLoss {
          color: #94A0A7;
          font-family: "Ubuntu", sans-serif;
          font-weight: 600;
          font-size: 25px;
          font-style: normal;
          align-content: start;
          justify-content: start;
          text-align: start;
          margin-right: 1100px;
      }
          #btnNext {
          background-color: #EE4035;
          border: 2px solid #EE4035;
          border-bottom: 8px solid #BA2C2C;
          border-radius: 20px;
          width: 250px;
          height: 65px;

          /* Estilizando o texto */
          color: #fff;
          font-family: "Ubuntu", sans-serif;
          font-weight: 600;
          font-size: 160%;
          font-style: normal;
          align-content: center;
          text-align: center;
      }

      #btnNext:hover {
          background-color: #e65b51;
          border-bottom: 8px solid #e65b51;
          padding-top: 5px;
          transition: 500ms;
          cursor: pointer;
      }


    `;
    document.head.appendChild(style);

    rodape.style.opacity = "1"; // Fazer o rodapé reaparecer

    returnText.innerText = "erro";
    returnText.style.color = "#EE4035";

    btnNext.addEventListener("click", () => {
      window.open("../exercicio_4.2/exercicio_4.2.html", "_self");
    });
  }, 1000); // Tempo para a transição de opacidade
}
}
function verifyOrder(value, order){
  let orderList = order.split(',');
  for(let i = 0; i < value.length-1; i++){
    if(value[i] != orderList[i]){
      return false;
    }
  }
  return true;
}