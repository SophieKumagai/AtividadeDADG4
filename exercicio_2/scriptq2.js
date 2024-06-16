const btnVerify = document.getElementById("btnVerify");
const progressBar = document.getElementById("bar");

const alternativa1 = document.getElementById("alternativa1");
const alternativa1Selected = document.getElementById("alternativa1Selected");

const alternativa2 = document.getElementById("alternativa2");
const alternativa2Selected = document.getElementById("alternativa2Selected");

const alternativa3 = document.getElementById("alternativa3");
const alternativa3Selected = document.getElementById("alternativa3Selected");

const alternativa4 = document.getElementById("alternativa4");
const alternativa4Selected = document.getElementById("alternativa4Selected");
const returnText = document.getElementById("returnText");

const btnTip = document.getElementById("btnTip");
btnTip.addEventListener("click", () => {
  window.open("../saibaMais/index.html");
});

const btnSkip = document.getElementById("btnSkip");
btnSkip.addEventListener("click", () => {
  const confirmation = window.confirm("Você tem certeza que deseja pular o exercício?");
  if (confirmation) {
    window.open("../exercicio_3/indexq3.html", "_self");
  }
});

btnVerify.addEventListener("click", () => {
  const rodape = document.getElementById("rodape");

  if (qSelect == 0) {
    window.alert("Selecione uma alternativa");
  } else if (qSelect == 1) {
    rodape.style.opacity = "0"; // Iniciar a transição de opacidade
    setTimeout(() => {
      progressBar.classList.remove("none");
      rodape.innerHTML = `
              <div id="lineFooter"></div>
              <div class="botoes">
                  <img id="circleSuccess" src="../assets/circleSuccess.png" alt="">
                  <p id="textSuccess"><b id="h1Success">Boa!</b><br>Vamos para a próxima.</p>
                  <div id="btnNext">Avançar</div>
              </div>
          `;
  
      const style = document.createElement("style");
      style.innerHTML = `
          /* http://meyerweb.com/eric/tools/css/reset/ 
          v2.0 | 20110126
          License: none (public domain)
       */
       
       html, body, div, span, applet, object, iframe,
       h1, h2, h3, h4, h5, h6, p, blockquote, pre,
       a, abbr, acronym, address, big, cite, code,
       del, dfn, em, ins, kbd, q, s, samp,
       small, strike, strong, sub, sup, tt, var,
       b, u, i, center,
       dl, dt, dd, ol, ul, li,
       fieldset, form, label, legend,
       table, caption, tbody, tfoot, thead, tr, th, td,
       article, aside, canvas, details, embed, 
       figure, figcaption, footer, header, hgroup, 
       menu, nav, output, ruby, section, summary,
       time, mark, audio, video {
           margin: 0;
           padding: 0;
           border: 0;
           font-size: 100%;
           vertical-align: baseline;
       }
       /* HTML5 display-role reset for older browsers */
       article, aside, details, figcaption, figure, 
       footer, header, hgroup, menu, nav, section {
           display: block;
       }
       body {
           line-height: 1;
       }
       ol, ul {
           list-style: none;
       }
       blockquote, q {
           quotes: none;
       }
       blockquote:before, blockquote:after,
       q:before, q:after {
           content: '';
           content: none;
       }
       table {
           border-collapse: collapse;
           border-spacing: 0;
       }
       
       @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
       @keyframes fadeIn {
           from {
               opacity: 0;
           } to {
               opacity: 1;
           }
         }
         .fadeInText {
           /* Estilizando o texto dentro da box */
           text-align: center;
           color: #fff;
           margin-top: 16px;
           font-family: "Ubuntu", sans-serif;
           font-weight: 400;
           font-size: 110%;
           font-style: normal;
           animation: fadeIn 2s ease-out;
           animation-iteration-count: 1;
           animation-fill-mode: forwards;
       
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
         width: 12.5%;
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
         justify-content: space-evenly ;
         align-items: center;
         height: 110px;
       }
       
       #btnVerify {
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
         top: 60%;
         left: 36%;
       
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
         font-size: 13px;
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
       
       
          `;
      document.head.appendChild(style);
  
      rodape.style.opacity = "1"; // Fazer o rodapé reaparecer
      const btAvancar = document.getElementById("btnNext");
      btAvancar.addEventListener("click", () => {
        window.open("../exercicio_3/indexq3.html", "_self");
      })

      alternativa1.removeEventListener("click", () => {});
      alternativa2.removeEventListener("click", () => {});
      alternativa3.removeEventListener("click", () => {});
      alternativa4.removeEventListener("click", () => {});

      returnText.innerText = 
      `
      {
  "_id": ObjectId("1"),
  "nome": "Bulbasaur",
  "tipo1": "Grass",
  "tipo2": "Poison",
  "peso": 6.9,
  "altura": 0.7,
  "stats": {
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "speed": 45,
    "special_attack": 65,
    "special_defense": 65
  }


      `

      progressBar.style.width = "25%";

    }, 1000); // Tempo para a transição de opacidade
  } else {
    const alternativas = document.querySelectorAll(".alternativa");
    alternativas.forEach((alternativa) => {
      alternativa.removeEventListener("click", () => {});
    });
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
      style.innerHTML = `
          /* http://meyerweb.com/eric/tools/css/reset/ 
          v2.0 | 20110126
          License: none (public domain)
       */
       
       html, body, div, span, applet, object, iframe,
       h1, h2, h3, h4, h5, h6, p, blockquote, pre,
       a, abbr, acronym, address, big, cite, code,
       del, dfn, em, ins, kbd, q, s, samp,
       small, strike, strong, sub, sup, tt, var,
       b, u, i, center,
       dl, dt, dd, ol, ul, li,
       fieldset, form, label, legend,
       table, caption, tbody, tfoot, thead, tr, th, td,
       article, aside, canvas, details, embed, 
       figure, figcaption, footer, header, hgroup, 
       menu, nav, output, ruby, section, summary,
       time, mark, audio, video {
           margin: 0;
           padding: 0;
           border: 0;
           font-size: 100%;
           vertical-align: baseline;
       }
       /* HTML5 display-role reset for older browsers */
       article, aside, details, figcaption, figure, 
       footer, header, hgroup, menu, nav, section {
           display: block;
       }
       body {
           line-height: 1;
       }
       ol, ul {
           list-style: none;
       }
       blockquote, q {
           quotes: none;
       }
       blockquote:before, blockquote:after,
       q:before, q:after {
           content: '';
           content: none;
       }
       table {
           border-collapse: collapse;
           border-spacing: 0;
       }
       
       @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
       @keyframes fadeIn {
           from {
               opacity: 0;
           } to {
               opacity: 1;
           }
         }
         .fadeInText {
           /* Estilizando o texto dentro da box */
           text-align: center;
           color: #fff;
           margin-top: 16px;
           font-family: "Ubuntu", sans-serif;
           font-weight: 400;
           font-size: 110%;
           font-style: normal;
           animation: fadeIn 2s ease-out;
           animation-iteration-count: 1;
           animation-fill-mode: forwards;
       
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
         width: 12.5%;
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
         justify-content: space-evenly ;
         align-items: center;
         height: 110px;
       }
       
       #btnVerify {
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
        top: 60%;
        left: 36%;

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
        font-size: 13px;
        font-style: normal;
        align-content: center;
        text-align: center;
      }

      #alternativa1 {
        margin: 0 20px 20px 0;
      }

      #alternativa3 {
        margin: 0 20px 20px 0;
      }

      #alternativa1:hover, #alternativa2:hover, #alternativa3:hover, #alternativa4:hover { background-color: #1d292e; transition: 100ms; cursor: pointer;}

      .alternativa1Select {
        transition: 10ms;
        position: absolute;
        top: -180px;
        left: 135px;
      }

      .alternativa2Select {
        position: absolute;
        top: -180px;
        left: 140px;
      }

      .alternativa3Select {
        transition: 10ms;
        position: absolute;
        top: -180px;
        right: 120px;
      }

      .alternativa4Select {
        transition: 10ms;
        position: absolute;
        top: -180px;
        right: 165px;
      }

      #alternativa1Selected {
        width: 250px;
        height: 75px;
        border: 2px solid #55646C;
        border-radius: 20px;
        background-color: #37464F;
        margin: 0 26px 20px 0
      }

      #alternativa2Selected, #alternativa4Selected {
        /* Estilizando as alternativas */
        width: 250px;
        height: 75px;
        border: 2px solid #55646C;
        border-radius: 20px;
        background-color: #37464F;
      }

      #alternativa3Selected {
        /* Estilizando as alternativas */
        width: 250px;
        height: 75px;
        border: 2px solid #55646C;
        border-radius: 20px;
        background-color: #37464F;

        margin: 0 20px 20px 0;
      }
       
       
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
       
       
          `;
      document.head.appendChild(style);

      rodape.style.opacity = "1"; // Fazer o rodapé reaparecer

      alternativa1.removeEventListener("click", () => {});
      alternativa2.removeEventListener("click", () => {});
      alternativa3.removeEventListener("click", () => {});
      alternativa4.removeEventListener("click", () => {});

      if (qSelect == 2) {
        returnText.innerText = " {retornou vazio} ";
        returnText.style.color = "#EE4035";
      }
      
      if (qSelect == 3) {
        returnText.innerText = " {retornou vazio} ";
        returnText.style.color = "#EE4035";
      }
      
      if (qSelect == 4) {
        returnText.innerText = "[]";
        returnText.style.color = "#EE4035";
      }
      
      btnNext.addEventListener("click", () => {
        window.open("./indexq2.html", "_self");
      })

    }, 1000); // Tempo para a transição de opacidade
  }
});




alternativa1Selected.classList.add("none");
alternativa2Selected.classList.add("none");
alternativa3Selected.classList.add("none");
alternativa4Selected.classList.add("none");

let qSelect = 0;



function selecaoDeAlternativas() {
  alternativa1.addEventListener("click", () => {
    if ( qSelect == 0 ) {
      qSelect = 1;
      alternativa1Selected.classList.remove("none");
      alternativa1.classList.add("alternativa1Select");
    } else if ( qSelect == 1 ) {
      qSelect = 0;
      alternativa1Selected.classList.add("none");
      alternativa1.classList.remove("alternativa1Select");
    }
  });

  alternativa2.addEventListener("click", () => {
    if ( qSelect == 0 ) {
      qSelect = 2;
      alternativa2Selected.classList.remove("none");
      alternativa2.classList.add("alternativa2Select");
    } else if ( qSelect == 2 ) {
      qSelect = 0;
      alternativa2Selected.classList.add("none");
      alternativa2.classList.remove("alternativa2Select");
    }
  });

  alternativa3.addEventListener("click", () => {
    if ( qSelect == 0 ) {
      qSelect = 3;
      alternativa3Selected.classList.remove("none");
      alternativa3.classList.add("alternativa3Select");
    } else if ( qSelect == 3 ) {
      qSelect = 0;
      alternativa3Selected.classList.add("none");
      alternativa3.classList.remove("alternativa3Select");
    }
  });

  alternativa4.addEventListener("click", () => {
    if ( qSelect == 0 ) {
      qSelect = 4;
      alternativa4Selected.classList.remove("none");
      alternativa4.classList.add("alternativa4Select");
    } else if ( qSelect == 4 ) {
      qSelect = 0;
      alternativa4Selected.classList.add("none");
      alternativa4.classList.remove("alternativa4Select");
    }
  });

}

selecaoDeAlternativas();